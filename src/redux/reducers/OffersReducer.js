import { GET_ERROR , GET_ALL_OFFERS, DELETE_OFFERS, ADD_OFFERS} from "../type";

const inital = {
   offers:[],
   deleteOffer:[],
   addOffer:[],
}

const OffersReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_OFFERS:
         return {
            ...state,
            offers:action.payload,
         }
      case DELETE_OFFERS:
         return {
            ...state,
            deleteOffer:action.payload,
         }
      case ADD_OFFERS:
         return {
            ...state,
            addOffer:action.payload,
         }
         case GET_ERROR:
            return { 
                offers:action.payload,
            }
      default:
         return state;
   }
}

export default OffersReducer