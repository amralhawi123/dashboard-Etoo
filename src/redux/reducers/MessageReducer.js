import { GET_ERROR, GET_ALL_MESSAGE, DELETE_MESSAGE, ADD_MESSAGE, GET_ONE_MESSAGE, UPDATE_MESSAGE} from "../type";

const inital = {
   messages:[],
   deleteMessage:[],
   addMessage:[],
   oneMessage:[],
   updateMessage:[],
}

const MessageReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_MESSAGE:
         return {
            ...state,
            messages:action.payload,
         }
      case DELETE_MESSAGE:
         return {
            ...state,
            deleteMessage:action.payload,
         }
      case ADD_MESSAGE:
         return {
            ...state,
            addMessage:action.payload,
         }
      case GET_ONE_MESSAGE:
         return {
            ...state,
            oneMessage:action.payload,
         }
      case UPDATE_MESSAGE:
         return {
            ...state,
            updateMessage:action.payload,
         }
         case GET_ERROR:
            return { 
                messages:action.payload,
            }
      default:
         return state;
   }
}

export default MessageReducer