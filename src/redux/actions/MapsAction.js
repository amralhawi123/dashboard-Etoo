import { usePostData } from "../../hook/usePostData";
import { ADD_MAPS, DELETE_MAPS, EDIT_MAP, GET_ADMAIN_FROM_LOCALITY, GET_ALL_MAPS, GET_ALL_STATES, GET_ERROR, GET_LOCATIONS_FROM_STATES, GET_ONE_MAP } from "../type";

// get all maps
export const getAllMaps = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps`, formData);
      dispatch({
        type: GET_ALL_MAPS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all map limit
export const getAllMapsLimitInPage = (limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps?perpage=${limit}`, formData);
      dispatch({
        type: GET_ALL_MAPS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all map page
export const getAllMapsPage = (limit,page,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps?perpage=${limit}&page=${page}`, formData);
      dispatch({
        type: GET_ALL_MAPS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// delete map 
export const deleteMaps = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps/delete/${id}`, formData);
      dispatch({
        type: DELETE_MAPS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// add map 
export const addMapAction = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps/add`, formData);
      dispatch({
        type: ADD_MAPS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all states 
export const getAllStatesAction = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps/states`, formData);
      dispatch({
        type: GET_ALL_STATES,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get localities from states 
export const getLocalitiesFromStates = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps/${id}/getlocalities`, formData);
      dispatch({
        type: GET_LOCATIONS_FROM_STATES,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get admin from locailty 
export const getAdminUnitsFromLocality = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps/${id}/getadmin_units`, formData);
      dispatch({
        type: GET_ADMAIN_FROM_LOCALITY,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get one map 
export const getOneMap = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/getmap/${id}`, formData);
      dispatch({
        type: GET_ONE_MAP,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// edit one map 
export const editMapAction = (id,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/maps/edit/${id}`, formData);
      dispatch({
        type: EDIT_MAP,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };