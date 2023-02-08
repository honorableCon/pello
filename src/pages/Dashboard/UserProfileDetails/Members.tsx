import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Badge } from "reactstrap";

// hooks
import { useRedux } from "../../../hooks/index";

// actions
import {
  getChannelDetails,
  getChatUserDetails,
  getChatUserConversations,
  changeSelectedChat,
} from "../../../redux/actions";

interface GroupProps {
  member: any;
}
const Member = ({ member }: GroupProps) => {
  // global store
  const { dispatch } = useRedux();

  const fullName = `${member.firstName} ${member.lastName}`;
  const shortName = `${member.firstName.charAt(0)}${member.lastName.charAt(0)}`;

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

  const onSelectChat = (id: string | number, isChannel?: boolean) => {
    if (isChannel) {
      dispatch(getChannelDetails(id));
    } else {
      dispatch(getChatUserDetails(id));
    }
    dispatch(getChatUserConversations(id));
    dispatch(changeSelectedChat(id));
  };

  return (
    <li>
      <Link to="#" onClick={() => onSelectChat(member.id)}>
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0 avatar-xs me-2">
            {member.profileImage ? (
              <div
                className={classnames(
                  "chat-user-img",
                  "align-self-center",
                  "me-2",
                  "ms-0"
                )}
              >
                <img
                  src={member.profileImage}
                  className="rounded-circle avatar-xs"
                  alt=""
                />
              </div>
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
                {shortName}
              </span>
            )}
          </div>
          <div className="flex-grow-1 overflow-hidden">
            <p className="text-truncate mb-0">{fullName}</p>
          </div>
          {member.isAdmin && (
            <div className="ms-auto">
              <Badge className="badge badge-soft-primary rounded p-1">
                Admin
              </Badge>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};
interface GroupsProps {
  chatUserDetails: any;
}
const Members = ({ chatUserDetails }: GroupsProps) => {
  const groups =
    chatUserDetails.members &&
    chatUserDetails.members.length &&
    chatUserDetails.members;
  return (
    <div>
      <div className="d-flex">
        <div className="flex-grow-1">
          <h5 className="font-size-11 text-muted text-uppercase">Members</h5>
        </div>
      </div>

      {groups ? (
        <ul className="list-unstyled chat-list mx-n4">
          {(groups || []).map((member: any, key: number) => (
            <Member member={member} key={key} />
          ))}
        </ul>
      ) : (
        <p>No Groups</p>
      )}
    </div>
  );
};

export default Members;
