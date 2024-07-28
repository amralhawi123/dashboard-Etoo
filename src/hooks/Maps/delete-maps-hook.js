import  { useEffect, useState } from 'react'
import { deleteMaps } from '../../redux/actions/MapsAction'
import { useDispatch, useSelector } from 'react-redux'
import { notify } from './../../Components/uitlity/useNotification';

const DeleteMapsHook = () => {
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
                await dispatch(deleteMaps(id,formData))  
                setLoading(false)
    }

    const res = useSelector(state => state.MapsReducer.deleteMap)

    useEffect(() => {
      if(loading === false){
         if(res.status === true){
            notify(res.succNum, "success") 
            setTimeout(() => {
              window.location.reload(false)
          }, 2000);
         }else {
            notify(res.succNum, "error")
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

  return [OnhandleClick, show, handleClose,handleShow ]
}

export default DeleteMapsHook