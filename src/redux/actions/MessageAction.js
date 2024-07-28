import { usePostData } from "../../hook/usePostData";
import { ADD_MESSAGE, DELETE_MESSAGE, GET_ALL_MESSAGE, GET_ERROR, GET_ONE_MESSAGE, UPDATE_MESSAGE } from "../type";

// get all messages
export const getAllMessage = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/messages`, formData);
      dispatch({
        type: GET_ALL_MESSAGE,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

  // get all message pages
export const getAllMessagePage = (page,showNumberMessages,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/messages?page=${page}&perpage=${showNumberMessages}`, formData);
      dispatch({
        type: GET_ALL_MESSAGE,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

  // get all limit message pages
export const getAllLimitMessagePage = (limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/messages?perpage=${limit}`, formData);
      dispatch({
        type: GET_ALL_MESSAGE,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
  // get all message search
export const getAllMessageSearch = (name,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/messages${name}`, formData);
      dispatch({
        type: GET_ALL_MESSAGE,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

  // delete message 
export const deleteMessageAction = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/messages/delete/${id}`, formData);
      dispatch({
        type: DELETE_MESSAGE,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

  // Add message action 
  export const addMessageAction = (formData) => async (dispatch) => {
    try {
      const response = await usePostData('/v3/public/cpanel/messages/add', formData);
      dispatch({
        type: ADD_MESSAGE,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: 'Error ' + e,
      });
    }
  };

  // Add message action 
  export const getOneMessageAction = (id,formData) => async (dispatch) => {
    try {
      const response = await usePostData(`/v3/public/cpanel/getmessage/${id}`, formData);
      dispatch({
        type: GET_ONE_MESSAGE,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: 'Error ' + e,
      });
    }
  };

  // update message action 
  export const updateMessageAction = (id,formData) => async (dispatch) => {
    try {
      const response = await usePostData(`/v3/public/cpanel/messages/edit/${id}`, formData);
      dispatch({
        type: UPDATE_MESSAGE,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: 'Error ' + e,
      });
    }
  };
