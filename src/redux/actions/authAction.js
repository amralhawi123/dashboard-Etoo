import { usePostData } from "../../hook/usePostData";
import { LOGIN_USER } from "../type";

// login user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await usePostData(`/v3/public/cpanel/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response, 
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};
