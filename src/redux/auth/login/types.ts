export enum AuthLoginActionTypes {
  API_RESPONSE_SUCCESS = "@@auth/login/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@auth/login/API_RESPONSE_ERROR",

  LOGIN_USER = "@@auth/login/LOGIN_USER",
  LOGOUT_USER = "@@auth/login/LOGOUT_USER",
  SOCIAL_LOGIN = "@@auth/login/SOCIAL_LOGIN",
}
export interface AuthLoginState {
  error: string;
  loading: boolean;
}
