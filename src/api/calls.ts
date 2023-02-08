import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

const getCalls = () => {
  return api.get(url.GET_CALLS_LIST);
};

export { getCalls };
