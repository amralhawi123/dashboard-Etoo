import { DELETE_ORDERS, GET_ALL_ORDERS, GET_ERROR, ORDERS_DETAILS, ORDERS_PRODUCTS_DETAILS, UPDATE_ORDERS } from "../type";
import { usePostData } from "../../hook/usePostData";

// get all orders
export const getAllOrders = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders`, formData);
      dispatch({
        type: GET_ALL_ORDERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all  page
export const getAllOrdersPage = (page,limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders?page=${page}&perpage=${limit}`, formData);
      dispatch({
        type: GET_ALL_ORDERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get limit orders in  page
export const getLimitOrdersInPage = (limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders?perpage=${limit}`, formData);
      dispatch({
        type: GET_ALL_ORDERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

//delete orders  
export const deleteOrdersAction = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders/delete/${id}`, formData);
      dispatch({
        type: DELETE_ORDERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
// get on order or order details 
export const getOrderDetailsAction = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/getorder/${id}`, formData);
      dispatch({
        type: ORDERS_DETAILS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// update order   
export const updateOrderAction = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders/edit/${id}`, formData);
      dispatch({
        type: UPDATE_ORDERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all products in order 
export const getAllProductInOredr = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders/details/${id}`, formData);

      dispatch({
        type: ORDERS_PRODUCTS_DETAILS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all products in order  in page
export const getAllOrderProductInOredrPage = (id,page,limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders/details/${id}?page=${page}&perpage=${limit}`, formData);

      dispatch({
        type: ORDERS_PRODUCTS_DETAILS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
// get all products in limit in page 
export const getAllOrderProductlimitInPage = (id,limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders/details/${id}?perpage=${limit}`, formData);

      dispatch({
        type: ORDERS_PRODUCTS_DETAILS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// Search order
export const getAllOrderSearch = (name,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/orders${name}`, formData);
      dispatch({
        type: GET_ALL_ORDERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
  
