import React from "react";

// interface
import { MessagesTypes } from "../../../data/messages";

// hooks
import { useProfile } from "../../../hooks";

interface RepliedMessageProps {
  isFromMe: boolean;
  message: MessagesTypes;
  fullName: string;
}
function RepliedMessage({ isFromMe, message, fullName }: RepliedMessageProps) {
  const { userProfile } = useProfile();

  const isReplyFromMe = message.meta.sender + "" === userProfile.uid + "";
  return (
    <div className="">
      <div className="replymessage-block mb-2 d-flex align-items-start">
        <div className="flex-grow-1">
          <h5 className="conversation-name">
            {isReplyFromMe ? "You" : fullName}
          </h5>
          {message.replyOf?.text && (
            <p className="mb-0">{message.replyOf?.text}</p>
          )}
          {(message.replyOf?.image || message.replyOf?.attachments) && (
            <p className="mb-0">
              {message.replyOf?.attachments &&
                !message.replyOf?.image &&
                `${message.replyOf?.attachments.length} Files`}
              {message.replyOf?.image &&
                !message.replyOf?.attachments &&
                `${message.replyOf?.image.length} Images`}
              {message.replyOf?.image &&
                message.replyOf?.attachments &&
                `${message.replyOf?.attachments.length} Files & ${message.replyOf?.image.length} Images`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RepliedMessage;
