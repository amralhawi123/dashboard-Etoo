import { useEffect, useState } from 'react' 
import { geLimitDeliveryInPage, getAllDelivery, getAllDeliveryPage } from '../../redux/actions/DeliveryAction'
import { useDispatch, useSelector } from 'react-redux'

const AllDeliveryHook = () => { 
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    const [showNumber,setShowNumber] = useState(localStorage.getItem("showNumb"))

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getAllDelivery(formData)) 
            setLoading(false)
        }
        getData()
        getLimit(showNumber)
    }, [])
    
    const OnChangeShowNumber= (e) => { 
        localStorage.setItem("showNumb", e.target.value)
    }
    
      // at click pagination
      const getPage = (page) => {
        const formData= new FormData()
        formData.append("token", token)
          dispatch(getAllDeliveryPage(page,formData))  
     }

      // limit delvery
      const getLimit = async(limit) => {
        const formData= new FormData()
        formData.append("token", token)
         await dispatch(geLimitDeliveryInPage(limit,formData))
        
        }
        
        const delivery = useSelector(state => state.allDeliver.delivery) 
        console.log(delivery)
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
        pageCount = delivery.pagination["last_page"]
}else{
    pageCount=[]
}
}catch(e){} 

let numberEnteris = []
try{
    if(delivery.pagination){
        numberEnteris = delivery.pagination.total
}else{
    numberEnteris=[]
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


  return [head,handleOpen,pageCount,allDelivery,getPage,showNumber,OnChangeShowNumber,numberEnteris,loading ]
}

export default AllDeliveryHook