
import { usePostData } from "../../hook/usePostData";
import {
  GET_ALL_CATEGOEY,
  GET_ERROR,
} from "../type";

// get all category
export const getAllCategory = (formData) => async (dispatch) => {
  try {
    const respons = await usePostData(`/v3/public/cpanel/settings/categories`,formData);
    dispatch({
      type: GET_ALL_CATEGOEY,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
