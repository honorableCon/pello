import { SettingsActionTypes } from "./types";

// common success
export const settingsApiResponseSuccess = (actionType: string, data: any) => ({
  type: SettingsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const settingsApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: SettingsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getSettings = () => ({
  type: SettingsActionTypes.GET_USER_SETTINGS,
});

export const updateSettings = (field: string, value: any) => ({
  type: SettingsActionTypes.UPDATE_USER_SETTINGS,
  payload: { field, value },
});
