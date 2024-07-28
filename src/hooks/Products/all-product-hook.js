import { useEffect, useState } from 'react'
import { allProductSearch, getAllProducts, getAllProductsLimitInPage, getAllProductsPage } from '../../redux/actions/ProductsAction'
import { useDispatch, useSelector } from 'react-redux' 
const AllProductsHook = () => { 
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true) 
    const [loadingSearch,setLoadingSearch] = useState(true) 
    const [page,setPage] = useState(1)
    const showNumberProducts = localStorage.getItem("showNumberProducts")

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getAllProducts(formData)) 
            setLoading(false)
        }
        getData()   
            getLimit(showNumberProducts)
    }, [])

    const OnChangeShowNumber= (e) => { 
        localStorage.setItem("showNumberProducts", e.target.value)
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }
    const [searchWord, setsearchWord] = useState('')
         
    const OnChangeSearch =(e) => {
       localStorage.setItem("wordProduct", e.target.value)
       setsearchWord(e.target.value)
    }
    let word = ""
    const getStorag =() => {
        if(localStorage.getItem("wordProduct") != null && localStorage.getItem("wordProduct") !== ''){
        if(showNumberProducts){
            word = `/search/${localStorage.getItem("wordProduct")}?perpage=${showNumberProducts}&page=${page}`
        }else{
            word = `/search/${localStorage.getItem("wordProduct")}?perpage=5&page=1`
        }
        } else {
        if(showNumberProducts){
            word =`?perpage=${showNumberProducts}&page=${page}`
            localStorage.removeItem("wordProduct")
        } else {
            word =`?perpage=5&page=${page}`
            localStorage.removeItem("wordProduct")
        }
        }
    }

    // at click pagination
    const getPage = async(page) => {
        setPage(page)
    const formData= new FormData()
    formData.append("token", token)
        await dispatch(getAllProductsPage(page,showNumberProducts,formData))  
    }

    // limit delvery
    const getLimit = async(limit) => {
        const formData= new FormData()
        formData.append("token", token)
            await dispatch(getAllProductsLimitInPage(limit,formData)) 
        }

const getOrders = async() => {
    getStorag()
        const formData= new FormData()
        formData.append("token", token)
        setLoadingSearch(true)
        await dispatch(allProductSearch(word,formData))
        setLoadingSearch(false)
    }

    useEffect(() => {
        setTimeout(() => { 
                getOrders() 
    }, 1200);
    }, [searchWord,page])

    let showWord = ""
    if(localStorage.getItem("wordProduct") != null){
    showWord = localStorage.getItem("wordProduct")
    }
        
    function headData(name) {
        return { name};
      }
      
      const head = [
          headData('id'), 
          headData('Image'), 
          headData('Product Name'), 
          headData('Product Description'), 
          headData('Category Name'), 
          headData('Product Price'), 
          headData('product Price Old'), 
          headData('Action'), 
      ];
      const res = useSelector(state => state.ProductsReducer.products) 

      let allProducts = []
      try {      
         if(res.data){
            allProducts = res.data
         }else{
            allProducts= []
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
  
  let totalnumberProducts = []
  try{
      if(res.pagination){
        totalnumberProducts = res.pagination.total
  }else{
    totalnumberProducts=[]
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


  return [allProducts,head,handleOpen,pageCount,totalnumberProducts,
    loading,getPage,OnChangeShowNumber,showNumberProducts,showWord,OnChangeSearch
   ]
}

export default AllProductsHook