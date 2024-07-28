import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOfferAction } from '../../redux/actions/OffersAction'
import { notify } from './../../Components/uitlity/useNotification';

const DeleteOfferHook = () => {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [id, setId] = useState()
  const [loading,setLoading] = useState(true) 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
      setShow(true);
      setId(e)
    }

    const OnhandleClick= async(e) => {
      setShow(false)
      const formData= new FormData()
      formData.append("token", token)
      setLoading(true)
      await dispatch(deleteOfferAction(id,formData))  
      setLoading(false) 
  }

  const res = useSelector(state => state.OffersReducer.deleteOffer)

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

export default DeleteOfferHook