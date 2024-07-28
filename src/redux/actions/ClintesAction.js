import { usePostData } from "../../hook/usePostData";
import { GET_ALL_CLIENTS, GET_ERROR } from "../type";

// get all clients
export const getAllClientsAction = (formData) => async (dispatch) => {
    try {
      const respons = await usePostData(`/v3/public/cpanel/user_management/clients`, formData);
      dispatch({
        type: GET_ALL_CLIENTS,
        payload: respons, 
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };