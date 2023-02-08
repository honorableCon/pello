// types
import { ContactsActionTypes, ContactsState } from "./types";

export const INIT_STATE: ContactsState = {
  contacts: [],
};

const Contacts = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ContactsActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ContactsActionTypes.GET_CONTACTS:
          return {
            ...state,
            contacts: action.payload.data,
            isContactsFetched: true,
            getContactsLoading: false,
          };
        case ContactsActionTypes.INVITE_CONTACT:
          return {
            ...state,
            isContactInvited: true,
          };
        default:
          return { ...state };
      }

    case ContactsActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ContactsActionTypes.GET_CONTACTS:
          return {
            ...state,
            isContactsFetched: false,
            getContactsLoading: false,
          };
        case ContactsActionTypes.INVITE_CONTACT:
          return {
            ...state,
            isContactInvited: false,
          };
        default:
          return { ...state };
      }

    case ContactsActionTypes.GET_CONTACTS: {
      return {
        ...state,
        getContactsLoading: true,
        isContactsFetched: false,
      };
    }

    case ContactsActionTypes.INVITE_CONTACT:
      return {
        ...state,
        isContactInvited: false,
      };
    case ContactsActionTypes.RESET_CONTACTS:
      const flag = action.payload.flag;
      const value = action.payload.value;
      let flags: any = {};
      flags[flag] = value;
      return {
        ...state,
        ...flags,
      };
    default:
      return { ...state };
  }
};

export default Contacts;
