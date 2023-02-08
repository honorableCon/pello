// interfaces
import { contacts } from "./contacts";
import { MediaTypes, AttachedfileTypes } from "./myProfile";

import img1 from "../assets/images/small/img-1.jpg";
import img2 from "../assets/images/small/img-2.jpg";

// interface
import { ContactTypes } from "./contacts";
interface MemberTypes extends ContactTypes {
  isAdmin?: boolean;
}
interface ChannelDataTypes {
  id: number | string;
  name: string;
  about?: string;
  members: Array<MemberTypes>;
  media?: MediaTypes;
  attachedFiles?: AttachedfileTypes;
  isArchived?: boolean;
}
let userChannels: ChannelDataTypes[] = [
  {
    id: "61665bcb9a456823e282afa7",
    name: "Developper frontend",
    about: "The Channel Created For Developpers Frontend.",
    members: [{ ...contacts[0], isAdmin: true }, { ...contacts[1] }],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: img1,
        },
        {
          id: 2,
          url: img2,
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "61665bcb9a41b4e8352ba610",
    name: "Design Phase 2",
    isArchived: true,
    members: [{ ...contacts[0] }, { ...contacts[1] }],
  },
];

const onChangeUserChannels = (newData: Array<ChannelDataTypes>) => {
  userChannels = newData;
};

export { userChannels, onChangeUserChannels };
