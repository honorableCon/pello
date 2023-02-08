import React, { useState } from "react";
import classnames from "classnames";
import { Button } from "reactstrap";

// interface
import { CallItem } from "../../../data/calls";
import { formateDate } from "../../../utils/index";
import AudioCallModal from "../../../components/AudioCallModal";
import VideoCallModal from "../../../components/VideoCallModal";

interface ProfileImageProps {
  call: CallItem;
}
const ProfileImage = ({ call }: ProfileImageProps) => {
  const shortName = `${call.firstName.charAt(0)}${call.lastName.charAt(0)}`;

  const colors = [
    "bg-primary",
    "bg-danger",
    "bg-info",
    "bg-warning",
    "bg-secondary",
    "bg-pink",
    "bg-purple",
  ];
  const [color] = useState(Math.floor(Math.random() * colors.length));
  const displayNumbers =
    call.peoplesAvailableOnCall > 2 ? call.peoplesAvailableOnCall - 1 : 0;
  const displayProfile =
    call.peoplesAvailableOnCall > 2
      ? call.peoples && call.peoples.length > 0
        ? call.peoples[0]
        : null
      : null;
  const groupProfile = displayProfile
    ? `${displayProfile.firstName.charAt(0)}${displayProfile.lastName.charAt(
        0
      )}`
    : "";

  return (
    <>
      {call.peoplesAvailableOnCall > 2 ? (
        <div className="chat-user-img flex-shrink-0 me-2">
          <div className="avatar-group">
            <div className="avatar-group-item">
              <div className="avatar-xs">
                {displayProfile && displayProfile.profileImage ? (
                  <img
                    src={displayProfile.profileImage}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                ) : (
                  <span
                    className={classnames(
                      "avatar-title",
                      "rounded-circle",
                      "text-uppercase",
                      "text-white",
                      colors[color]
                    )}
                  >
                    {groupProfile}
                  </span>
                )}
              </div>
            </div>
            <div className="avatar-group-item">
              <div className="avatar-xs">
                <div className="avatar-title rounded-circle bg-light text-primary">
                  {`${displayNumbers}+`}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : call.profileImage ? (
        <div className="chat-user-img flex-shrink-0 me-2">
          <img
            src={call.profileImage}
            className="rounded-circle avatar-xs"
            alt=""
          />
        </div>
      ) : (
        <div className="chat-user-img flex-shrink-0 avatar-xs me-2">
          <span
            className={classnames(
              "avatar-title",
              "rounded-circle",
              "text-uppercase",
              "text-white",
              colors[color]
            )}
          >
            {shortName}
          </span>
        </div>
      )}
    </>
  );
};

interface CallProps {
  call: CallItem;
}
const Call = ({ call }: CallProps) => {
  /*
   selected user
   */
  const [user, setUser] = useState<null | CallItem>(null);

  /*
    video call modal
    */
  const [isOpenVideoModal, setIsOpenVideoModal] = useState<boolean>(false);
  const onOpenVideo = () => {
    setUser(call);
    setIsOpenVideoModal(true);
  };
  const onCloseVideo = () => {
    setUser(null);
    setIsOpenVideoModal(false);
  };

  /*
        audio call modal
    */
  const [isOpenAudioModal, setIsOpenAudioModal] = useState<boolean>(false);
  const onOpenAudio = () => {
    setUser(call);
    setIsOpenAudioModal(true);
  };
  const onCloseAudio = () => {
    setUser(null);
    setIsOpenAudioModal(false);
  };

  const fullName = `${call.firstName} ${call.lastName}`;
  const date = formateDate(call.callDate, "d MMM, yyyy, hh:mmp");

  return (
    <>
      <li>
        <div className="d-flex align-items-center">
          <ProfileImage call={call} />
          <div className="flex-grow-1 overflow-hidden">
            <p className="text-truncate mb-0">{fullName}</p>
            <div className="text-muted font-size-12 text-truncate">
              {call.isIncomming ? (
                <i className="ri-arrow-left-down-fill text-success align-bottom me-1"></i>
              ) : (
                <i className="ri-arrow-right-up-fill text-danger align-bottom me-1"></i>
              )}
              {date}
            </div>
          </div>
          <div className="flex-shrink-0 ms-3">
            <div className="d-flex align-items-center gap-3">
              <div>
                <h5 className="mb-0 font-size-12 text-muted">
                  {call.callDuration}
                </h5>
              </div>
              <div>
                {call.hasVideoCall ? (
                  <Button
                    color="link"
                    type="button"
                    className="p-0 font-size-20 stretched-link"
                    onClick={onOpenVideo}
                  >
                    <i className="bx bx-video align-middle"></i>
                  </Button>
                ) : (
                  <Button
                    color="link"
                    type="button"
                    className="p-0 font-size-20 stretched-link"
                    onClick={onOpenAudio}
                  >
                    <i className="bx bxs-phone-call align-middle"></i>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </li>
      <AudioCallModal
        isOpen={isOpenAudioModal}
        onClose={onCloseAudio}
        user={user}
      />
      <VideoCallModal
        isOpen={isOpenVideoModal}
        onClose={onCloseVideo}
        user={user}
      />
    </>
  );
};

export default Call;
