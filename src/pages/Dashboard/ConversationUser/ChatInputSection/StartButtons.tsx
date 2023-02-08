import React, { useState } from "react";

import { Button, UncontrolledTooltip, PopoverBody, Popover } from "reactstrap";

// emoji picker
import Picker from "emoji-picker-react";

interface StartButtonsProps {
  onToggle: () => void;
  onChange: (value: string) => void;
  text: null | string;
}
const StartButtons = ({ onToggle, onChange, text }: StartButtonsProps) => {
  /*
  emoji handeling
  */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggleEmoji = () => {
    setIsOpen(!isOpen);
  };

  const onEmojiClick = (event: any, emojiObject: any) => {
    onChange(text + emojiObject.emoji);
  };

  return (
    <div className="chat-input-links me-md-2">
      <div className="links-list-item" id="more-menu">
        <Button
          type="button"
          className="btn btn-link text-decoration-none btn-lg waves-effect"
          onClick={onToggle}
          color="none"
        >
          <i className="bx bx-dots-horizontal-rounded align-middle"></i>
        </Button>
      </div>
      <UncontrolledTooltip target="more-menu" placement="top">
        More
      </UncontrolledTooltip>
      <div className="links-list-item" id="emoji">
        <Button
          type="button"
          className="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn"
          id="emoji-btn"
          color="none"
          onClick={onToggleEmoji}
        >
          <i className="bx bx-smile align-middle"></i>
        </Button>
      </div>
      <UncontrolledTooltip target="emoji" placement="top">
        Emoji
      </UncontrolledTooltip>
      <Popover
        trigger="focus"
        placement="bottom"
        target="emoji-btn"
        isOpen={isOpen}
        toggle={onToggleEmoji}
      >
        <PopoverBody className="p-0">
          <div>
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default StartButtons;
