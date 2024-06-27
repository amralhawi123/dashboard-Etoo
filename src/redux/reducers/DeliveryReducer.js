import { GET_ALL_DELIVERY,GET_ERROR} from "../type";

const inital = {
   delivery:[],
}
const DeliveryReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_DELIVERY:
         return {
            ...state,
            delivery:action.payload,
         }
         case GET_ERROR:
            return {
               loading:true,
               delivery:action.payload,
            }
      default:
         return state;
   }
}

export default DeliveryReducer