import{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addDeliveryAction } from '../../redux/actions/DeliveryAction'
import { notify } from '../../Components/uitlity/useNotification'

const AddDeliveryHook = () => {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [name,setName] = useState('')
  const [transType,setTransType] = useState('')
  const [phone,setPhone] = useState('')
  const [note,setNote] = useState('')
  const [image,setImagee] = useState('')
  const [selectedFile, setselectedFile] = useState(null)

  const onChangName= (e) => {
    setName(e.target.value)
 }
  const onChangTransType= (e) => {
    setTransType(e.target.value)
 }
  const onChangPhone= (e) => {
    setPhone(e.target.value)
 }
  const onChangNote= (e) => {
    setNote(e.target.value)
 }
 const onImageChange =(e) => {
  if(e.target.files && e.target.files[0]){
    setImagee(URL.createObjectURL(e.target.files[0]))
     setselectedFile(e.target.files[0])
  }
}

 const handleAdd = async(e) => { 
    setShowAdd(false) 
   e.preventDefault();

   if(phone.length !== 10){
      notify("رقم الهاتف يجب أن يكون 10 أرقام","warn")
      return ;
   }
   if(name==="" || selectedFile===null || transType==='' || note === ''){
      notify("من فضلك اكمل البيانات","warn")
      return ;
   }
          const formData= new FormData()
          formData.append("token", token)
          formData.append("name", name)
          formData.append("transportation_type", transType)
          formData.append("phone", phone)
          formData.append("note", note)
          formData.append("image",selectedFile)

          setLoading(true)
          await dispatch(addDeliveryAction(formData)) 
          setLoading(false)
      } 

  const res = useSelector(state => state.allDeliver.addDelivery)

  useEffect(() => {
    if(loading === false){
      if(res){
         if(res.status === true){
            notify(res.msg, "success")
            setTimeout(() => {
               window.location.reload(false)
            }, 2000);
         }else{
            notify("There is a problem with the addition delivery", "error")
         }
      }
    }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [loading])
    const [showAdd, setShowAdd] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);


  return [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,name,transType,phone,note,
    onChangName,onChangTransType,onChangPhone,onChangNote,onImageChange
   ]
}

export default AddDeliveryHook