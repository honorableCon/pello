import React, { useEffect, useState } from "react";
import { Label, UncontrolledTooltip } from "reactstrap";

// interface
import { BasicDetailsTypes } from "../../../data/settings";

interface UserCoverImageProps {
  basicDetails: BasicDetailsTypes;
}
const UserCoverImage = ({ basicDetails }: UserCoverImageProps) => {
  const [image, setImage] = useState<string>(
    basicDetails && basicDetails.coverImage
  );
  useEffect(() => {
    if (basicDetails && basicDetails.coverImage) {
      setImage(basicDetails.coverImage);
    }
  }, [basicDetails]);
  const onChangeProfileCover = (e: any) => {
    const files = [...e.target.files];
    if (files[0]) {
      const src = URL.createObjectURL(files[0]);
      setImage(src);
    }
  };
  return (
    <div className="user-profile-img">
      <img
        src={image}
        className="profile-img profile-foreground-img"
        style={{ height: "160px" }}
        alt=""
      />
      <div className="overlay-content">
        <div>
          <div className="user-chat-nav p-3">
            <div className="d-flex w-100 align-items-center">
              <div className="flex-grow-1">
                <h5 className="text-white mb-0">Settings</h5>
              </div>
              <div className="flex-shrink-0">
                <div
                  className="avatar-xs p-0 rounded-circle profile-photo-edit"
                  id="change-cover"
                >
                  <input
                    id="profile-foreground-img-file-input"
                    type="file"
                    accept="image/png, image/jpeg"
                    className="profile-foreground-img-file-input"
                    onChange={e => onChangeProfileCover(e)}
                  />
                  <Label
                    htmlFor="profile-foreground-img-file-input"
                    className="profile-photo-edit avatar-xs"
                  >
                    <span className="avatar-title rounded-circle bg-light text-body">
                      <i className="bx bxs-pencil"></i>
                    </span>
                  </Label>
                </div>
                <UncontrolledTooltip target="change-cover" placement="bottom">
                  Change Background
                </UncontrolledTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCoverImage;
