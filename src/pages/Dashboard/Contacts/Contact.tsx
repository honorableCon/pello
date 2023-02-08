import React, { useState } from "react";
import classnames from "classnames";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//utils
import { DivideByKeyResultTypes } from "../../../utils";

// interfaaces
import { ContactTypes } from "../../../data/contacts";

interface ContactItemProps {
  contact: ContactTypes;
  onSelectChat: (id: string | number, isChannel?: boolean) => void;
}
const ContactItem = ({ contact, onSelectChat }: ContactItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const fullName = `${contact.firstName} ${contact.lastName}`;
  const shortName = `${contact.firstName.charAt(0)}${contact.lastName.charAt(
    0
  )}`;
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

  return (
    <li onClick={() => onSelectChat(contact.id)}>
      <div className="d-flex align-items-center">
        <div className="flex-shrink-0 me-2">
          <div className="avatar-xs">
            {contact.profileImage ? (
              <img
                src={contact.profileImage}
                alt=""
                className="img-fluid rounded-circle"
              />
            ) : (
              <span
                className={classnames(
                  "avatar-title",
                  "rounded-circle",
                  "font-size-10",
                  "text-uppercase",
                  colors[color]
                )}
              >
                {shortName}
              </span>
            )}
          </div>
        </div>
        <div className="flex-grow-1">
          <h5 className="font-size-14 m-0">{fullName}</h5>
        </div>
        <div className="flex-shrink-0">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag="a" className="text-mute">
              <i className="bx bx-dots-vertical-rounded align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem
                className="d-flex align-items-center justify-content-between"
                href="#"
              >
                Edit <i className="bx bx-pencil ms-2 text-muted"></i>
              </DropdownItem>
              <DropdownItem
                className="d-flex align-items-center justify-content-between"
                href="#"
              >
                Block <i className="bx bx-block ms-2 text-muted"></i>
              </DropdownItem>
              <DropdownItem
                className="d-flex align-items-center justify-content-between"
                href="#"
              >
                Remove <i className="bx bx-trash ms-2 text-muted"></i>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </li>
  );
};
interface CharacterItemProps {
  letterContacts: DivideByKeyResultTypes;
  index: number;
  onSelectChat: (id: string | number, isChannel?: boolean) => void;
}
const CharacterItem = ({
  letterContacts,
  index,
  onSelectChat,
}: CharacterItemProps) => {
  return (
    <div className={classnames({ "mt-3": index !== 0 })}>
      <div className="contact-list-title">{letterContacts.letter}</div>

      <ul className="list-unstyled contact-list">
        {(letterContacts.data || []).map((contact: any, key: number) => (
          <ContactItem
            contact={contact}
            key={key}
            onSelectChat={onSelectChat}
          />
        ))}
      </ul>
    </div>
  );
};

export default CharacterItem;
