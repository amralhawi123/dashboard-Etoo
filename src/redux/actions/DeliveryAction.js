import {  useGetData, useGetDataWithToken } from "../../hook/useGetData";
import { GET_ALL_DELIVERY, GET_ERROR } from "../type";

export const getAllDelivery = () => async (dispatch) => {
    try {
      const respons = await useGetDataWithToken(`/v3/public/cpanel/delivery`);
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