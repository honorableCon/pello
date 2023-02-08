import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import classnames from "classnames";

//images
import imagePlaceholder from "../../../assets/images/users/profile-placeholder.png";

// constants
import { STATUS_TYPES } from "../../../constants";
interface ProfileUserProps {
  onCloseUserDetails: () => any;
  chatUserDetails: any;
  onOpenVideo: () => void;
  onOpenAudio: () => void;
}
const ProfileUser = ({
  onCloseUserDetails,
  chatUserDetails,
  onOpenAudio,
  onOpenVideo,
}: ProfileUserProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const profile = chatUserDetails.profileImage
    ? chatUserDetails.profileImage
    : imagePlaceholder;
  const fullName =
    chatUserDetails.name === undefined
      ? chatUserDetails.firstName
        ? `${chatUserDetails.firstName} ${chatUserDetails.lastName}`
        : "-"
      : chatUserDetails.name;

  return (
    <div className="p-3 border-bottom">
      <div className="user-profile-img">
        <img src={profile} className="profile-img rounded" alt="" />
        <div className="overlay-content rounded">
          <div className="user-chat-nav p-2">
            <div className="d-flex w-100">
              <div className="flex-grow-1">
                <Button
                  color="none"
                  type="button"
                  className="btn nav-btn text-white user-profile-show d-none d-lg-block"
                  onClick={onCloseUserDetails}
                >
                  <i className="bx bx-x"></i>
                </Button>
                <Button
                  type="button"
                  color="none"
                  className="btn nav-btn text-white user-profile-show d-block d-lg-none"
                  onClick={onCloseUserDetails}
                >
                  <i className="bx bx-left-arrow-alt"></i>
                </Button>
              </div>
              <div className="flex-shrink-0">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle
                    color="none"
                    className="btn nav-btn text-white"
                    type="button"
                  >
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem
                      className="d-flex justify-content-between align-items-center d-lg-none user-profile-show"
                      to="#"
                    >
                      View Profile <i className="bx bx-user text-muted"></i>
                    </DropdownItem>
                    <DropdownItem
                      className="d-flex justify-content-between align-items-center d-lg-none"
                      to="#"
                      onClick={onOpenAudio}
                    >
                      Audio <i className="bx bxs-phone-call text-muted"></i>
                    </DropdownItem>
                    <DropdownItem
                      className="d-flex justify-content-between align-items-center d-lg-none"
                      to="#"
                      onClick={onOpenVideo}
                    >
                      Video <i className="bx bx-video text-muted"></i>
                    </DropdownItem>
                    <DropdownItem
                      className="d-flex justify-content-between align-items-center"
                      to="#"
                    >
                      Archive <i className="bx bx-archive text-muted"></i>
                    </DropdownItem>
                    <DropdownItem
                      className="d-flex justify-content-between align-items-center"
                      to="#"
                    >
                      Muted <i className="bx bx-microphone-off text-muted"></i>
                    </DropdownItem>
                    <DropdownItem
                      className="d-flex justify-content-between align-items-center"
                      to="#"
                    >
                      Delete <i className="bx bx-trash text-muted"></i>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="mt-auto p-3">
            <h5 className="user-name mb-1 text-truncate">{fullName}</h5>
            {chatUserDetails.status && (
              <p className="font-size-14 text-truncate mb-0">
                <i
                  className={classnames(
                    "bx",
                    "bxs-circle",
                    "font-size-10",
                    "me-1",
                    "ms-0",
                    {
                      "text-success":
                        chatUserDetails.status === STATUS_TYPES.ACTIVE,
                    },
                    {
                      "text-warning":
                        chatUserDetails.status === STATUS_TYPES.AWAY,
                    },
                    {
                      "text-danger":
                        chatUserDetails.status === STATUS_TYPES.DO_NOT_DISTURB,
                    }
                  )}
                ></i>{" "}
                {chatUserDetails.status}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
