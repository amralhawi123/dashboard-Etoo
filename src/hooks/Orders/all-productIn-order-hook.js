import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductInOredr, getAllOrderProductInOredrPage, getAllOrderProductlimitInPage } from "../../redux/actions/OrdersAction"

const AllProductInOrderHook = ({id}) => {

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true) 

    let showNumberProducts
    if(localStorage.getItem("showNumberProducts") !== null) {
        showNumberProducts = localStorage.getItem("showNumberProducts")
    }else {
        showNumberProducts = 2
    }

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getAllProductInOredr(id,formData)) 
            setLoading(false)
        }
        getData() 
        setTimeout(() => {
            getLimit(showNumberProducts)
        }, 1500);
    }, [])
    
    const OnChangeShowNumber= (e) => { 
        localStorage.setItem("showNumberProducts", e.target.value)
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }

    const getPage =(page)=>{
        const formData= new FormData()
        formData.append("token", token)
          dispatch(getAllOrderProductInOredrPage(id,page,showNumberProducts,formData))  
    }

          // limit delvery
          const getLimit = async(limit) => {
            const formData= new FormData()
            formData.append("token", token)
             await dispatch(getAllOrderProductlimitInPage(id,limit,formData))
            
            }

    const oneOrderdetails = useSelector(state => state.OrdersReducer.orderProductsDetails)
    
    let allOrderProducts = []
    try {      
       if(oneOrderdetails.data){
        allOrderProducts = oneOrderdetails.data
       }else{
        allOrderProducts= []
        }
    } catch (error) {
       
    }

    let pageCount = []
try{
    if(oneOrderdetails.pagination){
        pageCount = oneOrderdetails.pagination["last_page"]
}else{
    pageCount=[]
}
}catch(e){} 

    let totalnumberProducts = []
    try{
        if(oneOrderdetails.pagination){
            totalnumberProducts = oneOrderdetails.pagination.total
    }else{
        totalnumberProducts=[]
    }
    }catch(e){}

    function headData(name) {
        return { name };
      }
      
      const head = [
          headData('Id' 
          ), 
          headData('Order Id' 
          ), 
          headData('Product Name' 
          ), 
          headData('Product Price' 
          ), 
          headData('Image' 
          ), 
          headData('Quantity' 
          ), 
      ];

    return [allOrderProducts,head,loading,showNumberProducts,OnChangeShowNumber,totalnumberProducts,pageCount,
        getPage
    ]
}

export default AllProductInOrderHook