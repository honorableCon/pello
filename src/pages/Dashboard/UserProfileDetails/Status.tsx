import React from "react";

interface StatusProps {
  about: string;
}
const Status = ({ about }: StatusProps) => {
  return (
    <div className="text-muted pt-4">
      <h5 className="font-size-11 text-uppercase">Status :</h5>
      <p className="mb-4">{about ? about : "-"}</p>
    </div>
  );
};

export default Status;
