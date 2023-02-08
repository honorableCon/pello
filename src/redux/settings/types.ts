export enum SettingsActionTypes {
  API_RESPONSE_SUCCESS = "@@settings/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@settings/API_RESPONSE_ERROR",

  GET_USER_SETTINGS = "@@settings/GET_USER_SETTINGS",
  UPDATE_USER_SETTINGS = "@@settings/UPDATE_USER_SETTINGS",
}
export interface SettingsState {
  settings: object;
}
