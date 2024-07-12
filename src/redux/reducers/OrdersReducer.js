import { GET_ERROR, GET_ALL_ORDERS, DELETE_ORDERS, ORDERS_DETAILS, UPDATE_ORDERS, ORDERS_PRODUCTS_DETAILS} from "../type";

const inital = {
   orders:[],
   deleteOrders:[],
   orderDetails:[],
   orderProductsDetails:[],
   updateOrder:[],
}
const OrdersReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_ORDERS:
         return {
            ...state,
            orders:action.payload,
         }
      case DELETE_ORDERS:
         return {
            ...state,
            deleteOrders:action.payload,
         }
      case UPDATE_ORDERS:
         return {
            ...state,
            updateOrder:action.payload,
         }
      case ORDERS_DETAILS:
         return {
            ...state,
            orderDetails:action.payload,
         }
      case ORDERS_PRODUCTS_DETAILS:
         return {
            ...state,
            orderProductsDetails:action.payload,
         }
         case GET_ERROR:
            return { 
               orders:action.payload,
            }
      default:
         return state;
   }
}

export default OrdersReducer