import React, { useState, useEffect } from "react";
import classnames from "classnames";

// hooks
import { useRedux } from "../../../hooks/index";

// actions
import {
  toggleUserDetailsTab,
  toggleFavouriteContact,
  getChatUserDetails,
  toggleArchiveContact,
} from "../../../redux/actions";

// components
import AudioCallModal from "../../../components/AudioCallModal";
import VideoCallModal from "../../../components/VideoCallModal";
import AppSimpleBar from "../../../components/AppSimpleBar";
import Loader from "../../../components/Loader";
import ProfileUser from "./ProfileUser";
import Actions from "./Actions";
import BasicDetails from "./BasicDetails";
import Groups from "./Groups";
import Media from "../../../components/Media";
import AttachedFiles from "../../../components/AttachedFiles";
import Status from "./Status";
import Members from "./Members";

interface IndexProps {
  isChannel: boolean;
}
const Index = ({ isChannel }: IndexProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();

  const {
    chatUserDetails,
    getUserDetailsLoading,
    isOpenUserDetails,
    isFavouriteContactToggled,
  } = useAppSelector(state => ({
    chatUserDetails: state.Chats.chatUserDetails,
    getUserDetailsLoading: state.Chats.getUserDetailsLoading,
    isOpenUserDetails: state.Chats.isOpenUserDetails,
    isFavouriteContactToggled: state.Chats.isFavouriteContactToggled,
  }));

  useEffect(() => {
    if (isFavouriteContactToggled) {
      dispatch(getChatUserDetails(chatUserDetails.id));
    }
  }, [dispatch, isFavouriteContactToggled, chatUserDetails.id]);

  /*
  close tab
  */
  const onCloseUserDetails = () => {
    dispatch(toggleUserDetailsTab(false));
  };

  /*
    video call modal
    */
  const [isOpenVideoModal, setIsOpenVideoModal] = useState<boolean>(false);
  const onOpenVideo = () => {
    setIsOpenVideoModal(true);
  };
  const onCloseVideo = () => {
    setIsOpenVideoModal(false);
  };

  /*
        audio call modal
    */
  const [isOpenAudioModal, setIsOpenAudioModal] = useState<boolean>(false);
  const onOpenAudio = () => {
    setIsOpenAudioModal(true);
  };
  const onCloseAudio = () => {
    setIsOpenAudioModal(false);
  };

  /*
  favourite
  */
  const onToggleFavourite = () => {
    dispatch(toggleFavouriteContact(chatUserDetails.id));
  };

  /*
  archive
  */
  const onToggleArchive = () => {
    dispatch(toggleArchiveContact(chatUserDetails.id));
  };

  return (
    <>
      <div
        className={classnames("user-profile-sidebar", {
          "d-block": isOpenUserDetails,
        })}
      >
        <div className="position-relative">
          {getUserDetailsLoading && <Loader />}

          <ProfileUser
            onCloseUserDetails={onCloseUserDetails}
            chatUserDetails={chatUserDetails}
            onOpenVideo={onOpenVideo}
            onOpenAudio={onOpenAudio}
          />
          {/* <!-- End profile user --> */}

          {/* <!-- Start user-profile-desc --> */}
          <AppSimpleBar className="p-4 user-profile-desc">
            {" "}
            {/* simplebar */}
            <Actions
              chatUserDetails={chatUserDetails}
              onOpenVideo={onOpenVideo}
              onOpenAudio={onOpenAudio}
              onToggleFavourite={onToggleFavourite}
              onToggleArchive={onToggleArchive}
            />
            <Status about={chatUserDetails.about} />
            {!isChannel ? (
              <>
                <BasicDetails chatUserDetails={chatUserDetails} />
                <hr className="my-4" />
                <Groups chatUserDetails={chatUserDetails} />
                <hr className="my-4" />
              </>
            ) : (
              <>
                <Members chatUserDetails={chatUserDetails} />
                <hr className="my-4" />
              </>
            )}
            <Media media={chatUserDetails.media} limit={3} />
            <hr className="my-4" />
            <AttachedFiles attachedFiles={chatUserDetails.attachedFiles} />
          </AppSimpleBar>
          {/* <!-- end user-profile-desc --> */}
          {isOpenAudioModal && (
            <AudioCallModal
              isOpen={isOpenAudioModal}
              onClose={onCloseAudio}
              user={chatUserDetails}
            />
          )}
          {isOpenVideoModal && (
            <VideoCallModal
              isOpen={isOpenVideoModal}
              onClose={onCloseVideo}
              user={chatUserDetails}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
