import { combineReducers } from "redux";
import DeliveryReducer from "./reducers/DeliveryReducer";
import authReducer from "./reducers/authReducer";
import OrdersReducer from "./reducers/OrdersReducer";


export default combineReducers({
    allDeliver:DeliveryReducer,
    OrdersReducer:OrdersReducer,
    authReducer:authReducer,
})