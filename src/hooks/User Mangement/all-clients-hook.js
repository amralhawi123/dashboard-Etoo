import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllClientsAction } from "../../redux/actions/ClintesAction"

const AllClientsHook = () => {
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    const [loading,setLoading] = useState(true)     

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getAllClientsAction(formData)) 
            setLoading(false)
        }
        getData()         
    }, [])
    const res = useSelector(state => state.ClientsReducer.clients) 

    let allClients = []
    try {      
       if(res.data){
        allClients = res.data
       }else{
        allClients= []
        }
    } catch (error) {
       
    }

  return [allClients]
}

export default AllClientsHook