import { GET_ERROR ,GET_ALL_CLIENTS} from "../type";

const inital = {
   clients:[],
}

const ClientsReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_CLIENTS:
         return {
            ...state,
            clients:action.payload,
         }
         case GET_ERROR:
            return { 
                clients:action.payload,
            }
      default:
         return state;
   }
}

export default ClientsReducer