import React, { useEffect, useState } from "react";
import classnames from "classnames";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Collapse,
  Form,
} from "reactstrap";

//utils
import { DivideByKeyResultTypes } from "../utils";

// interfaaces
import { ContactTypes } from "../data/contacts";
import { useContacts } from "../hooks";
import { CreateChannelPostData } from "../redux/actions";

// components
import AppSimpleBar from "./AppSimpleBar";

interface DataTypes {
  channelName: string;
  description: string;
}
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
  const onCheck = (checked: boolean) => {
    onSelectContact(contact.id, checked);
  };

  return (
    <li>
      <div className="form-check">
        <Input
          type="checkbox"
          className="form-check-input"
          id={`contact-${contact.id}`}
          onChange={(e: any) => onCheck(e.target.checked)}
        />
        <Label className="form-check-label" htmlFor={`contact-${contact.id}`}>
          {fullName}
        </Label>
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
    <div>
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
interface AddGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateChannel: (params: CreateChannelPostData) => void;
}
const AddGroupModal = ({
  isOpen,
  onClose,
  onCreateChannel,
}: AddGroupModalProps) => {
  /*
    collapse handeling
    */
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const toggleCollapse = () => {
    setIsOpenCollapse(!isOpenCollapse);
  };

  /*
    contacts hook
    */
  const { categorizedContacts, totalContacts } = useContacts();

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
    data
    */
  const [data, setData] = useState<DataTypes>({
    channelName: "",
    description: "",
  });
  const onDataChange = (field: "channelName" | "description", value: any) => {
    let modifiedData: DataTypes = { ...data };
    modifiedData[field] = value;
    setData(modifiedData);
  };

  /*
    disale button
    */
  const [valid, setValid] = useState(false);
  useEffect(() => {
    if (
      selectedContacts.length === 0 &&
      !data.description &&
      data.description === ""
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [selectedContacts, data]);

  /*
    submit data
    */
  const onSubmit = () => {
    const params = {
      name: data.channelName,
      members: selectedContacts,
      description: data.description,
    };
    onCreateChannel(params);
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={onClose}
      tabIndex={-1}
      centered
      scrollable
      id="addgroup-exampleModal"
      role="dialog"
    >
      <ModalHeader className="modal-title-custom" toggle={onClose}>
        Create New Group
      </ModalHeader>

      <ModalBody className="p-4">
        <Form>
          <div className="mb-4">
            <Label htmlFor="addgroupname-input" className="form-label">
              Group Name
            </Label>
            <Input
              type="text"
              className="form-control"
              id="addgroupname-input"
              placeholder="Enter Group Name"
              value={data.channelName || ""}
              onChange={(e: any) => {
                onDataChange("channelName", e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Group Members</label>
            <div className="mb-3">
              <Button
                color="light"
                size="sm"
                type="button"
                onClick={toggleCollapse}
              >
                Select Members
              </Button>
            </div>

            <Collapse isOpen={isOpenCollapse} id="groupmembercollapse">
              <div className="card border">
                <div className="card-header">
                  <h5 className="font-size-15 mb-0">Contacts</h5>
                </div>
                <div className="card-body p-2">
                  <AppSimpleBar style={{ maxHeight: "150px" }}>
                    {(categorizedContacts || []).map(
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
                </div>
              </div>
            </Collapse>
          </div>
          <div className="mb-3">
            <Label htmlFor="addgroupdescription-input" className="form-label">
              Description
            </Label>
            <textarea
              className="form-control"
              id="addgroupdescription-input"
              rows={3}
              placeholder="Enter Description"
              value={data.description || ""}
              onChange={(e: any) => {
                onDataChange("description", e.target.value);
              }}
            />
          </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="link" type="button" onClick={onClose}>
          Close
        </Button>
        <Button
          type="button"
          color="primary"
          onClick={onSubmit}
          disabled={!valid}
        >
          Create Groups
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddGroupModal;
