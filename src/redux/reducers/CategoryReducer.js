import { GET_ALL_CATEGOEY, GET_ERROR } from "../type";

const inital = {
   category:[],
}
const categoryReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_CATEGOEY:
         return {
            ...state,
            category:action.payload,
         }
         case GET_ERROR:
            return {
               category:action.payload,
            }
      default:
         return state;
   }
}

export default categoryReducer