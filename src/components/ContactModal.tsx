import React, { useEffect, useState } from "react";
import classnames from "classnames";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
} from "reactstrap";

// hooks
import { useRedux } from "../hooks/index";

// components
import AppSimpleBar from "./AppSimpleBar";
import EmptyStateResult from "./EmptyStateResult";

//utils
import { DivideByKeyResultTypes, divideByKey } from "../utils";

// interfaaces
import { ContactTypes } from "../data/contacts";

// hooks
import { useContacts } from "../hooks";

interface ContactItemProps {
  contact: ContactTypes;
  selected: boolean;
  onSelectContact: (id: string | number, selected: boolean) => void;
}
const ContactItem = ({
  contact,
  selected,
  onSelectContact,
}: ContactItemProps) => {
  const fullName = `${contact.firstName} ${contact.lastName}`;
  const onClick = () => {
    onSelectContact(contact.id, !selected);
  };

  return (
    <li className={classnames({ selected: selected })} onClick={onClick}>
      <div>
        <h5 className="font-size-14 m-0">{fullName}</h5>
      </div>
    </li>
  );
};
interface CharacterItemProps {
  letterContacts: DivideByKeyResultTypes;
  index: number;
  totalContacts: number;
  selectedContacts: Array<number | string>;
  onSelectContact: (id: string | number, selected: boolean) => void;
}

const CharacterItem = ({
  letterContacts,
  index,
  totalContacts,
  selectedContacts,
  onSelectContact,
}: CharacterItemProps) => {
  return (
    <div className={classnames({ "mt-3": index !== 0 })}>
      <div className="contact-list-title">{letterContacts.letter}</div>

      <ul
        className={classnames("list-unstyled", "contact-list", {
          "mb-0": index + 1 === totalContacts,
        })}
      >
        {(letterContacts.data || []).map((contact: any, key: number) => {
          const selected: boolean = selectedContacts.includes(contact.id);
          return (
            <ContactItem
              contact={contact}
              key={key}
              selected={selected}
              onSelectContact={onSelectContact}
            />
          );
        })}
      </ul>
    </div>
  );
};
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddContact: (contacts: Array<string | number>) => void;
}
const ContactModal = ({ isOpen, onClose, onAddContact }: ContactModalProps) => {
  // global store
  const { useAppSelector } = useRedux();

  const { contactsList } = useAppSelector(state => ({
    contactsList: state.Contacts.contacts,
  }));

  /*
  contacts hook
  */
  const { categorizedContacts, totalContacts } = useContacts();
  const [contacts, setContacts] = useState<any>([]);
  useEffect(() => {
    setContacts(categorizedContacts);
  }, [categorizedContacts]);

  /*
  contact search
  */
  const [search, setSearch] = useState("");
  const onChangeSearch = (value: string) => {
    setSearch(value);
    let modifiedContacts = [...contactsList];
    let filteredContacts = (modifiedContacts || []).filter((c: any) =>
      c["firstName"].toLowerCase().includes(value.toLowerCase())
    );
    const formattedContacts = divideByKey("firstName", filteredContacts);
    setContacts(formattedContacts);
  };

  const totalC = (contacts || []).length;

  /*
  select contacts
  */
  const [selectedContacts, setSelectedContacts] = useState<
    Array<string | number>
  >([]);
  const onSelectContact = (id: string | number, selected: boolean) => {
    let modifiedList: Array<string | number> = [...selectedContacts];
    if (selected) {
      modifiedList = [...modifiedList, id];
    } else {
      modifiedList = modifiedList.filter(m => m + "" !== id + "");
    }
    setSelectedContacts(modifiedList);
  };

  /*
  disale button
  */
  const disabled = selectedContacts.length === 0;

  /*
  submit data
  */
  const onSubmit = () => {
    onAddContact(selectedContacts);
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={onClose}
      tabIndex={-1}
      centered
      className="contactModal"
    >
      <ModalHeader className="modal-title-custom" toggle={onClose}>
        Add Contact
      </ModalHeader>
      <ModalBody className="p-4">
        <InputGroup className="mb-4">
          <Input
            type="text"
            className="form-control bg-light border-0 pe-0"
            placeholder="Search here.."
            aria-label="Example text with button addon"
            aria-describedby="contactSearchbtn-addon"
            value={search || ""}
            onChange={(e: any) => {
              onChangeSearch(e.target.value);
            }}
          />
          <Button color="light" type="button" id="contactSearchbtn-addon">
            <i className="bx bx-search align-middle"></i>
          </Button>
        </InputGroup>

        {totalC === 0 ? (
          <EmptyStateResult searchedText={search} />
        ) : (
          <>
            <div className="d-flex align-items-center px-1">
              <div className="flex-grow-1">
                <h4 className=" font-size-11 text-muted text-uppercase">
                  Contacts
                </h4>
              </div>
            </div>
            <AppSimpleBar
              className="contact-modal-list mx-n4 px-1"
              style={{ maxHeight: "200px" }}
            >
              {(contacts || []).map(
                (letterContacts: DivideByKeyResultTypes, key: number) => (
                  <CharacterItem
                    letterContacts={letterContacts}
                    key={key}
                    index={key}
                    totalContacts={totalContacts}
                    selectedContacts={selectedContacts}
                    onSelectContact={onSelectContact}
                  />
                )
              )}
            </AppSimpleBar>
          </>
        )}
      </ModalBody>
      <ModalFooter>
        <Button type="button" color="link" onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="button"
          color="primary"
          disabled={disabled}
          onClick={onSubmit}
        >
          <i className="bx bxs-send align-middle"></i>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ContactModal;
