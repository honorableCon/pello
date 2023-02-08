import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}
const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <div>
      <h5 className="font-size-11 text-muted text-uppercase mb-3">{title}</h5>
    </div>
  );
};

export default SectionTitle;
