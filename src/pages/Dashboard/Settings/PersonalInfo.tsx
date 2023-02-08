import React from "react";
import { Button } from "reactstrap";

// interface
import { BasicDetailsTypes } from "../../../data/settings";

interface PersonalInfoProps {
  basicDetails: BasicDetailsTypes;
}
const PersonalInfo = ({ basicDetails }: PersonalInfoProps) => {
  const fullName = basicDetails
    ? `${basicDetails.firstName} ${basicDetails.lastName}`
    : "-";
  return (
    <div className="accordion-body">
      <div className="float-end">
        <Button
          color="none"
          type="button"
          className="btn btn-soft-primary btn-sm"
        >
          <i className="bx bxs-pencil align-middle"></i>
        </Button>
      </div>

      <div>
        <p className="text-muted mb-1">Name</p>
        <h5 className="font-size-14">{fullName}</h5>
      </div>

      <div className="mt-4">
        <p className="text-muted mb-1">Email</p>
        <h5 className="font-size-14">
          {basicDetails && basicDetails.email ? basicDetails.email : "-"}
        </h5>
      </div>

      <div className="mt-4">
        <p className="text-muted mb-1">Location</p>
        <h5 className="font-size-14 mb-0">
          {basicDetails && basicDetails.location ? basicDetails.location : "-"}
        </h5>
      </div>
    </div>
  );
};

export default PersonalInfo;
