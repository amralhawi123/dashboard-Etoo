import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneMessageAction, updateMessageAction } from '../../redux/actions/MessageAction'
import { notify } from '../../Components/uitlity/useNotification'

const EditMessageHook = () => {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [titleEdit,setTitleEdit] = useState('')
  const [clientSelectEdit,setClientSelectEdit] = useState()
  const [notificationsEdit,setNotificationsEdit] = useState('')
  const [id, setId] = useState()
  const [LoadingData, setLoadingData] = useState(true)

    const [showEdit, setShowEdit] = useState(false);

    const onChangTitleEdit= (e) => {
      setTitleEdit(e.target.value)
   }
    const onChangClientSelectEdit= (e) => {
      setClientSelectEdit(e.target.options[e.target.selectedIndex].id)
    }

    const onChangNotificationEdit= (e) => {
      setNotificationsEdit(e.target.value)
   }

    const handleCloseEdit = () => setShowEdit(false);

        const handleShowEdit = async(e) => {
      setShowEdit(true);
      setId(e)
      const formData= new FormData()
      formData.append("token", token)
      setLoadingData(true)
      await dispatch(getOneMessageAction(e,formData))
      setLoadingData(false)
    }

    const oneMessage = useSelector(state => state.MessageReducer.oneMessage)

    useEffect(() => { 
      if(LoadingData === false){
        if(oneMessage.Notification){
          setTitleEdit(oneMessage.Notification.Title) 
          setNotificationsEdit(oneMessage.Notification.Notification)  
        }
      }
    }, [LoadingData, oneMessage])

    const handleEdit= async() => {
        setShowEdit(false) 
        const formData= new FormData()
        formData.append("token", token)
        formData.append("title", titleEdit) 
        formData.append("notification", notificationsEdit)
        formData.append("client_id", clientSelectEdit) 

        setLoading(true)
        await dispatch(updateMessageAction(id,formData)) 
        setLoading(false)
    }
    const res = useSelector(state => state.MessageReducer.updateMessage)

    useEffect(() => {
      if(loading === false){
        if(res.status){
          if(res.status === true){
             notify(res.msg, "success")
             setTimeout(() => {
               window.location.reload(false)
           }, 2000);
        }else{
          notify(res.msg, "error")
       }
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

  return [ handleEdit, showEdit,handleCloseEdit,handleShowEdit ,
    onChangTitleEdit,titleEdit,onChangNotificationEdit,notificationsEdit,
    onChangClientSelectEdit,clientSelectEdit
  ]
}

export default EditMessageHook