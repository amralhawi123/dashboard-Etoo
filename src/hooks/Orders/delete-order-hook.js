import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'  
import { deleteOrdersAction } from '../../redux/actions/OrdersAction'
import { notify } from './../../Components/uitlity/useNotification';

const DeleteOrderHook = () => {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [id, setId] = useState()
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
      setShow(true);
      setId(e)
    }
    
    const OnhandleClick= async() => {
        setShow(false)  
                const formData= new FormData()
                formData.append("token", token)
                setLoading(true)
                await dispatch(deleteOrdersAction(id,formData))  
                setLoading(false)
    }

    const res = useSelector(state => state.OrdersReducer.deleteOrders)

    useEffect(() => {
      if(loading === false){
         if(res.status === true){
            notify(res.msg, "success") 
            setTimeout(() => {
              window.location.reload(false)
          }, 2000);
         }else {
            notify(res.msg, "error")
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

  return [OnhandleClick, show, handleClose,handleShow ]
}

export default DeleteOrderHook