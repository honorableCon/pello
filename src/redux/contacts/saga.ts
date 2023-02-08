import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//  Redux States
import { ContactsActionTypes } from "./types";
import {
  contactsApiResponseSuccess,
  contactsApiResponseError,
} from "./actions";

// api
import {
  getContacts as getContactsApi,
  inviteContact as inviteContactApi,
} from "../../api/index";

// helpers
import {
  showSuccessNotification,
  showErrorNotification,
} from "../../helpers/notifications";

function* getContacts({ payload: filters }: any) {
  try {
    const response: Promise<any> = yield call(getContactsApi, filters);
    yield put(
      contactsApiResponseSuccess(ContactsActionTypes.GET_CONTACTS, response)
    );
  } catch (error: any) {
    yield put(
      contactsApiResponseError(ContactsActionTypes.GET_CONTACTS, error)
    );
  }
}

function* inviteContact({ payload: newPassword }: any) {
  try {
    const response: Promise<any> = yield call(inviteContactApi, newPassword);
    yield put(
      contactsApiResponseSuccess(ContactsActionTypes.INVITE_CONTACT, response)
    );
    yield call(showSuccessNotification, response + "");
  } catch (error: any) {
    yield call(showErrorNotification, error);
    yield put(
      contactsApiResponseError(ContactsActionTypes.INVITE_CONTACT, error)
    );
  }
}

export function* watchGetContacts() {
  yield takeEvery(ContactsActionTypes.GET_CONTACTS, getContacts);
}

export function* watchInviteContact() {
  yield takeEvery(ContactsActionTypes.INVITE_CONTACT, inviteContact);
}

function* contactsSaga() {
  yield all([fork(watchGetContacts), fork(watchInviteContact)]);
}

export default contactsSaga;
