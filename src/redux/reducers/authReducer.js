import {
    LOGIN_USER
   } from "../type";

const inital = { 
   loginUser:[],
}

const authReducer =(state= inital, action) => {

   switch (action.type) {
      case LOGIN_USER:
         return {
            ...state,
            loginUser:action.payload, 
         }
         default:
            return state
   }
}

export default authReducer