import{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOfferAction } from '../../redux/actions/OffersAction'

const AddOfferHook = () => {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [offerTitle,setOfferTitle] = useState('')
  const [offerPrice,setOfferPrice] = useState('')
    const [showAdd, setShowAdd] = useState(false);
    const [selectedFile, setselectedFile] = useState(null)

    const onChangOfferTitle= (e) => {
      setOfferTitle(e.target.value)
   }    
    const onChangOfferPrice= (e) => {
      setOfferPrice(e.target.value)
   }    
   const onImageChange =(e) => {
     if(e.target.files && e.target.files[0]){
       setselectedFile(e.target.files[0])
      }
    }

    const handleCloseAdd = () => setShowAdd(false);
     const handleShowAdd = () => setShowAdd(true);
 
     const handleAdd= async(e) => {
         setShowAdd(false) 
         e.preventDefault();

         const formData= new FormData()
         formData.append("token", token)
         formData.append("offer_title", offerTitle)
         formData.append("offer_price", offerPrice)
         formData.append("image",selectedFile)
         setLoading(true)
         await dispatch(addOfferAction(formData)) 
         setLoading(false)
     }
     const res = useSelector(state => state.OffersReducer.addOffer)
console.log(res)
  return [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,
    onChangOfferPrice,onChangOfferTitle,offerTitle,offerPrice,onImageChange,selectedFile
   ]
}

export default AddOfferHook