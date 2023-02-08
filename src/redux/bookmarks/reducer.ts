// types
import { BookmarksActionTypes, BookmarksState } from "./types";

export const INIT_STATE: BookmarksState = {
  bookmarks: [],
};

const Bookmarks = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case BookmarksActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case BookmarksActionTypes.GET_BOOKMARKS:
          return {
            ...state,
            bookmarks: action.payload.data,
            isBookmarksFetched: true,
            getBookmarksLoading: false,
            isBookmarkUpdated: false,
            isBookmarkDeleted: false,
          };
        case BookmarksActionTypes.UPDATE_BOOKMARK:
          return {
            ...state,
            isBookmarkUpdated: true,
          };
        case BookmarksActionTypes.DELETE_BOOKMARK:
          return {
            ...state,
            isBookmarkDeleted: true,
          };
        default:
          return { ...state };
      }

    case BookmarksActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case BookmarksActionTypes.GET_BOOKMARKS:
          return {
            ...state,
            isBookmarksFetched: false,
            getBookmarksLoading: false,
          };
        case BookmarksActionTypes.UPDATE_BOOKMARK:
          return {
            ...state,
            isBookmarkUpdated: false,
            error: action.payload.error,
          };
        case BookmarksActionTypes.DELETE_BOOKMARK:
          return {
            ...state,
            isBookmarkDeleted: false,
            error: action.payload.error,
          };
        default:
          return { ...state };
      }

    case BookmarksActionTypes.GET_BOOKMARKS: {
      return {
        ...state,
        getBookmarksLoading: true,
        isBookmarksFetched: false,
      };
    }
    case BookmarksActionTypes.UPDATE_BOOKMARK:
      return {
        ...state,
        isBookmarkUpdated: false,
      };
    case BookmarksActionTypes.DELETE_BOOKMARK:
      return {
        ...state,
        isBookmarkDeleted: false,
      };
    case BookmarksActionTypes.RESET_BOOKMARKS:
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

export default Bookmarks;
