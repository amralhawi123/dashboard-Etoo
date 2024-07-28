import { combineReducers } from "redux";
import DeliveryReducer from "./reducers/DeliveryReducer";
import authReducer from "./reducers/authReducer";
import OrdersReducer from "./reducers/OrdersReducer";
import MessageReducer from "./reducers/MessageReducer";
import ClientsReducer from "./reducers/ClientsReducer";
import ProductsReducer from "./reducers/ProductsReducers";
import categoryReducer from "./reducers/CategoryReducer";
import MapsReducer from "./reducers/MapsReducer";
import OffersReducer from "./reducers/OffersReducer";


export default combineReducers({
    allDeliver:DeliveryReducer,
    OrdersReducer:OrdersReducer,
    authReducer:authReducer,
    MessageReducer:MessageReducer,
    ClientsReducer:ClientsReducer,
    ProductsReducer:ProductsReducer,
    categoryReducer:categoryReducer,
    MapsReducer:MapsReducer,
    OffersReducer:OffersReducer,
})