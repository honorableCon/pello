import React from "react";

// constants
import { DisplayTypes, DisplayOpt } from "../../../constants/index";

interface DisplaySelectProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}
const DisplaySelect = ({ value, onChange, label }: DisplaySelectProps) => {
  const onChangeSelect = (value: string) => {
    onChange(value);
  };
  return (
    <div className="d-flex align-items-center">
      <div className="flex-grow-1 overflow-hidden">
        <h5 className="font-size-13 mb-0 text-truncate">{label}</h5>
      </div>
      <div className="flex-shrink-0 ms-2">
        <select
          value={value}
          className="form-select form-select-sm"
          onChange={(e: any) => {
            onChangeSelect(e.target.value);
          }}
        >
          {(DisplayTypes || []).map((option: DisplayOpt, key: number) => (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DisplaySelect;
