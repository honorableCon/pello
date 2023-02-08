import { AuthRegisterActionTypes } from "./types";

// common success
export const authRegisterApiResponseSuccess = (
  actionType: string,
  data: any
) => ({
  type: AuthRegisterActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const authRegisterApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: AuthRegisterActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const registerUser = (user: any) => {
  return {
    type: AuthRegisterActionTypes.REGISTER_USER,
    payload: { user },
  };
};
