import { combineReducers } from "redux";
import DeliveryReducer from "./reducers/DeliveryReducer";


export default combineReducers({
    allDeliver:DeliveryReducer,
})