import React, { useEffect, useState } from 'react'
import product1 from "../../imgs/product-01.png" 
import { getAllDelivery } from '../../redux/actions/DeliveryAction'
import { useDispatch, useSelector } from 'react-redux'
const AllDeliveryHook = () => { 
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ldG9vbGFicy5jb20vdjMvcHVibGljL2NwYW5lbC9sb2dpbiIsImlhdCI6MTcxOTUwOTA5MCwiZXhwIjoxNzE5NTEyNjkwLCJuYmYiOjE3MTk1MDkwOTAsImp0aSI6IlNCVW5hRjI4Q3hQTklyNG0iLCJzdWIiOiIxNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.imviaW-lTM6_U-O3nFNCKoprRuF05UoFSyS4RNvSHDI"
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)

    useEffect( () => {
        const getData = async ()=>{
            // const formData= new FormData()
            // formData.append("token", token)
            setLoading(false)
            await dispatch(getAllDelivery()) 
            setLoading(true)
        }
        getData()
    }, [])
    const delivery = useSelector(state => state.allDeliver.delivery) 
    if(delivery)
console.log(delivery)

    function headData(name) {
        return { name};
      }
      
      const head = [
          headData('id'), 
          headData('Image'), 
          headData('Name') ,
          headData('Phone'),  
          headData('Transportation type'),  
          headData('Note'),  
          headData('Action'), 
      ];
    function createData(id,image,name,phone,transType,note) {
        return { id ,image,name,phone,transType,note};
      }

      const rows = [
        createData(1,<img style={{marginRight:"8px", width:"60px"}} src={product1} alt="brand1"/>,
            'Amr', 233522,"car","any thing"),
      ];

      const handleOpen =(e) => {  
        hideAllMenus()
        let box = document.getElementById(e) 
        if (box.style.display === "block") { 
            box.style.display = "none";
        } else { 
            box.style.display = "block";
        } 
}

    // Function to hide all menus
    function hideAllMenus() {
        const menus = document.querySelectorAll(".box-edit")
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
    // Attach event listener to document to hide menus when clicking anywhere
    document.addEventListener('click', function(event) {
      const isIcon = event.target.classList.contains('icon-box');
      if (!isIcon) {
          hideAllMenus();
      }
  });


  return [rows,head,handleOpen ]
}

export default AllDeliveryHook