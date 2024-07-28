import { usePostData } from "../../hook/usePostData";
import { ADD_OFFERS, DELETE_OFFERS, GET_ALL_OFFERS, GET_ERROR } from "../type";

// get all offers
export const getAllOffers = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/offers`, formData);
      dispatch({
        type: GET_ALL_OFFERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all offers page
export const getAllOffersPage = (limit,page,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/offers?perpage=${limit}&page=${page}`, formData);
      dispatch({
        type: GET_ALL_OFFERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all offers page limit
export const getAllOffersPageLimit = (limit,formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/offers?perpage=${limit}`, formData);
      dispatch({
        type: GET_ALL_OFFERS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

    // get all offer search
export const getAllOfferSearch = (name,formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/offers${name}`, formData);
    dispatch({
      type: GET_ALL_OFFERS,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

    // delete offer
export const deleteOfferAction = (id,formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/offers/delete/${id}`, formData);
    dispatch({
      type: DELETE_OFFERS,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

    // add offer
export const addOfferAction = (formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/offers/add`, formData);
    dispatch({
      type: ADD_OFFERS,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};