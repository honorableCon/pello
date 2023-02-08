import React, { useEffect, useState } from "react";
import {
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import classnames from "classnames";

// interface
import { BasicDetailsTypes } from "../../../data/settings";

// CONSTANTS
import { STATUS_TYPES } from "../../../constants";
interface UserProfileProps {
  basicDetails: BasicDetailsTypes;
  status: STATUS_TYPES;
}
const UserProfile = ({ basicDetails, status }: UserProfileProps) => {
  const fullName = basicDetails
    ? `${basicDetails.firstName} ${basicDetails.lastName}`
    : "-";

  /*
    profile image
    */
  const [image, setImage] = useState<string>(
    basicDetails && basicDetails.profile
  );
  useEffect(() => {
    if (basicDetails && basicDetails.profile) {
      setImage(basicDetails.profile);
    }
  }, [basicDetails]);
  const onChangeProfile = (e: any) => {
    const files = [...e.target.files];
    if (files[0]) {
      const src = URL.createObjectURL(files[0]);
      setImage(src);
    }
  };

  /*
    drop down state
    */
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  /*
    status
    */
  const [userStatus, setUserStatus] = useState<STATUS_TYPES>(
    STATUS_TYPES.ACTIVE
  );
  const onChangeStatus = (status: STATUS_TYPES) => {
    setUserStatus(status);
  };
  useEffect(() => {
    setUserStatus(status);
  }, [status]);

  return (
    <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
      <div className="mb-3 profile-user">
        <img
          src={image}
          className="rounded-circle avatar-lg img-thumbnail user-profile-image"
          alt="user-profile"
        />
        <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
          <input
            onChange={(e: any) => onChangeProfile(e)}
            id="profile-img-file-input"
            type="file"
            className="profile-img-file-input"
            accept="image/png, image/jpeg"
          />
          <Label
            htmlFor="profile-img-file-input"
            className="profile-photo-edit avatar-xs"
          >
            <span className="avatar-title rounded-circle bg-light text-body">
              <i className="bx bxs-camera"></i>
            </span>
          </Label>
        </div>
      </div>

      <h5 className="font-size-16 mb-1 text-truncate">{fullName}</h5>

      <Dropdown
        className="d-inline-block"
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle tag="a" className="text-muted d-block" role="button">
          <i
            className={classnames(
              "bx",
              "bxs-circle",
              "font-size-10",
              "align-middle",
              { "text-success": userStatus === STATUS_TYPES.ACTIVE },
              { "text-warning": userStatus === STATUS_TYPES.AWAY },
              { "text-danger": userStatus === STATUS_TYPES.DO_NOT_DISTURB }
            )}
          ></i>{" "}
          {userStatus} <i className="mdi mdi-chevron-down"></i>
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem onClick={() => onChangeStatus(STATUS_TYPES.ACTIVE)}>
            <i className="bx bxs-circle text-success font-size-10 me-1 align-middle"></i>{" "}
            Active
          </DropdownItem>
          <DropdownItem onClick={() => onChangeStatus(STATUS_TYPES.AWAY)}>
            <i className="bx bxs-circle text-warning font-size-10 me-1 align-middle"></i>{" "}
            Away
          </DropdownItem>
          <DropdownItem
            onClick={() => onChangeStatus(STATUS_TYPES.DO_NOT_DISTURB)}
          >
            <i className="bx bxs-circle text-danger font-size-10 me-1 align-middle"></i>{" "}
            Do not disturb
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default UserProfile;
