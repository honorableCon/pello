import React from "react";

import { Button, UncontrolledPopover, PopoverBody } from "reactstrap";
interface EndButtonsProps {
  onSubmit: () => void;
  disabled: boolean;
}
const EndButtons = ({ onSubmit, disabled }: EndButtonsProps) => {
  return (
    <div className="chat-input-links ms-2 gap-md-1">
      <div className="links-list-item d-none d-sm-block">
        <Button
          color="none"
          type="button"
          className="btn btn-link text-decoration-none btn-lg waves-effect"
          id="audio-btn"
        >
          <i className="bx bx-microphone align-middle"></i>
        </Button>
      </div>
      <UncontrolledPopover trigger="focus" placement="top" target="audio-btn">
        <PopoverBody>
          <div className="loader-line">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </PopoverBody>
      </UncontrolledPopover>
      <div className="links-list-item">
        <Button
          color="primary"
          type="submit"
          disabled={disabled}
          className="btn btn-primary btn-lg chat-send waves-effect waves-light"
        >
          <i className="bx bxs-send align-middle"></i>
        </Button>
      </div>
    </div>
  );
};

export default EndButtons;
