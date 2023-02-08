export enum ProfileActionTypes {
  API_RESPONSE_SUCCESS = "@@profile/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@profile/API_RESPONSE_ERROR",

  GET_PROFILE_DETAILS = "@@profile/GET_PROFILE_DETAILS",
}
export interface ProfileState {
  profileDetails: object;
}
