import React from "react";

// interface
import { UserTypes } from "../../../data/chat";

// component
import ChatUser from "./ChatUser";
interface FavouritesProps {
  users: Array<UserTypes>;
  selectedChat: string | number;
  onSelectChat: (id: number | string) => void;
}
const Favourites = ({ users, selectedChat, onSelectChat }: FavouritesProps) => {
  return (
    <>
      <h5 className="mb-3 px-4 mt-4 font-size-11 text-muted text-uppercase">
        Favourites
      </h5>

      <div className="chat-message-list">
        <ul className="list-unstyled chat-list chat-user-list">
          {(users || []).map((user: UserTypes, key: number) => (
            <ChatUser
              user={user}
              key={key}
              selectedChat={selectedChat}
              onSelectChat={onSelectChat}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Favourites;
