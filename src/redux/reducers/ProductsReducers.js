import { ADD_PRODUCT_IMAGE, ADD_PRODUCTS, DELETE_PRODUCTS, GET_ALL_PRODUCTS, GET_ERROR, GET_ONE_PRODUCTS, UPDATE_PRODUCTS } from "../type";

const inital = {
   products:[],
   deleteProducts:[],
   addProduct:[],
   oneProduct:[],
   updateProduct:[],
   addProductimage:[],
}

const ProductsReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_PRODUCTS:
         return {
            ...state,
            products:action.payload,
         }
      case DELETE_PRODUCTS:
         return {
            ...state,
            deleteProducts:action.payload,
         }
      case ADD_PRODUCTS:
         return {
            ...state,
            addProduct:action.payload,
         }
      case GET_ONE_PRODUCTS:
         return {
            ...state,
            oneProduct:action.payload,
         }
      case UPDATE_PRODUCTS:
         return {
            ...state,
            updateProduct:action.payload,
         }
      case ADD_PRODUCT_IMAGE:
         return {
            ...state,
            addProductimage:action.payload,
         }
         case GET_ERROR:
            return { 
                products:action.payload,
            }
      default:
         return state;
   }
}

export default ProductsReducer