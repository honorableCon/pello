// types
import { ChatsActionTypes, ChatsState } from "./types";

export const INIT_STATE: ChatsState = {
  favourites: [],
  directMessages: [],
  channels: [],
  selectedChat: null,
  chatUserDetails: {},
  chatUserConversations: {},
  isOpenUserDetails: false,
  channelDetails: {},
  archiveContacts: [],
};

const Chats = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ChatsActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ChatsActionTypes.GET_FAVOURITES:
          return {
            ...state,
            favourites: action.payload.data,
            isFavouritesFetched: true,
            getFavouritesLoading: false,
          };
        case ChatsActionTypes.GET_DIRECT_MESSAGES:
          return {
            ...state,
            directMessages: action.payload.data,
            isDirectMessagesFetched: true,
            getDirectMessagesLoading: false,
            isContactsAdded: false,
          };
        case ChatsActionTypes.GET_CHANNELS:
          return {
            ...state,
            channels: action.payload.data,
            isChannelsFetched: true,
            getChannelsLoading: false,
            isChannelCreated: false,
          };
        case ChatsActionTypes.ADD_CONTACTS:
          return {
            ...state,
            isContactsAdded: true,
            addContactsLoading: false,
          };
        case ChatsActionTypes.CREATE_CHANNEL:
          return {
            ...state,
            isChannelCreated: true,
            createChannelLoading: false,
          };
        case ChatsActionTypes.GET_CHAT_USER_DETAILS:
          return {
            ...state,
            chatUserDetails: action.payload.data,
            isUserDetailsFetched: true,
            getUserDetailsLoading: false,
          };
        case ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS:
          return {
            ...state,
            chatUserConversations: action.payload.data,
            isUserConversationsFetched: true,
            getUserConversationsLoading: false,
            isUserMessageSent: false,
            isMessageDeleted: false,
            isMessageForwarded: false,
          };
        case ChatsActionTypes.ON_SEND_MESSAGE:
          return {
            ...state,
            isUserMessageSent: true,
          };
        case ChatsActionTypes.RECEIVE_MESSAGE:
        case ChatsActionTypes.RECEIVE_MESSAGE_FROM_USER:
          return {
            ...state,
            chatUserConversations: action.payload.data,
          };
        case ChatsActionTypes.READ_MESSAGE:
          return {
            ...state,
            isMessageRead: true,
            chatUserConversations: action.payload.data,
          };
        case ChatsActionTypes.DELETE_MESSAGE:
          return {
            ...state,
            isMessageDeleted: true,
          };
        case ChatsActionTypes.FORWARD_MESSAGE:
          return {
            ...state,
            isMessageForwarded: true,
          };
        case ChatsActionTypes.DELETE_USER_MESSAGES:
          return {
            ...state,
            isUserMessagesDeleted: true,
          };
        case ChatsActionTypes.GET_CHANNEL_DETAILS:
          return {
            ...state,
            chatUserDetails: { ...action.payload.data, isChannel: true },
            isChannelDetailsFetched: true,
            getUserDetailsLoading: false,
          };
        case ChatsActionTypes.TOGGLE_FAVOURITE_CONTACT:
          return {
            ...state,
            isFavouriteContactToggled: true,
          };
        case ChatsActionTypes.GET_ARCHIVE_CONTACT:
          return {
            ...state,
            archiveContacts: action.payload.data,
            isArchiveContactFetched: true,
            isContactArchiveToggled: false,
          };
        case ChatsActionTypes.TOGGLE_ARCHIVE_CONTACT:
          return {
            ...state,
            isContactArchiveToggled: true,
          };
        case ChatsActionTypes.DELETE_IMAGE:
          return {
            ...state,
            isImageDeleted: true,
          };
        default:
          return { ...state };
      }

    case ChatsActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ChatsActionTypes.GET_FAVOURITES:
          return {
            ...state,
            isFavouritesFetched: false,
            getFavouritesLoading: false,
          };
        case ChatsActionTypes.GET_DIRECT_MESSAGES:
          return {
            ...state,
            isDirectMessagesFetched: false,
            getDirectMessagesLoading: false,
          };
        case ChatsActionTypes.GET_CHANNELS:
          return {
            ...state,
            isChannelsFetched: false,
            getChannelsLoading: false,
          };
        case ChatsActionTypes.ADD_CONTACTS:
          return {
            ...state,
            isContactsAdded: false,
            addContactsLoading: false,
          };
        case ChatsActionTypes.CREATE_CHANNEL:
          return {
            ...state,
            isChannelCreated: false,
            createChannelLoading: false,
          };
        case ChatsActionTypes.GET_CHAT_USER_DETAILS:
          return {
            ...state,
            isUserDetailsFetched: false,
            getUserDetailsLoading: false,
          };
        case ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS:
          return {
            ...state,
            chatUserConversations: {},
            isUserConversationsFetched: false,
            getUserConversationsLoading: false,
            isUserMessageSent: false,
          };
        case ChatsActionTypes.ON_SEND_MESSAGE:
          return {
            ...state,
            isUserMessageSent: false,
          };
        case ChatsActionTypes.DELETE_MESSAGE:
          return {
            ...state,
            isMessageDeleted: false,
          };
        case ChatsActionTypes.FORWARD_MESSAGE:
          return {
            ...state,
            isMessageForwarded: false,
          };
        case ChatsActionTypes.DELETE_USER_MESSAGES:
          return {
            ...state,
            isUserMessagesDeleted: false,
          };
        case ChatsActionTypes.GET_CHANNEL_DETAILS:
          return {
            ...state,
            isChannelDetailsFetched: false,
            getUserDetailsLoading: false,
          };
        case ChatsActionTypes.TOGGLE_FAVOURITE_CONTACT:
          return {
            ...state,
            isFavouriteContactToggled: false,
          };
        case ChatsActionTypes.GET_ARCHIVE_CONTACT:
          return {
            ...state,
            isArchiveContactFetched: false,
          };
        case ChatsActionTypes.TOGGLE_ARCHIVE_CONTACT:
          return {
            ...state,
            isContactArchiveToggled: false,
          };
        case ChatsActionTypes.READ_CONVERSATION:
          return {
            ...state,
            isRead: false,
          };
        case ChatsActionTypes.DELETE_IMAGE:
          return {
            ...state,
            isImageDeleted: true,
          };
        default:
          return { ...state };
      }

    case ChatsActionTypes.GET_FAVOURITES: {
      return {
        ...state,
        getFavouritesLoading: true,
        isFavouritesFetched: false,
      };
    }
    case ChatsActionTypes.GET_DIRECT_MESSAGES:
      return {
        ...state,
        isDirectMessagesFetched: false,
        getDirectMessagesLoading: true,
      };
    case ChatsActionTypes.GET_CHANNELS:
      return {
        ...state,
        isChannelsFetched: false,
        getChannelsLoading: true,
      };
    case ChatsActionTypes.ADD_CONTACTS:
      return {
        ...state,
        isContactsAdded: false,
        addContactsLoading: true,
      };
    case ChatsActionTypes.CREATE_CHANNEL:
      return {
        ...state,
        isChannelCreated: false,
        createChannelLoading: true,
      };
    case ChatsActionTypes.CHANGE_SELECTED_CHAT:
      return {
        ...state,
        selectedChat: action.payload,
      };
    case ChatsActionTypes.GET_CHAT_USER_DETAILS:
      return {
        ...state,
        isUserDetailsFetched: false,
        getUserDetailsLoading: true,
      };
    case ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS:
      return {
        ...state,
        isUserConversationsFetched: false,
        getUserConversationsLoading: true,
        isUserMessageSent: false,
      };
    case ChatsActionTypes.TOGGLE_USER_DETAILS_TAB:
      return {
        ...state,
        isOpenUserDetails: action.payload,
      };
    case ChatsActionTypes.ON_SEND_MESSAGE:
      return {
        ...state,
        isUserMessageSent: false,
      };
    case ChatsActionTypes.DELETE_MESSAGE:
      return {
        ...state,
        isMessageDeleted: false,
      };
    case ChatsActionTypes.FORWARD_MESSAGE:
      return {
        ...state,
        isMessageForwarded: false,
      };
    case ChatsActionTypes.DELETE_USER_MESSAGES:
      return {
        ...state,
        isUserMessagesDeleted: false,
      };
    case ChatsActionTypes.GET_CHANNEL_DETAILS:
      return {
        ...state,
        isChannelDetailsFetched: false,
        getUserDetailsLoading: true,
      };
    case ChatsActionTypes.TOGGLE_FAVOURITE_CONTACT:
      return {
        ...state,
        isFavouriteContactToggled: false,
      };
    case ChatsActionTypes.GET_ARCHIVE_CONTACT:
      return {
        ...state,
        isArchiveContactFetched: false,
      };
    case ChatsActionTypes.TOGGLE_ARCHIVE_CONTACT:
      return {
        ...state,
        isContactArchiveToggled: false,
      };
    case ChatsActionTypes.DELETE_IMAGE:
      return {
        ...state,
        isImageDeleted: false,
      };
    default:
      return { ...state };
  }
};

export default Chats;
