import axios from "axios";
import { baseURL } from "../../service/httpConfig";

const api = (store) => (next) => async (action) => {
  if (action.type !== "apiCallBegin") return next(action);

  const { url, method, data, onSuccess, onFailure } = action;
  const { dispatch } = store;
  try {
    const response = await axios.request({
      baseURL,
      url,
      method,
      data,
    });
    dispatch({ type: onSuccess, payload: response.data });
  } catch (e) {
    dispatch({ type: onFailure, payload: error });
  }
};
export default api;
