import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOffers, getAllOfferSearch, getAllOffersPage, getAllOffersPageLimit } from '../../redux/actions/OffersAction'
const AllOffersHook = () => { 
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    const [loading,setLoading] = useState(true)  
    const [page,setPage] = useState(1)  
    const showNumberOffers = localStorage.getItem("showNumberOffers") 

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getAllOffers(formData)) 
            setLoading(false)
        }
        getData()         
                getLimit(showNumberOffers)
    }, [])

    const OnChangeShowNumber= (e) => { 
        localStorage.setItem("showNumberOffers", e.target.value)
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }

    const [searchWord, setsearchWord] = useState('')
         
    const OnChangeSearch =(e) => {
       localStorage.setItem("wordOffer", e.target.value)
       setsearchWord(e.target.value)
    }
    let word = ""
    const getStorag =() => {
        if(localStorage.getItem("wordOffer") != null && localStorage.getItem("wordOffer") !== ''){
        if(showNumberOffers){
            word = `/search/${localStorage.getItem("wordOffer")}?perpage=${showNumberOffers}&page=${page}`
        }else{
            word = `/search/${localStorage.getItem("wordOffer")}?perpage=5&page=1`
        }
        } else {
        if(showNumberOffers){
            word =`?perpage=${showNumberOffers}&page=${page}`
            localStorage.removeItem("wordOffer")
        } else {
            word =`?perpage=5&page=${page}`
            localStorage.removeItem("wordOffer")
        }
        }
    }
    // limit delvery
    const getLimit = async(limit) => {
        const formData= new FormData()
        formData.append("token", token)
            await dispatch(getAllOffersPageLimit(limit,formData)) 
        }
        
    // at click pagination
    const getPage = async(page) => {
        setPage( page)
        const formData= new FormData()
        formData.append("token", token)
            await dispatch(getAllOffersPage(showNumberOffers,page,formData))  
        }
        const res = useSelector(state => state.OffersReducer.offers) 

        const getOrders = async() => {
            getStorag()
                const formData= new FormData()
                formData.append("token", token) 
                await dispatch(getAllOfferSearch(word,formData)) 
            }
        
            useEffect(() => {
            setTimeout(() => { 
                getOrders() 
            }, 1200);
            }, [searchWord,page ])
        
            let showWord = ""
            if(localStorage.getItem("wordOffer") != null){
            showWord = localStorage.getItem("wordOffer")
            }
        let allOffers = []
        try {      
           if(res.data){
            allOffers = res.data
           }else{
            allOffers= []
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
    
    let totalnumberOffers = []
    try{
        if(res.pagination){
            totalnumberOffers = res.pagination.total
    }else{
        totalnumberOffers=[]
    }
    }catch(e){}

    function headData(name) {
        return { name};
      }
      
      const head = [
          headData('id'), 
          headData('Image'), 
          headData('Offer Title') ,
          headData('Offer Price'),  
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


  return [allOffers,pageCount,loading,head,handleOpen,totalnumberOffers,getPage,
    OnChangeShowNumber,showNumberOffers,showWord,OnChangeSearch
   ]
}

export default AllOffersHook