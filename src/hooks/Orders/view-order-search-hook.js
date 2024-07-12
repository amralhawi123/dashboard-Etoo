import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrderSearch } from "../../redux/actions/OrdersAction"

const ViewOrderSerachHook = () => {
    const [searchWord, setsearchWord] = useState('')
    const token = localStorage.getItem("token")
    
    const dispatch = useDispatch()

    const OnChangeSearch =(e) => {
      localStorage.setItem("searchWord", e.target.value)
      setsearchWord(e.target.value)
   }
   
   let word = ""
   const getStorag =() => {
      if(localStorage.getItem("searchWord") != null && localStorage.getItem("searchWord") !== ''){
         word = `/search/${localStorage.getItem("searchWord")}`
      } else {
         word =''
         localStorage.removeItem("searchWord")
      }
   }

    const getOrders = async() => {
      getStorag()
       const formData= new FormData()
       formData.append("token", token)
       await dispatch(getAllOrderSearch(word,formData))
    }

    useEffect(() => {
   setTimeout(() => { 
      getOrders() 
   }, 1500);
    }, [searchWord])


    let showWord = ""
    if(localStorage.getItem("searchWord") != null){
      showWord = localStorage.getItem("searchWord")
    }
    
    return [showWord,OnChangeSearch]
}

export default ViewOrderSerachHook