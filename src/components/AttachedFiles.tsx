import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link } from "react-router-dom";

// components
import SectionTitle from "../pages/Dashboard/Profile/SectionTitle";

// interface
import { AttachedfileTypes, AttachedfileItemTypes } from "../data/myProfile";
import { Card } from "reactstrap";
interface AttachedFileItemProps {
  attachedFile: AttachedfileItemTypes;
}
const AttachedFileItem = ({ attachedFile }: AttachedFileItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Card className="p-2 border mb-2">
      <div className="d-flex align-items-center">
        <div className="flex-shrink-0 avatar-xs ms-1 me-3">
          <div className="avatar-title bg-soft-primary text-primary rounded-circle">
            <i className={attachedFile.icon}></i>
          </div>
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <h5 className="font-size-14 text-truncate mb-1">
            {attachedFile.fileName}
          </h5>
          <p className="text-muted font-size-13 mb-0">{attachedFile.size}</p>
        </div>

        <div className="flex-shrink-0 ms-3">
          <div className="d-flex gap-2">
            <div className="d-flex align-items-center justify-content-center">
              <Link to={attachedFile.downloadUrl} className="text-muted px-1">
                <i className="bx bxs-download"></i>
              </Link>
            </div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                color="none"
                className="text-muted px-1"
                role="button"
              >
                <i className="bx bx-dots-horizontal-rounded"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem
                  className="dropdown-item d-flex align-items-center justify-content-between"
                  href="#"
                >
                  Share <i className="bx bx-share-alt ms-2 text-muted"></i>
                </DropdownItem>
                <DropdownItem
                  className="dropdown-item d-flex align-items-center justify-content-between"
                  href="#"
                >
                  Bookmark <i className="bx bx-bookmarks text-muted ms-2"></i>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  className="dropdown-item d-flex align-items-center justify-content-between"
                  href="#"
                >
                  Delete <i className="bx bx-trash ms-2 text-muted"></i>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </Card>
  );
};
interface AttachedFilesProps {
  attachedFiles: AttachedfileTypes;
}

const AttachedFiles = ({ attachedFiles }: AttachedFilesProps) => {
  const [files, setFiles] = useState<AttachedfileItemTypes[]>([]);

  useEffect(() => {
    if (attachedFiles && attachedFiles.list) setFiles(attachedFiles.list);
  }, [attachedFiles]);

  return (
    <div>
      <SectionTitle title="Attached Files" />

      <div>
        {attachedFiles
          ? files.map((attachedFile: AttachedfileItemTypes, key: number) => (
              <AttachedFileItem attachedFile={attachedFile} key={key} />
            ))
          : "No Files."}
      </div>
    </div>
  );
};
export default AttachedFiles;
