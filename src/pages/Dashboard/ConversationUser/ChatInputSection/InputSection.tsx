import React from "react";

import { Input } from "reactstrap";

interface InputSectionProps {
  value: null | string;
  onChange: (value: string) => void;
}
const InputSection = ({ value, onChange }: InputSectionProps) => {
  return (
    <div className="position-relative">
      <Input
        type="text"
        className="form-control form-control-lg chat-input"
        id="chat-input"
        placeholder="Type your message..."
        value={value || ""}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
        autoComplete="off"
      />
    </div>
  );
};
export default InputSection;
