import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessageAction } from '../../redux/actions/MessageAction'
import { notify } from '../../Components/uitlity/useNotification'

const AddMessageHook = () => {

  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [title,setTitle] = useState('')
  const [clientSelect,setClientSelect] = useState()
  const [notifications,setNotifications] = useState('')
    const [showAdd, setShowAdd] = useState(false);

    const onChangTitle= (e) => {
      setTitle(e.target.value)
   }
    const onChangClientSelect= (e) => {
      setClientSelect(e.target.options[e.target.selectedIndex].id)
    }

    const onChangNotification= (e) => {
      setNotifications(e.target.value)
   }

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const handleAdd = async(e) => { 
      setShowAdd(false) 
     e.preventDefault();
  
     if(title===""){
        notify("من فضلك اكمل البيانات","warn")
        return ;
     }
            const formData= new FormData()
            formData.append("token", token)
            formData.append("title", title) 
            formData.append("notification", notifications)
            formData.append("client_id", clientSelect) 
  
            setLoading(true)
            await dispatch(addMessageAction(formData)) 
            setLoading(false)
        } 
  
    const res = useSelector(state => state.MessageReducer.addMessage)

useEffect(() => {
  if(loading === false){
    if(res){
      if(res.status === true){
         notify(res.msg, "success")
      //    setTimeout(() => {
      //      window.location.reload(false)
      //  }, 2000);
    }else{
      notify(res.msg, "error")
   }
     }
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [loading])

  return [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,notifications,clientSelect,title,
    onChangTitle,onChangClientSelect,onChangNotification
   ]
}

export default AddMessageHook