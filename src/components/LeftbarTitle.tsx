import React from "react";

interface LeftbarTitleProps {
  title: string;
}
const LeftbarTitle = ({ title }: LeftbarTitleProps) => {
  return (
    <div className="px-4 pt-4">
      <div className="d-flex align-items-start">
        <div className="flex-grow-1">
          <h4 className="mb-3">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default LeftbarTitle;
