import{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders, getAllOrderSearch, getAllOrdersPage, getLimitOrdersInPage } from '../../redux/actions/OrdersAction'

const AllOrderHook = () => { 

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    const [loading,setLoading] = useState(true)  
    const [loadingSearch,setLoadingSearch] = useState(true)  
    const [page,setPage] = useState(1)  
    const showNumberOrders = localStorage.getItem("showNumberOrders") 

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getAllOrders(formData)) 
            setLoading(false)
        }
        getData()         
                getLimit(showNumberOrders)
    }, [])


    const OnChangeShowNumber= (e) => { 
        localStorage.setItem("showNumberOrders", e.target.value)
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }
    const [searchWord, setsearchWord] = useState('')
         
    const OnChangeSearch =(e) => {
       localStorage.setItem("searchWord", e.target.value)
       setsearchWord(e.target.value)
    }

          // limit delvery
          const getLimit = async(limit) => {
            const formData= new FormData()
            formData.append("token", token)
             await dispatch(getLimitOrdersInPage(limit,formData)) 
            }

            let word = ""
            const getStorag =() => {
               if(localStorage.getItem("searchWord") != null && localStorage.getItem("searchWord") !== ''){
                if(showNumberOrders){
                    word = `/search/${localStorage.getItem("searchWord")}?perpage=${showNumberOrders}&page=${page}`
                }else{
                    word = `/search/${localStorage.getItem("searchWord")}?perpage=5&page=1`
                }
               } else {
                if(showNumberOrders){
                    word =`?perpage=${showNumberOrders}&page=${page}`
                    localStorage.removeItem("searchWord")
                } else {
                    word =`?perpage=5&page=${page}`
                    localStorage.removeItem("searchWord")
                }
               }
            }

          // at click pagination
          const getPage = async(page) => {
            setPage( page)
            const formData= new FormData()
            formData.append("token", token)
                await dispatch(getAllOrdersPage(page,showNumberOrders,formData))  
         }

          const getOrders = async() => {
            getStorag()
             const formData= new FormData()
             formData.append("token", token)
             setLoadingSearch(true)
             await dispatch(getAllOrderSearch(word,formData))
             setLoadingSearch(false)
          }
      
          useEffect(() => {
            setTimeout(() => { 
                getOrders() 
            }, 1000);
          }, [searchWord,page])
      
          let showWord = ""
          if(localStorage.getItem("searchWord") != null){
            showWord = localStorage.getItem("searchWord")
          }

    const orders = useSelector(state => state.OrdersReducer.orders) 

    let allOrders = []
    try {      
       if(orders.data){
        allOrders = orders.data
       }else{
        allOrders= []
        }
    } catch (error) {
       
    }

let pageCount = []
try{
    if(orders.pagination){
        pageCount = orders.pagination["last_page"]
}else{
    pageCount=[]
}
}catch(e){} 

let totalnumberOrders = []
try{
    if(orders.pagination){
        totalnumberOrders = orders.pagination.total
}else{
    totalnumberOrders=[]
}
}catch(e){}

    function headData(name) {
        return { name };
      }
      
      const head = [
          headData('id' 
          ), 
          headData('idClient Name' 
          ), 
          headData('location' 
          ), 
          headData('Trans Cost' 
          ), 
          headData('Landmark' 
          ), 
          headData('Order Satus' 
          ), 
          headData('Delivery Boys' 
          ), 
          headData('Date' 
          ), 
          headData('Actions' 
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


  return [head,handleOpen,allOrders ,loading,pageCount,getPage,totalnumberOrders,
    showNumberOrders,OnChangeShowNumber,showWord,OnChangeSearch,loadingSearch
  ]
}

export default AllOrderHook