import React, { useEffect, useState } from "react";

// interface
import { PrivacyTypes } from "../../../data/settings";

// constants
import { DISPLAY_TYPES } from "../../../constants/index";

// components
import DisplaySelect from "./DisplaySelect";
interface PrivacyProps {
  privacy: PrivacyTypes;
  onChangeSettings: (field: string, value: any) => void;
}
const Privacy = ({ privacy, onChangeSettings }: PrivacyProps) => {
  const [data, setData] = useState<PrivacyTypes>({
    displayprofilePhoto: "selected",
    displayLastSeen: true,
    displayStatus: DISPLAY_TYPES.EVERYONE,
    readReceipts: true,
    displayGroups: DISPLAY_TYPES.EVERYONE,
  });
  useEffect(() => {
    if (privacy) {
      setData({
        displayprofilePhoto: privacy.displayprofilePhoto,
        displayLastSeen: privacy.displayLastSeen,
        displayStatus: privacy.displayStatus,
        readReceipts: privacy.readReceipts,
        displayGroups: privacy.displayGroups,
      });
    }
  }, [privacy]);

  const onChangeData = (
    field:
      | "displayprofilePhoto"
      | "displayLastSeen"
      | "displayStatus"
      | "readReceipts"
      | "displayGroups",
    value: string | boolean
  ) => {
    let modifiedData: any = { ...data };
    modifiedData[field] = value;
    setData(modifiedData);
    onChangeSettings("privacy", modifiedData);
  };

  return (
    <div className="accordion-body">
      <ul className="list-group list-group-flush">
        <li className="list-group-item py-3 px-0 pt-0">
          <DisplaySelect
            value={data.displayprofilePhoto}
            label="Profile photo"
            onChange={(value: string) => {
              onChangeData("displayprofilePhoto", value);
            }}
          />
        </li>
        <li className="list-group-item py-3 px-0">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 overflow-hidden">
              <h5 className="font-size-13 mb-0 text-truncate">Last seen</h5>
            </div>
            <div className="flex-shrink-0 ms-2">
              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="privacy-lastseenSwitch"
                  checked={data.displayLastSeen === true}
                  onChange={(e: any) => {
                    onChangeData("displayLastSeen", e.target.checked);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="privacy-lastseenSwitch"
                ></label>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3 px-0">
          <DisplaySelect
            value={data.displayStatus}
            onChange={(value: string) => {
              onChangeData("displayStatus", value);
            }}
            label="Status"
          />
          displayStatus
        </li>
        <li className="list-group-item py-3 px-0">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 overflow-hidden">
              <h5 className="font-size-13 mb-0 text-truncate">Read receipts</h5>
            </div>
            <div className="flex-shrink-0 ms-2">
              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="privacy-readreceiptSwitch"
                  checked={data.readReceipts === true}
                  onChange={(e: any) => {
                    onChangeData("readReceipts", e.target.checked);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="privacy-readreceiptSwitch"
                ></label>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3 px-0 pb-0">
          <DisplaySelect
            value={data.displayGroups}
            onChange={(value: string) => {
              onChangeData("displayGroups", value);
            }}
            label="Groups"
          />
        </li>
      </ul>
    </div>
  );
};

export default Privacy;
