import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { SettingsActionTypes } from "./types";
import {
  settingsApiResponseSuccess,
  settingsApiResponseError,
} from "./actions";

import {
  getSettings as getSettingsApi,
  updateSettings as updateSettingsApi,
} from "../../api/index";

function* getSettings() {
  try {
    const response: Promise<any> = yield call(getSettingsApi);
    yield put(
      settingsApiResponseSuccess(
        SettingsActionTypes.GET_USER_SETTINGS,
        response
      )
    );
  } catch (error: any) {
    yield put(
      settingsApiResponseError(SettingsActionTypes.GET_USER_SETTINGS, error)
    );
  }
}

function* updateSettings({ payload: { field, value } }: any) {
  try {
    const response: Promise<any> = yield call(updateSettingsApi, field, value);
    yield put(
      settingsApiResponseSuccess(
        SettingsActionTypes.UPDATE_USER_SETTINGS,
        response
      )
    );
  } catch (error: any) {
    yield put(
      settingsApiResponseError(SettingsActionTypes.UPDATE_USER_SETTINGS, error)
    );
  }
}

export function* watchGetSettings() {
  yield takeEvery(SettingsActionTypes.GET_USER_SETTINGS, getSettings);
}
export function* watchUpdateSettings() {
  yield takeEvery(SettingsActionTypes.UPDATE_USER_SETTINGS, updateSettings);
}

function* settingsSaga() {
  yield all([fork(watchGetSettings), fork(watchUpdateSettings)]);
}

export default settingsSaga;
