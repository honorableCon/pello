import { AuthForgetPassActionTypes } from "./types";

// common success
export const authForgetPassApiResponseSuccess = (
  actionType: string,
  data: any
) => ({
  type: AuthForgetPassActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const authForgetPassApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: AuthForgetPassActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const userForgetPassword = (user: any) => {
  return {
    type: AuthForgetPassActionTypes.FORGET_PASSWORD,
    payload: user,
  };
};

export const userChangePassword = (newPassword: any) => {
  return {
    type: AuthForgetPassActionTypes.CHANGE_PASSWORD,
    payload: newPassword,
  };
};
