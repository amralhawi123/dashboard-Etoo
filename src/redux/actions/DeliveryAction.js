import { usePostData } from "../../hook/usePostData";
import { ADD_DELIVERY, DELETE_DELIVERY, GET_ALL_DELIVERY, GET_ONE_DELIVERY, GET_ERROR, UPDATE_DELIVERY } from "../type";

export const getAllDelivery = (formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/delivery`, formData);
    dispatch({
      type: GET_ALL_DELIVERY,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get limit number delivery for pagination
export const geLimitDeliveryInPage = (limit,formData) => async (dispatch) => {
  try {
    const respons = await usePostData(
      `/v3/public/cpanel/delivery?perpage=${limit}`,formData
    );
    dispatch({
      type: GET_ALL_DELIVERY,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
// get all delivery for pagination
export const getAllDeliveryPage = (page,limit,formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/delivery?page=${page}&perpage=${limit}`,formData);

    dispatch({
      type: GET_ALL_DELIVERY,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// add delivery
export const addDeliveryAction = (formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/delivery/add`,formData);
    dispatch({
      type: ADD_DELIVERY,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// delete delivery
export const deleteDeliveryAction = (formData,id) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/delivery/delete/${id}`,formData);
    dispatch({
      type: DELETE_DELIVERY,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// edit delivery
export const editDeliveryAction = (id,formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/delivery/edit/${id}`,formData);
    dispatch({
      type: UPDATE_DELIVERY,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get one delivery
export const getOnDeliveryAction = (id,formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/getdelivery/${id}`,formData);

    dispatch({
      type: GET_ONE_DELIVERY,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Search Delivery
export const getAllDeliverySearch = (name,formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/delivery${name}`, formData);
    dispatch({
      type: GET_ALL_DELIVERY,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};