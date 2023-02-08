import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { AuthForgetPassActionTypes } from "./types";
import {
  authForgetPassApiResponseSuccess,
  authForgetPassApiResponseError,
} from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";

import {
  postFakeForgetPwd,
  postJwtForgetPwd,
  changePassword as changePasswordApi,
} from "../../../api/index";

const fireBaseBackend: any = getFirebaseBackend();

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: user }: any) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      yield call(fireBaseBackend.forgetPassword, user.email);
      yield put(
        authForgetPassApiResponseSuccess(
          AuthForgetPassActionTypes.FORGET_PASSWORD,
          "Reset link are sended to your mailbox, check there first"
        )
      );
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      yield call(postJwtForgetPwd, {
        email: user.email,
      });
      yield put(
        authForgetPassApiResponseSuccess(
          AuthForgetPassActionTypes.FORGET_PASSWORD,
          "Reset link are sended to your mailbox, check there first"
        )
      );
    } else {
      yield call(postFakeForgetPwd, {
        email: user.email,
      });
      yield put(
        authForgetPassApiResponseSuccess(
          AuthForgetPassActionTypes.FORGET_PASSWORD,
          "Reset link are sended to your mailbox, check there first"
        )
      );
    }
  } catch (error: any) {
    yield put(
      authForgetPassApiResponseError(
        AuthForgetPassActionTypes.FORGET_PASSWORD,
        error
      )
    );
  }
}

function* changePassword({ payload: newPassword }: any) {
  try {
    yield call(changePasswordApi, newPassword);
    yield put(
      authForgetPassApiResponseSuccess(
        AuthForgetPassActionTypes.CHANGE_PASSWORD,
        "Your Password is Changed"
      )
    );
  } catch (error: any) {
    yield put(
      authForgetPassApiResponseError(
        AuthForgetPassActionTypes.CHANGE_PASSWORD,
        error
      )
    );
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(AuthForgetPassActionTypes.FORGET_PASSWORD, forgetUser);
}

export function* watchUserChangePassword() {
  yield takeEvery(AuthForgetPassActionTypes.CHANGE_PASSWORD, changePassword);
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget), fork(watchUserChangePassword)]);
}

export default forgetPasswordSaga;
