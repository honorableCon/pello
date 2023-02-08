import { ChatsActionTypes } from "./types";

// common success
export const chatsApiResponseSuccess = (actionType: string, data: any) => ({
  type: ChatsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const chatsApiResponseError = (actionType: string, error: string) => ({
  type: ChatsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getFavourites = () => ({
  type: ChatsActionTypes.GET_FAVOURITES,
});

export const getDirectMessages = () => ({
  type: ChatsActionTypes.GET_DIRECT_MESSAGES,
});

export const getChannels = () => ({
  type: ChatsActionTypes.GET_CHANNELS,
});

export const addContacts = (contacts: Array<string | number>) => ({
  type: ChatsActionTypes.ADD_CONTACTS,
  payload: contacts,
});

export interface CreateChannelPostData {
  name: string;
  members: Array<string | number>;
  description?: string;
}
export const createChannel = (channelData: CreateChannelPostData) => ({
  type: ChatsActionTypes.CREATE_CHANNEL,
  payload: channelData,
});

export const changeSelectedChat = (selectedChat: string | number | null) => ({
  type: ChatsActionTypes.CHANGE_SELECTED_CHAT,
  payload: selectedChat,
});

export const getChatUserDetails = (selectedChat: string | number | null) => ({
  type: ChatsActionTypes.GET_CHAT_USER_DETAILS,
  payload: selectedChat,
});

export const getChatUserConversations = (
  selectedChat: string | number | null
) => ({
  type: ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS,
  payload: selectedChat,
});

export const toggleUserDetailsTab = (value: boolean) => ({
  type: ChatsActionTypes.TOGGLE_USER_DETAILS_TAB,
  payload: value,
});

export const onSendMessage = (data: any) => ({
  type: ChatsActionTypes.ON_SEND_MESSAGE,
  payload: data,
});

export const receiveMessage = (id: number | string) => ({
  type: ChatsActionTypes.RECEIVE_MESSAGE,
  payload: id,
});

export const readMessage = (id: number | string) => ({
  type: ChatsActionTypes.READ_MESSAGE,
  payload: id,
});

export const receiveMessageFromUser = (id: number | string) => ({
  type: ChatsActionTypes.RECEIVE_MESSAGE_FROM_USER,
  payload: id,
});

export const deleteMessage = (
  userId: number | string,
  messageId: number | string
) => ({
  type: ChatsActionTypes.DELETE_MESSAGE,
  payload: { userId, messageId },
});

export const forwardMessage = (data: object) => ({
  type: ChatsActionTypes.FORWARD_MESSAGE,
  payload: data,
});

export const deleteUserMessages = (userId: number | string) => ({
  type: ChatsActionTypes.DELETE_USER_MESSAGES,
  payload: userId,
});

export const getChannelDetails = (id: number | string) => ({
  type: ChatsActionTypes.GET_CHANNEL_DETAILS,
  payload: id,
});

export const toggleFavouriteContact = (id: number | string) => ({
  type: ChatsActionTypes.TOGGLE_FAVOURITE_CONTACT,
  payload: id,
});

export const getArchiveContact = () => ({
  type: ChatsActionTypes.GET_ARCHIVE_CONTACT,
});

export const toggleArchiveContact = (id: number | string) => ({
  type: ChatsActionTypes.TOGGLE_ARCHIVE_CONTACT,
  payload: id,
});

export const readConversation = (id: number | string) => ({
  type: ChatsActionTypes.READ_CONVERSATION,
  payload: id,
});

export const deleteImage = (
  userId: number | string,
  messageId: number | string,
  imageId: number | string
) => ({
  type: ChatsActionTypes.DELETE_IMAGE,
  payload: { userId, messageId, imageId },
});
