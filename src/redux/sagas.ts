import { all } from "redux-saga/effects";

//auth
import registerSaga from "./auth/register/saga";
import loginSaga from "./auth/login/saga";
import forgetPasswordSaga from "./auth/forgetpwd/saga";
import profileSaga from "./profile/saga";
import LayoutSaga from "./layout/saga";
import contactsSaga from "./contacts/saga";
import callsSaga from "./calls/saga";
import bookmarksSaga from "./bookmarks/saga";
import settingsSaga from "./settings/saga";
import chatsSaga from "./chats/saga";

export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    forgetPasswordSaga(),
    profileSaga(),
    LayoutSaga(),
    contactsSaga(),
    callsSaga(),
    bookmarksSaga(),
    settingsSaga(),
    chatsSaga(),
  ]);
}
