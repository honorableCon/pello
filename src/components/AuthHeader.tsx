import React from "react";

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}
const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <div className="text-center mb-5">
      <h3>{title}</h3>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  );
};

export default AuthHeader;
