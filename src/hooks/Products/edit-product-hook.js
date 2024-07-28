import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProducts, updateProductsAction } from '../../redux/actions/ProductsAction'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { notify } from '../../Components/uitlity/useNotification'

const EditProductHook = () => {

  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [prodNameEdit,setProdNameEdit] = useState('')
  const [prodDescEdit,setProdDescEdit] = useState()
  const [catId,setCatId] = useState(0)
  const [categoryNameEdit,setCategoryNameEdit] = useState()
  const [prodPriceEdit,setProdPriceEdit] = useState()
  const [prodPriceOldEdit,setProdPriceOldEdit] = useState()
    const [showAdd, setShowAdd] = useState(false);
    const [imageEdit,setImageEidt] = useState('')
    const [selectedFile, setselectedFile] = useState(null)
    const [id, setId] = useState()
    const [LoadingData, setLoadingData] = useState(true)

    const onChangProductNameEdit= (e) => {
      e.persist()
      setProdNameEdit(e.target.value)
   }
    const onChangProductDescriptionEdit= (e) => {
      e.persist()
      setProdDescEdit(e.target.value)
    }
    const onChangProductPriceEdit= (e) => {
      e.persist()
      setProdPriceEdit(e.target.value)
   }
    const onChangProductPriceOldEdit= (e) => {
      e.persist()
      setProdPriceOldEdit(e.target.value)
   }
    const onChangCatIdEdit= (e) => {
      e.persist()
      setCategoryNameEdit(e.target.value)
      setCatId(e.target.options[e.target.selectedIndex].id)
   }
   const onImageChangeEdit =(e) => {
    if(e.target.files && e.target.files[0]){
      setImageEidt(URL.createObjectURL(e.target.files[0]))
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
      await dispatch(getOneProducts(id,formData))
      await dispatch(getAllCategory(formData)) 
      setLoadingData(false)
      setId(id)
    }
    const categories = useSelector(state => state.categoryReducer.category)
    const res = useSelector(state => state.ProductsReducer.oneProduct)
    useEffect(() => { 
      if(LoadingData === false){
        if(res && categories){
          setProdNameEdit(res.Product.Category_Name) 
          setProdDescEdit(res.Product.Product_Description) 
          setProdPriceEdit(parseInt(res.Product.Product_Price)) 
          setProdPriceOldEdit(parseInt(res.Product.Product_Price_Old)) 
          setCategoryNameEdit(res.Product.Category_Name)
        }
      }
    }, [LoadingData])

    const handleEdit= async() => {
        setShowEdit(false)
        const formData= new FormData()
        formData.append("token", token)
        formData.append("product_name", prodNameEdit)
        formData.append("product_description", prodDescEdit)
        formData.append("category_id", catId)
        formData.append("product_price", prodPriceEdit)
        formData.append("product_price_old", prodPriceOldEdit)
        formData.append("image",selectedFile)
        setLoading(true)
        await dispatch(updateProductsAction(id,formData))
        setLoading(false) 
    }
    const updateProducts = useSelector(state => state.ProductsReducer.updateProduct)

    useEffect(() => {
      if(loading === false){
        if(updateProducts){
          if(updateProducts.status === true){
             notify(updateProducts.msg, "success")
             setTimeout(() => {
               window.location.reload(false)
           }, 2000);
        }else{
          notify(updateProducts.msg, "error")
       }
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

  return [ handleEdit, showEdit,handleCloseEdit,handleShowEdit,
    onChangProductNameEdit,onChangProductPriceEdit,prodNameEdit,onChangProductDescriptionEdit,
    prodPriceEdit,prodDescEdit,onChangProductPriceOldEdit,onImageChangeEdit,categoryNameEdit,
    prodPriceOldEdit,onChangCatIdEdit
   ]
}

export default EditProductHook