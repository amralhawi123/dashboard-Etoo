import{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductsAction } from '../../redux/actions/ProductsAction'
import { notify } from '../../Components/uitlity/useNotification'
import { getAllCategory } from '../../redux/actions/categoryAction'

const AddProductHook = () => {

  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [prodName,setProdName] = useState('')
  const [prodDesc,setProdDesc] = useState()
  const [catId,setCatId] = useState(0)
  const [categoryName,setCategoryName] = useState()
  const [prodPrice,setProdPrice] = useState()
  const [prodPriceOld,setProdPriceOld] = useState()
    const [showAdd, setShowAdd] = useState(false);
    const [image,setImagee] = useState('')
    const [selectedFile, setselectedFile] = useState(null)

    const onChangProductName= (e) => {
      e.persist()
      setProdName(e.target.value)
   }
    const onChangProductDescription= (e) => {
      e.persist()
      setProdDesc(e.target.value)
    }
    const onChangProductPrice= (e) => {
      e.persist()
      setProdPrice(e.target.value)
   }
    const onChangProductPriceOld= (e) => {
      e.persist()
      setProdPriceOld(e.target.value)
   }
    const onChangCatId= (e) => {
      e.persist()
      setCategoryName(e.target.value)
      setCatId(e.target.options[e.target.selectedIndex].id)
   }
   const onImageChange =(e) => {
    if(e.target.files && e.target.files[0]){
      setImagee(URL.createObjectURL(e.target.files[0]))
       setselectedFile(e.target.files[0])
    }
  }

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = async() => {
      setShowAdd(true);
      const formData= new FormData()
      formData.append("token", token)
      await dispatch(getAllCategory(formData)) 
    }
    const categories = useSelector(state => state.categoryReducer.category)

    const handleAdd= async(e) => {
        setShowAdd(false) 
        e.preventDefault();

        const formData= new FormData()
        formData.append("token", token)
        formData.append("product_name", prodName)
        formData.append("product_description", prodDesc)
        formData.append("category_id", catId)
        formData.append("product_price", prodPrice)
        formData.append("product_price_old", prodPriceOld)
        formData.append("image",selectedFile)
        setLoading(true)
        await dispatch(addProductsAction(formData)) 
        setLoading(false)
    }
    const res = useSelector(state => state.ProductsReducer.addProduct)

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

  return [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,
    prodName,prodDesc,prodPrice,prodPriceOld,onChangCatId,onChangProductDescription,
    onChangProductName,onChangProductPrice,onChangProductPriceOld,onImageChange,categoryName,categories
   ]
}

export default AddProductHook