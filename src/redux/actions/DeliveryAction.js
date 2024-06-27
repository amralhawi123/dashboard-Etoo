import { usePostData } from "../../hook/useGetData";
import { GET_ALL_DELIVERY, GET_ERROR } from "../type";

export const getAllDelivery = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/delivery`,formData);
      console.log(respons)
      dispatch({
        type: GET_ALL_DELIVERY,
        payload: respons,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

// get all delivery for pagination
export const getAllDeliveryPage = (page) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/delivery?&page=${page}`);
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