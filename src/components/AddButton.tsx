import React from "react";

interface AddButtonProps {
  onClick: () => void;
}
const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-soft-primary btn-sm"
    >
      <i className="bx bx-plus"></i>
    </button>
  );
};

export default AddButton;
