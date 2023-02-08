import { AuthLoginActionTypes } from "./types";

// common success
export const authLoginApiResponseSuccess = (actionType: string, data: any) => ({
  type: AuthLoginActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const authLoginApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: AuthLoginActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const loginUser = (user: any) => {
  return {
    type: AuthLoginActionTypes.LOGIN_USER,
    payload: { user },
  };
};

export const logoutUser = () => {
  return {
    type: AuthLoginActionTypes.LOGOUT_USER,
  };
};

export const socialLogin = (data: any, type: "facebook" | "google") => {
  return {
    type: AuthLoginActionTypes.SOCIAL_LOGIN,
    payload: { data, type },
  };
};
