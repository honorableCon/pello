export enum AuthForgetPassActionTypes {
  API_RESPONSE_SUCCESS = "@@auth/forgetPass/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@auth/forgetPass/API_RESPONSE_ERROR",

  FORGET_PASSWORD = "@@auth/forgetPass/FORGET_PASSWORD",
  CHANGE_PASSWORD = "@@auth/forgetPass/CHANGE_PASSWORD",
}
export interface AuthForgetPassState {
  forgetSuccessMsg: any;
  forgetError: any;
}
