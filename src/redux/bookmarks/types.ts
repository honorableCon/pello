export enum BookmarksActionTypes {
  API_RESPONSE_SUCCESS = "@@bookmarks/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@bookmarks/API_RESPONSE_ERROR",

  GET_BOOKMARKS = "@@bookmarks/GET_BOOKMARKS",
  UPDATE_BOOKMARK = "@@bookmarks/UPDATE_BOOKMARK",
  DELETE_BOOKMARK = "@@bookmarks/DELETE_BOOKMARK",
  RESET_BOOKMARKS = "@@bookmarks/RESET_BOOKMARKS",
}
export interface BookmarksState {
  bookmarks: Array<any>;
}
