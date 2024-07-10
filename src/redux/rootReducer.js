import { combineReducers } from "redux";
import DeliveryReducer from "./reducers/DeliveryReducer";
import authReducer from "./reducers/authReducer";


export default combineReducers({
    allDeliver:DeliveryReducer,
    authReducer:authReducer,
})