import { ADD_PRODUCT_IMAGE, ADD_PRODUCTS, DELETE_PRODUCTS, GET_ALL_PRODUCTS, GET_ERROR, GET_ONE_PRODUCTS, UPDATE_PRODUCTS,} from "../type";
import { usePostData } from "../../hook/usePostData";

// get all Products
export const getAllProducts = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/products`, formData);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all Products pagination
export const getAllProductsPage = (page,limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/products?page=${page}&perpage=${limit}`, formData);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all Products limit in page 
export const getAllProductsLimitInPage = (limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/products?perpage=${limit}`, formData);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// delete Products 
export const deleteProducts = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/products/delete/${id}`, formData);
      dispatch({
        type: DELETE_PRODUCTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// add Products 
export const addProductsAction = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/products/add`, formData);
      dispatch({
        type: ADD_PRODUCTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get one Products 
export const getOneProducts = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/getproduct/${id}`, formData);
      dispatch({
        type: GET_ONE_PRODUCTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// update Products 
export const updateProductsAction = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/products/edit/${id}`, formData);
      dispatch({
        type: UPDATE_PRODUCTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// add Product images
export const addProductImages = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/products/addImage/${id}`, formData);
      dispatch({
        type: ADD_PRODUCT_IMAGE,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// Product search
export const allProductSearch = (name,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/products${name}`, formData);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };