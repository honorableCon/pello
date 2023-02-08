import { AuthForgetPassActionTypes, AuthForgetPassState } from "./types";

export const INIT_STATE: AuthForgetPassState = {
  forgetSuccessMsg: null,
  forgetError: null,
};

const ForgetPassword = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case AuthForgetPassActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case AuthForgetPassActionTypes.FORGET_PASSWORD:
          return {
            ...state,
            forgetSuccessMsg: action.payload.data,
            emailSended: true,
            loading: false,
          };
        case AuthForgetPassActionTypes.CHANGE_PASSWORD: {
          return {
            ...state,
            passwordChanged: true,
            loading: false,
          };
        }
        default:
          return { ...state };
      }

    case AuthForgetPassActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case AuthForgetPassActionTypes.FORGET_PASSWORD:
          return {
            ...state,
            forgetError: action.payload.error,
            emailSended: false,
            loading: false,
          };
        case AuthForgetPassActionTypes.CHANGE_PASSWORD: {
          return {
            ...state,
            changepasswordError: action.payload.error,
            passwordChanged: false,
            loading: true,
          };
        }

        default:
          return { ...state };
      }

    case AuthForgetPassActionTypes.FORGET_PASSWORD: {
      return {
        ...state,
        forgetSuccessMsg: null,
        forgetError: null,
        emailSended: false,
        loading: true,
      };
    }
    case AuthForgetPassActionTypes.CHANGE_PASSWORD: {
      return {
        ...state,
        passwordChanged: false,
        loading: true,
      };
    }

    default:
      return { ...state };
  }
};

export default ForgetPassword;
