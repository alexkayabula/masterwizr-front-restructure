import {
  HEALTHCHECK_REQUEST,
  HEALTHCHECK_SUCCESS,
  HEALTHCHECK_FAILURE,
} from "../constants/actionTypes";
import api from "../api/api";

export const checkHealth = () => async (dispatch) => {
  dispatch({ type: HEALTHCHECK_REQUEST });
  const res = await api
    .post("healthcheck/")
    .then((res) => {
      dispatch({ type: HEALTHCHECK_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: HEALTHCHECK_FAILURE, payload: error });
    });
  return res;
};
