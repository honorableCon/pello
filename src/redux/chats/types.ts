export enum ChatsActionTypes {
  API_RESPONSE_SUCCESS = "@@chats/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@chats/API_RESPONSE_ERROR",

  GET_FAVOURITES = "@@chats/GET_FAVOURITES",
  GET_DIRECT_MESSAGES = "@@chats/GET_DIRECT_MESSAGES",
  GET_CHANNELS = "@@chats/GET_CHANNELS",

  ADD_CONTACTS = "@@chats/ADD_CONTACTS",
  CREATE_CHANNEL = "@@chats/CREATE_CHANNEL",
  CHANGE_SELECTED_CHAT = "@@chats/CHANGE_SELECTED_CHAT",
  GET_CHAT_USER_DETAILS = "@@chats/GET_CHAT_USER_DETAILS",
  GET_CHAT_USER_CONVERSATIONS = "@@chats/GET_CHAT_USER_CONVERSATIONS",
  TOGGLE_USER_DETAILS_TAB = "@@chats/TOGGLE_USER_DETAILS_TAB",

  // MESSAGE
  ON_SEND_MESSAGE = "@@chats/ON_SEND_MESSAGE",
  RECEIVE_MESSAGE = "@@chats/RECEIVE_MESSAGE",
  READ_MESSAGE = "@@chats/READ_MESSAGE",
  RECEIVE_MESSAGE_FROM_USER = "@@chats/RECEIVE_MESSAGE_FROM_USER",
  DELETE_MESSAGE = "@@chats/DELETE_MESSAGE",
  FORWARD_MESSAGE = "@@chats/FORWARD_MESSAGE",
  DELETE_USER_MESSAGES = "@@chats/DELETE_USER_MESSAGES",
  GET_CHANNEL_DETAILS = "@@chats/GET_CHANNEL_DETAILS",
  TOGGLE_FAVOURITE_CONTACT = "@@chats/TOGGLE_FAVOURITE_CONTACT",
  GET_ARCHIVE_CONTACT = "@@chats/GET_ARCHIVE_CONTACT",
  TOGGLE_ARCHIVE_CONTACT = "@@chats/TOGGLE_ARCHIVE_CONTACT",
  READ_CONVERSATION = "@@chats/READ_CONVERSATION",
  DELETE_IMAGE = "@@chats/DELETE_IMAGE",
}
export interface ChatsState {
  favourites: Array<any>;
  directMessages: Array<any>;
  channels: Array<any>;
  selectedChat: string | number | null;
  chatUserDetails: object;
  chatUserConversations: {};
  isOpenUserDetails: boolean;
  channelDetails: object;
  archiveContacts: Array<any>;
}
