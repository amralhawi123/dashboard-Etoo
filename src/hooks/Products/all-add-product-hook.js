import React, { useEffect, useState } from 'react'
import product1 from "../../imgs/product-01.png"
import { useDispatch, useSelector } from 'react-redux'
import { getOneProducts } from '../../redux/actions/ProductsAction'


const AllAddProductsHook = ({id}) => { 

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true) 

    useEffect( () => {
        const getData = async ()=>{
            const formData= new FormData()
            formData.append("token", token)
            setLoading(true)
            await dispatch(getOneProducts(id,formData)) 
            setLoading(false)
        }
        getData()   
    }, [])

    const oneProduct = useSelector(state => state.ProductsReducer.oneProduct)
    console.log(oneProduct)
    let product = []
    try {      
       if(oneProduct.Product){
        product = oneProduct.Product
       }else{
        product= []
        }
    } catch (error) {
       
    }

    function headData(name) {
        return { name};
      }
      const head = [
          headData('id'), 
          headData('Images'), 
      ];

  return [head ,product,loading]
}
export default AllAddProductsHook