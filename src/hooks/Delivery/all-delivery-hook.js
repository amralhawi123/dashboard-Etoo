import { useEffect, useState } from 'react' 
import { geLimitDeliveryInPage, getAllDelivery, getAllDeliveryPage, getAllDeliverySearch } from '../../redux/actions/DeliveryAction'
import { useDispatch, useSelector } from 'react-redux'

const AllDeliveryHook = () => { 
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true) 
    const [page,setPage] = useState(1)  
    const showNumber = localStorage.getItem("showNumb") 


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
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }
    const [searchWord, setsearchWord] = useState('')
         
    const OnChangeSearch =(e) => {
       localStorage.setItem("wordDelivery", e.target.value)
       setsearchWord(e.target.value)
    }
    let word = ""
    const getStorag =() => {
       if(localStorage.getItem("wordDelivery") != null && localStorage.getItem("wordDelivery") !== ''){
        if(showNumber){
            word = `/search/${localStorage.getItem("wordDelivery")}?perpage=${showNumber}&page=${page}`
        }else{
            word = `/search/${localStorage.getItem("wordDelivery")}?perpage=5&page=1`
        }
       } else {
        if(showNumber){
            word =`?perpage=${showNumber}&page=${page}`
            localStorage.removeItem("wordDelivery")
        } else {
            word =`?perpage=5&page=${page}`
            localStorage.removeItem("wordDelivery")
        }
       }
    }

      // at click pagination
      const getPage = (page) => {
        setPage( page)
        const formData= new FormData()
        formData.append("token", token)
          dispatch(getAllDeliveryPage(page,showNumber,formData))  
     }

      // limit delvery
      const getLimit = async(limit) => {
        const formData= new FormData()
        formData.append("token", token)
         await dispatch(geLimitDeliveryInPage(limit,formData))
        
        }
        const getOrders = async() => {
            getStorag()
             const formData= new FormData()
             formData.append("token", token)
             await dispatch(getAllDeliverySearch(word,formData))
          }
      
          useEffect(() => {
            setTimeout(() => { 
                getOrders() 
            }, 1000);
          }, [searchWord,page])
      
          let showWord = ""
          if(localStorage.getItem("wordDelivery") != null){
            showWord = localStorage.getItem("wordDelivery")
          }

        const delivery = useSelector(state => state.allDeliver.delivery) 

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

let totalnumberDelivery = []
try{
    if(delivery.pagination){
        totalnumberDelivery = delivery.pagination.total
}else{
    totalnumberDelivery=[]
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


  return [head,handleOpen,pageCount,allDelivery,
    getPage,showNumber,OnChangeShowNumber,totalnumberDelivery,
    loading,OnChangeSearch ,showWord]
}

export default AllDeliveryHook