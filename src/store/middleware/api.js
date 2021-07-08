import * as actions from "../apiAction";

import axios from "axios";
import { baseURL } from "../../service/httpConfig";

const api = (store) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  next(action);
  const { url, method, data, onSuccess, onError } = action;
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
    //General Error Action
    dispatch(actions.apiCallFailed(error));
    //Specific Error Action
    if (onError) dispatch({ type: onError, payload: error });
  }
};
export default api;
