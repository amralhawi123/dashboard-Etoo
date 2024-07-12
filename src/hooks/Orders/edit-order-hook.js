import { useEffect, useState } from 'react'
import { getOrderDetailsAction, updateOrderAction } from '../../redux/actions/OrdersAction';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../Components/uitlity/useNotification';

const EditOrderHook = () => {
  const token = localStorage.getItem("token")
    const [showEdit, setShowEdit] = useState(false);
    const [id, setId] = useState()
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    const [LoadingData, setLoadingData] = useState(true)
    const [status,setStatus] = useState('')
    const [statusID,setStatusId] = useState(0)

    const OnChangeStatus =(e)=>{
      e.persist()
      setStatus(e.target.value) 
      setStatusId(e.target.options[e.target.selectedIndex].id) 
    }
    

    const handleCloseEdit = () => setShowEdit(false);

    const handleShowEdit = async(e) => {
      setShowEdit(true);
      setId(e)
      const formData= new FormData()
      formData.append("token", token)
      setLoadingData(true)
      await dispatch(getOrderDetailsAction(e,formData))
      setLoadingData(false)
    }

    const oneOrder = useSelector(state => state.OrdersReducer.orderDetails)
    useEffect(() => { 
      if(LoadingData === false){
        if(oneOrder.Order){
          setStatus(oneOrder.Order["Order Status"]) 
        }
      }
    }, [LoadingData, oneOrder])


    const handleEdit= async() => {
        setShowEdit(false) 
        const formData= new FormData()
        formData.append("token", token)
        formData.append("status_id", statusID)
        setLoading(true)
        await dispatch(updateOrderAction(id,formData))
        setLoading(false)
    }

    const res = useSelector(state => state.OrdersReducer.updateOrder)
    useEffect(() => {
      if(loading === false){
        if(res.status){
          if(res.status === true){
             notify(res.msg, "success")
             setTimeout(() => {
               window.location.reload(false)
           }, 2000);
        }else{
          notify("There is a problem with the editing Order", "error")
       }
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

  return [ handleEdit, showEdit,handleCloseEdit,handleShowEdit,status,OnChangeStatus ]
}

export default EditOrderHook