import { GET_ALL_DELIVERY,GET_ERROR,ADD_DELIVERY, DELETE_DELIVERY, UPDATE_DELIVERY, GET_ONE_DELIVERY} from "../type";

const inital = {
   delivery:[],
   addDelivery:[],
   deleteDelivery:[],
   updateDelivery:[],
   getOneDelivery:[],
}
const DeliveryReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_DELIVERY:
         return {
            ...state,
            delivery:action.payload,
         }
      case ADD_DELIVERY:
         return {
            ...state,
            addDelivery:action.payload,
         }
      case DELETE_DELIVERY:
         return {
            ...state,
            deleteDelivery:action.payload,
         }
      case UPDATE_DELIVERY:
         return {
            ...state,
            updateDelivery:action.payload,
         }
      case GET_ONE_DELIVERY:
         return {
            ...state,
            getOneDelivery:action.payload,
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