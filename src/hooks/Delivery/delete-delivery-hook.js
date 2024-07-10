import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDeliveryAction } from '../../redux/actions/DeliveryAction'
import { notify } from '../../Components/uitlity/useNotification'

const DeleteDeliveryHook = () => {

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
                await dispatch(deleteDeliveryAction(formData,id))  
                setLoading(false)
    }

    const res = useSelector(state => state.allDeliver.deleteDelivery)

    useEffect(() => {
      if(loading === false){
         if(res.msg === 200){
            notify("Deleted successfully", "success")
            setTimeout(() => {
              window.location.reload(false)
          }, 2000);
         }else if(res.msg === "Captain Does Not exist"){
            notify(res.msg, "error")
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

  return [OnhandleClick, show, handleClose,handleShow ]
}

export default DeleteDeliveryHook