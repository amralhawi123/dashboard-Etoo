import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editDeliveryAction, getOnDeliveryAction } from '../../redux/actions/DeliveryAction'
import { notify } from '../../Components/uitlity/useNotification'

const EditDeliveryHook = () => {

  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [nameEdit,setName] = useState('')
  const [transTypeEdit,setTransType] = useState('')
  const [phoneEdit,setPhone] = useState('')
  const [noteEdit,setNote] = useState('')
  const [selectedFile, setselectedFile] = useState(null)
  const [LoadingData, setLoadingData] = useState(true)
  const [id, setId] = useState()

  const onChangNameEdit= (e) => {
    e.persist()
    setName(e.target.value)
 }
  const onChangTransTypeEdit= (e) => {
    e.persist()
    setTransType(e.target.value)
 }
  const onChangPhoneEdit= (e) => {
    e.persist()
    setPhone(e.target.value)
 }
  const onChangNoteEdit= (e) => {
    e.persist()
    setNote(e.target.value)
 }
 const onImageChangeEdit =(e) => {
  if(e.target.files && e.target.files[0]){
     setselectedFile(e.target.files[0])
  }
}

    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    
    const handleShowEdit = async(id) => {
      setShowEdit(true);
        const formData= new FormData()
        formData.append("token", token)
        setLoadingData(true)
        await dispatch(getOnDeliveryAction(id,formData))
        setLoadingData(false)
        setId(id)
    }

    const oneDelivery = useSelector(state => state.allDeliver.getOneDelivery)

    useEffect(() => { 
      if(LoadingData === false){
      if(oneDelivery["Delivery Boy"]){
        setName(oneDelivery["Delivery Boy"]["captain_name"])
        setNote(oneDelivery["Delivery Boy"].note)
        setPhone(oneDelivery["Delivery Boy"].phone)
        setTransType(oneDelivery["Delivery Boy"]["transportation_type"]) 
      }
    }
    }, [LoadingData, oneDelivery])

    const handleEdit= async() => {
        setShowEdit(false)  
        if(nameEdit==="" || selectedFile===null || transTypeEdit==='' || noteEdit === ''){
           notify("من فضلك اكمل البيانات","warn")
           return ;
        }

                const formData= new FormData()
                formData.append("token", token)
                formData.append("name", nameEdit)
                formData.append("transportation_type", transTypeEdit)
                formData.append("phone", phoneEdit)
                formData.append("note", noteEdit)
                formData.append("image",selectedFile)
      
                setLoading(true)
                await dispatch(editDeliveryAction(id,formData)) 
                setLoading(false)
    }

    const res = useSelector(state => state.allDeliver.updateDelivery)

    useEffect(() => {
      if(loading === false){
        if(res.status){
          if(res.status === true){
             notify(res.msg, "success")
             setTimeout(() => {
               window.location.reload(false)
           }, 2000);
        }else{
          notify("There is a problem with the editing delivery", "error")
       }
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

  return [ handleEdit, showEdit,handleCloseEdit,handleShowEdit,nameEdit,transTypeEdit,phoneEdit,noteEdit,
    onChangNameEdit,onChangTransTypeEdit,onChangPhoneEdit,onChangNoteEdit,onImageChangeEdit ]
}

export default EditDeliveryHook