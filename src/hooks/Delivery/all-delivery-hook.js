import React, { useEffect, useState } from 'react'
import product1 from "../../imgs/product-01.png" 
import { getAllDelivery, getAllDeliveryPage } from '../../redux/actions/DeliveryAction'
import { useDispatch, useSelector } from 'react-redux'
const AllDeliveryHook = () => { 
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ldG9vbGFicy5jb20vdjMvcHVibGljL2NwYW5lbC9sb2dpbiIsImlhdCI6MTcxOTUyODQ0MSwiZXhwIjoxNzE5NTMyMDQxLCJuYmYiOjE3MTk1Mjg0NDEsImp0aSI6ImJsT2kwWmd1VGxneGcxZVMiLCJzdWIiOiIxNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ._QFajnvs7tpEPIEWA94W9ZxDyFrvRlHjE2Q21nF4w2E"
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(false)
            await dispatch(getAllDelivery(formData)) 
            setLoading(true)
        }
        getData()
    }, [])
    const delivery = useSelector(state => state.allDeliver.delivery) 

    const onPress = async(page) => { 
        dispatch(getAllDeliveryPage(page))
     }

let allDelivery = []
try {      
   if(delivery.data){
    allDelivery = delivery.data
   }else{
    allDelivery= []
    }
} catch (error) {
   
}

let pageCount = []
try{
    if(delivery.pagination){
        pageCount = delivery.pagination.total
}else{
    pageCount=[]
}
}catch(e){} 

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


  return [head,handleOpen,pageCount,allDelivery,onPress ]
}

export default AllDeliveryHook