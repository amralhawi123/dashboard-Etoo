import { createStore, applyMiddleware, compose } from 'redux'; 
import rootReducer from './rootReducer' 
import { thunk } from 'redux-thunk';
const initialState={}
const middleWare =[thunk]

export const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare)
));