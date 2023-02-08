export enum ContactsActionTypes {
  API_RESPONSE_SUCCESS = "@@contacts/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@contacts/API_RESPONSE_ERROR",

  GET_CONTACTS = "@@contacts/GET_CONTACTS",
  RESET_CONTACTS = "@@contacts/RESET_CONTACTS",
  INVITE_CONTACT = "@@contacts/INVITE_CONTACT",
}
export interface ContactsState {
  contacts: Array<any>;
}
