import React from "react";

// component
import ChatUser from "./ChatUser";
import ChatChannel from "./ChatChannel";

interface ArchiveProps {
  archiveContacts: any;
  selectedChat: string | number;
  onSelectChat: (id: number | string) => void;
}
const Archive = ({
  archiveContacts,
  selectedChat,
  onSelectChat,
}: ArchiveProps) => {
  return (
    <>
      <h5 className="mb-3 px-4 mt-4 font-size-11 text-muted text-uppercase">
      Archived
      </h5>

      <div className="chat-message-list">
        <ul className="list-unstyled chat-list chat-user-list">
          {(archiveContacts || []).map((chat: any, key: number) => {
            if (chat.isChannel) {
              return (
                <ChatChannel
                  channel={chat}
                  key={key}
                  selectedChat={selectedChat}
                  onSelectChat={onSelectChat}
                />
              );
            } else {
              return (
                <ChatUser
                  user={chat}
                  key={key}
                  selectedChat={selectedChat}
                  onSelectChat={onSelectChat}
                />
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default Archive;
