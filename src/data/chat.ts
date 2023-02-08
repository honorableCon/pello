import { STATUS_TYPES } from "../constants";

import { contacts } from "./contacts";
import { userChannels } from "./channels";
export interface UserTypes {
  id: string | number;
  firstName: string;
  lastName: string;
  profileImage?: any;
  status?: STATUS_TYPES;
  meta?: {
    unRead?: number;
    status?: STATUS_TYPES;
  };
}
let favourites: Array<UserTypes> = [
  {
    ...contacts[4],
    meta: {
      unRead: 3,
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    ...contacts[5],
    meta: {
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    ...contacts[6],
  },
];

let directMessages: Array<UserTypes> = [
  {
    ...contacts[16],
  },
  {
    ...contacts[17],
  },
  {
    ...contacts[8],
    meta: {
      unRead: 5,
    },
  },
];

const onChangeDirectMessages = (newData: Array<UserTypes>) => {
  directMessages = newData;
};
export interface ChannelTypes {
  id: number | string;
  name: string;
  meta?: {
    unRead: number;
  };
}
let channels: Array<ChannelTypes> = [
  {
    ...userChannels[0],
    meta: {
      unRead: 12,
    },
  },
  {
    ...userChannels[1],
  },
];

const onChangeChannels = (newData: Array<ChannelTypes>) => {
  channels = newData;
};

export interface PinTypes {
  id: number;
  title: string;
  desc: string;
  icon: string;
}
const pinnedTabs: Array<PinTypes> = [
  {
    id: 1,
    title: "design-phase-1-approved.pdf",
    desc: "12.5 MB",
    icon: "bx bx-file",
  },
  {
    id: 2,
    title: "Bg Pattern",
    desc: "https://bgpattern.com/",
    icon: "bx bx-pin",
  },
  {
    id: 3,
    title: "Image-001.jpg",
    desc: "4.2 MB",
    icon: "bx bx-image",
  },
  {
    id: 4,
    title: "Images",
    desc: "https://images123.com/",
    icon: "bx bx-file",
  },
  {
    id: 5,
    title: "Bg Gradient",
    desc: "https://bggradient.com/",
    icon: "bx bx-pin",
  },
  {
    id: 6,
    title: "Image-012.jpg",
    desc: "3.1 MB",
    icon: "bx bx-image",
  },
  {
    id: 7,
    title: "analytics dashboard.zip",
    desc: "6.7 MB",
    icon: "bx bx-image",
  },
  {
    id: 8,
    title: "Bg Gradient",
    desc: "https://bggradient.com/",
    icon: "bx bx-file",
  },
  {
    id: 9,
    title: "Image-012.jpg",
    desc: "3.1 MB",
    icon: "bx bx-pin",
  },
  {
    id: 10,
    title: "analytics dashboard.zip",
    desc: "6.7 MB",
    icon: "bx bx-pin",
  },
];

const archiveContacts = (contacts || []).filter((cn: any) => cn.isArchived);

let archiveChats: Array<any> = [
  ...archiveContacts,
  {
    ...userChannels[1],
    isChannel: true,
  },
];
const onChangeFavourite = (newData: Array<UserTypes>) => {
  favourites = newData;
};
const onChangeArchives = (newData: Array<any>) => {
  archiveChats = newData;
};

export {
  favourites,
  directMessages,
  channels,
  onChangeDirectMessages,
  onChangeChannels,
  onChangeFavourite,
  pinnedTabs,
  archiveChats,
  onChangeArchives,
};
