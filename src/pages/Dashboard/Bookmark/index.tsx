import React, { useEffect, useState } from "react";

// hooks
import { useRedux } from "../../../hooks/index";

// actions
import {
  getBookmarks,
  deleteBookmark,
  updateBookmark,
} from "../../../redux/actions";

// components
import Loader from "../../../components/Loader";
import AppSimpleBar from "../../../components/AppSimpleBar";
import LeftbarTitle from "../../../components/LeftbarTitle";
import BookMark from "./BookMark";

// interface
import { BookMarkTypes } from "../../../data/bookmarks";

interface IndexProps {}
const Index = (props: IndexProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();

  const {
    bookmarksList,
    getBookmarksLoading,
    isBookmarkDeleted,
    isBookmarkUpdated,
  } = useAppSelector(state => ({
    bookmarksList: state.Bookmarks.bookmarks,
    getBookmarksLoading: state.Bookmarks.getBookmarksLoading,
    isBookmarkDeleted: state.Bookmarks.isBookmarkDeleted,
    isBookmarkUpdated: state.Bookmarks.isBookmarkUpdated,
  }));

  /*
  get bookmarks
  */
  useEffect(() => {
    dispatch(getBookmarks());
  }, [dispatch]);

  const [bookmarks, setBookmarks] = useState<BookMarkTypes[]>([]);
  useEffect(() => {
    setBookmarks(bookmarksList);
  }, [bookmarksList]);

  /*
  update bookmark
  */
  const onUpdate = (id: number, data: BookMarkTypes) => {
    dispatch(updateBookmark(id, data));
  };

  /*
  delete bookmark
  */
  const onDelete = (id: number) => {
    dispatch(deleteBookmark(id));
  };

  useEffect(() => {
    if (isBookmarkDeleted || isBookmarkUpdated) {
      dispatch(getBookmarks());
    }
  }, [dispatch, isBookmarkDeleted, isBookmarkUpdated]);

  return (
    <div className="position-relative">
      {getBookmarksLoading && <Loader />}
      <LeftbarTitle title="Bookmark" />
      <AppSimpleBar className="chat-message-list chat-bookmark-list">
        <ul className="list-unstyled chat-list">
          {(bookmarks || []).map((bookmark: BookMarkTypes, key: number) => (
            <BookMark
              key={key}
              bookmark={bookmark}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </AppSimpleBar>
    </div>
  );
};

export default Index;
