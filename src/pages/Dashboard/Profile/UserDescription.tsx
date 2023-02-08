import React from "react";

// interface
import { BasicDetailsTypes } from "../../../data/myProfile";

interface UserDescriptionProps {
  basicDetails: BasicDetailsTypes;
}
const UserDescription = ({ basicDetails }: UserDescriptionProps) => {
  return (
    <>
      <div className="text-muted">
        <p className="mb-4">
          {basicDetails && basicDetails.description
            ? basicDetails.description
            : "-"}
        </p>
      </div>

      <div>
        <div className="d-flex py-2">
          <div className="flex-shrink-0 me-3">
            <i className="bx bx-user align-middle text-muted"></i>
          </div>
          <div className="flex-grow-1">
            <p className="mb-0">
              {basicDetails && basicDetails.fullName
                ? basicDetails.fullName
                : "-"}
            </p>
          </div>
        </div>

        <div className="d-flex py-2">
          <div className="flex-shrink-0 me-3">
            <i className="bx bx-message-rounded-dots align-middle text-muted"></i>
          </div>
          <div className="flex-grow-1">
            <p className="mb-0">
              {basicDetails && basicDetails.email ? basicDetails.email : "-"}
            </p>
          </div>
        </div>

        <div className="d-flex py-2">
          <div className="flex-shrink-0 me-3">
            <i className="bx bx-location-plus align-middle text-muted"></i>
          </div>
          <div className="flex-grow-1">
            <p className="mb-0">
              {basicDetails && basicDetails.location
                ? basicDetails.location
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDescription;
