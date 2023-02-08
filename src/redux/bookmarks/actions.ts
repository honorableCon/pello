import { BookmarksActionTypes } from "./types";

// common success
export const bookmarksApiResponseSuccess = (actionType: string, data: any) => ({
  type: BookmarksActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const bookmarksApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: BookmarksActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getBookmarks = () => ({
  type: BookmarksActionTypes.GET_BOOKMARKS,
});

export const updateBookmark = (id: number, data: object) => ({
  type: BookmarksActionTypes.UPDATE_BOOKMARK,
  payload: { id, data },
});

export const deleteBookmark = (id: number) => ({
  type: BookmarksActionTypes.DELETE_BOOKMARK,
  payload: id,
});

export const resetBookmarks = (flag: string, value: any) => ({
  type: BookmarksActionTypes.RESET_BOOKMARKS,
  payload: { flag, value },
});
