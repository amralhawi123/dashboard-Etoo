import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductImages } from '../../redux/actions/ProductsAction'
import { notify } from './../../Components/uitlity/useNotification';

const AddProductImageHook = ({id}) => {

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    const [images,setImages] = useState([])
   //  const [selectedFile, setselectedFile] = useState(null)
    const [showAdd, setShowAdd] = useState(false);

   const onImageChange =(e) => {
    if(e.target.files && e.target.files[0]){
      setImages(e.target.files)
      //  setselectedFile(e.target.files[0])
    }
  }

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = async() => {
    setShowAdd(true);
  }

  const handleAdd= async(e) => {
      setShowAdd(false) 
      e.preventDefault();

      const formData= new FormData()
      formData.append("token", token)

      formData.append("image",images)
      setLoading(true)
      await dispatch(addProductImages(id,formData)) 
      setLoading(false)
  }
  const res = useSelector(state => state.ProductsReducer.addProductimage)
  
  useEffect(() => {
    if(loading === false){
      if(res){
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

  return [handleCloseAdd,handleShowAdd,handleAdd,onImageChange,showAdd]
}

export default AddProductImageHook