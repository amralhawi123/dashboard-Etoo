import { usePostData } from "../../hook/usePostData";
import { LOGIN_USER } from "../type";

// login user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await usePostData(`/v3/public/cpanel/login`, data);
    console.log(response)
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};
