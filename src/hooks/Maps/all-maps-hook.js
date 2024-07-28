import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMaps, getAllMapsLimitInPage, getAllMapsPage } from '../../redux/actions/MapsAction'

const AllMapsHook = () => { 
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    const [loading,setLoading] = useState(true)  
    const [loadingSearch,setLoadingSearch] = useState(true)  
    // const [page,setPage] = useState(1)  
    const showNumberMaps = localStorage.getItem("showNumberMaps") 

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getAllMaps(formData)) 
            setLoading(false)
        }
        getData()         
                getLimit(showNumberMaps)
    }, [])

    const OnChangeShowNumber= (e) => { 
        localStorage.setItem("showNumberMaps", e.target.value)
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }

    // limit delvery
    const getLimit = async(limit) => {
        const formData= new FormData()
        formData.append("token", token)
            await dispatch(getAllMapsLimitInPage(limit,formData)) 
        }
    // at click pagination
    const getPage = async(page) => {
        // setPage( page)
        const formData= new FormData()
        formData.append("token", token)
            await dispatch(getAllMapsPage(showNumberMaps,page,formData))  
        }
    
    function headData(name) {
        return { name };
      }

		
      const head = [
          headData('id'
          ), 
          headData('Stats Name'
          ), 
          headData('location Name'
          ), 
          headData('Admin Unit Name'
          ), 
          headData('Action'
          ), 
      ];
      const maps = useSelector(state => state.MapsReducer.maps) 

      let allMaps = []
      try {      
         if(maps.data){
            allMaps = maps.data
         }else{
            allMaps= []
          }
      } catch (error) {
         
      }
  
  let pageCount = []
  try{
      if(maps.pagination){
          pageCount = maps.pagination["last_page"]
  }else{
      pageCount=[]
  }
  }catch(e){} 
  
  let totalnumberMaps = []
  try{
      if(maps.pagination){
        totalnumberMaps = maps.pagination.total
  }else{
    totalnumberMaps=[]
  }
  }catch(e){}

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


  return [totalnumberMaps,head,handleOpen,pageCount,allMaps,loading,
    showNumberMaps,OnChangeShowNumber,getPage
   ]
}

export default AllMapsHook