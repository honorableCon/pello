import { ContactsActionTypes } from "./types";

// common success
export const contactsApiResponseSuccess = (actionType: string, data: any) => ({
  type: ContactsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const contactsApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: ContactsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getContacts = (filters?: object) => ({
  type: ContactsActionTypes.GET_CONTACTS,
  payload: filters,
});

export const inviteContact = (data: any) => ({
  type: ContactsActionTypes.INVITE_CONTACT,
  payload: data,
});

export const resetContacts = (flag: string, value: any) => ({
  type: ContactsActionTypes.RESET_CONTACTS,
  payload: { flag, value },
});
