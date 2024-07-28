import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLimitMessagePage, getAllMessage, getAllMessagePage, getAllMessageSearch } from "../../redux/actions/MessageAction";


const AllMessageHook = () => { 

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true) 
    const [loadingSearch,setLoadingSearch] = useState(true) 
    const [page,setPage] = useState(1)
    const showNumberMessages = localStorage.getItem("showNumberMessages")

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getAllMessage(formData)) 
            setLoading(false)
        }
        getData()    
        setTimeout(() => {
            getLimit(showNumberMessages)     
        }, 1000);
    }, [])

    const OnChangeShowNumber= (e) => { 
        localStorage.setItem("showNumberMessages", e.target.value)
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }
    const [searchWord, setsearchWord] = useState('')
         
    const OnChangeSearch =(e) => {
       localStorage.setItem("wordMessage", e.target.value)
       setsearchWord(e.target.value)
    }
    let word = ""
    const getStorag =() => {
        if(localStorage.getItem("wordMessage") != null && localStorage.getItem("wordMessage") !== ''){
        if(showNumberMessages){
            word = `/search/${localStorage.getItem("wordMessage")}?perpage=${showNumberMessages}&page=${page}`
        }else{
            word = `/search/${localStorage.getItem("wordMessage")}?perpage=5&page=1`
        }
        } else {
        if(showNumberMessages){
            word =`?perpage=${showNumberMessages}&page=${page}`
            localStorage.removeItem("wordMessage")
        } else {
            word =`?perpage=5&page=${page}`
            localStorage.removeItem("wordMessage")
        }
        }
    }

    // limit delvery
    const getLimit = async(limit) => {
    const formData= new FormData()
    formData.append("token", token)
        await dispatch(getAllLimitMessagePage(limit,formData)) 
    }

    // at click pagination
    const getPage = async(page) => {
        setPage(page)
    const formData= new FormData()
    formData.append("token", token)
        await dispatch(getAllMessagePage(page,showNumberMessages,formData))  
    }
    const getOrders = async() => {
        getStorag()
            const formData= new FormData()
            formData.append("token", token) 
            setLoadingSearch(true)
            await dispatch(getAllMessageSearch(word,formData)) 
            setLoadingSearch(false)
        }
    
        useEffect(() => {
        setTimeout(() => { 
            getOrders() 
        }, 1200);
        }, [searchWord,page ])
    
        let showWord = ""
        if(localStorage.getItem("wordMessage") != null){
        showWord = localStorage.getItem("wordMessage")
        }

    const res = useSelector(state => state.MessageReducer.messages) 

    let allMessages = []
    try {      
       if(res.data){
        allMessages = res.data
       }else{
        allMessages= []
        }
    } catch (error) {
       
    }

let pageCount = []
try{
    if(res.pagination){
        pageCount = res.pagination["last_page"]
}else{
    pageCount=[]
}
}catch(e){} 

let totalnumberMessages = []
try{
    if(res.pagination){
        totalnumberMessages = res.pagination.total
}else{
    totalnumberMessages=[]
}
}catch(e){}

    function headData(name) {
        return { name };
      }
      
      const head = [
          headData('id'
          ), 
          headData('Notifications'
          ), 
          headData('Title'
          ), 
          headData('Action'
          ), 
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


  return [head,handleOpen,allMessages ,totalnumberMessages,pageCount,getPage,loading,
    showNumberMessages,OnChangeShowNumber,OnChangeSearch,showWord,loadingSearch
  ]
}

export default AllMessageHook