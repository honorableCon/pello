// types
import { ProfileActionTypes, ProfileState } from "./types";

export const INIT_STATE: ProfileState = {
  profileDetails: {},
};

const Profile = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ProfileActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ProfileActionTypes.GET_PROFILE_DETAILS:
          return {
            ...state,
            profileDetails: action.payload.data,
            isProfileFetched: true,
            getProfileLoading: false,
          };
        default:
          return { ...state };
      }

    case ProfileActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ProfileActionTypes.GET_PROFILE_DETAILS:
          return {
            ...state,
            isProfileFetched: false,
            getProfileLoading: false,
          };

        default:
          return { ...state };
      }

    case ProfileActionTypes.GET_PROFILE_DETAILS: {
      return {
        ...state,
        getProfileLoading: true,
        isProfileFetched: false,
      };
    }

    default:
      return { ...state };
  }
};

export default Profile;
