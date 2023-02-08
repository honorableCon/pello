import { contacts, ContactTypes } from "./contacts";
import { myData } from "./myProfile";
import img1 from "../assets/images/small/img-1.jpg";
import img2 from "../assets/images/small/img-2.jpg";

export interface AttachmentTypes {
  id: number;
  name: string;
  downloadLink: string;
  desc: string;
}

export interface ImageTypes {
  id: number;
  downloadLink: string;
}
export interface MessagesTypes {
  mId: number;
  text?: string;
  time: string;
  meta: {
    receiver: string | number;
    sender: string | number;
    userData?: ContactTypes;
    sent: boolean;
    received: boolean;
    read: boolean;
    isForwarded?: boolean;
  };
  attachments?: AttachmentTypes[];
  image?: ImageTypes[];
  replyOf?: MessagesTypes;
}
export interface ConversationTypes {
  conversationId: string | number;
  userId: string;
  isGroupConversation?: boolean;
  typingUser?: string | number;
  messages: MessagesTypes[];
}

export const myId = myData.uid;
let conversations: ConversationTypes[] = [
  {
    conversationId: 1,
    userId: "614ecab4ac946a9bdafa4e3b",
    typingUser: "614ecab4ac946a9bdafa4e3b",
    messages: [
      {
        mId: 1,
        text: "Good morning 😊",
        time: new Date().toISOString(),
        meta: {
          receiver: myId,
          sender: "614ecab4ac946a9bdafa4e3b",
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 2,
        text: "Good morning, How are you? What about our next meeting?",
        time: new Date().toISOString(),
        meta: {
          receiver: "614ecab4ac946a9bdafa4e3b",
          sender: myId,
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 3,
        text: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM",
        time: new Date().toISOString(),
        meta: {
          receiver: myId,
          sender: "614ecab4ac946a9bdafa4e3b",
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 4,
        text: "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁",
        time: new Date().toISOString(),
        meta: {
          receiver: myId,
          sender: "614ecab4ac946a9bdafa4e3b",
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 5,
        text: "Wow that's great",
        time: new Date().toISOString(),
        meta: {
          receiver: "614ecab4ac946a9bdafa4e3b",
          sender: myId,
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 6,
        time: new Date().toISOString(),
        meta: {
          receiver: myId,
          sender: "614ecab4ac946a9bdafa4e3b",
          sent: true,
          received: true,
          read: true,
        },
        image: [
          {
            id: 1,
            downloadLink: img1,
          },
          {
            id: 2,
            downloadLink: img2,
          },
        ],
      },
      {
        mId: 7,
        time: new Date().toISOString(),
        meta: {
          receiver: "614ecab4ac946a9bdafa4e3b",
          sender: myId,
          sent: true,
          received: true,
          read: true,
        },
        attachments: [
          {
            id: 1,
            name: "design-phase-1-approved.pdf",
            downloadLink: "",
            desc: "12.5 MB",
          },
        ],
      },
    ],
  },
  {
    conversationId: 2,
    userId: "61665bcb9a456823e282afa7",
    typingUser: contacts[0].id,
    isGroupConversation: true,
    messages: [
      {
        mId: 1,
        text: "Good morning Everyone",
        time: new Date().toISOString(),
        meta: {
          receiver: myId,
          sender: contacts[0].id,
          userData: contacts[0],
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 2,
        text: "Good morning, How are you? What about our next meeting?",
        time: new Date().toISOString(),
        meta: {
          receiver: contacts[0].id,
          sender: myId,
          userData: contacts[0],
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 3,
        text: "Yeah everything is fine, Our next meeting tomorrow at 10.00 am AM",
        time: new Date().toISOString(),
        meta: {
          receiver: myId,
          sender: contacts[1].id,
          userData: contacts[1],
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 4,
        text: "Wow that's great",
        time: new Date().toISOString(),
        meta: {
          receiver: myId,
          sender: contacts[2].id,
          userData: contacts[2],
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 5,
        text: "@Jean Berwick, Please Assign AB-123 to me",
        time: new Date().toISOString(),
        meta: {
          receiver: contacts[0].id,
          sender: myId,
          userData: contacts[0],
          sent: true,
          received: true,
          read: true,
        },
      },
      {
        mId: 6,
        text: "Okay, Sure",
        time: new Date().toISOString(),
        meta: {
          receiver: myId,
          sender: contacts[3].id,
          userData: contacts[3],
          sent: true,
          received: true,
          read: true,
        },
      },
    ],
  },
];

const onChangeConversations = (newData: ConversationTypes[]) => {
  conversations = newData;
};

// const conversationExample = {
//   conversationId: 1,
//   userId: "614ecab4ac946a9bdafa4e3b",
//   messages: [
//     {
//       mId: 1,
//       text: "",
//       time: "",
//       meta: {
//         receiver: directMessages[0].id,
//         sender: directMessages[1].id,
//         sent: true,
//         received: true,
//         read: true,
//       },
//       attachments: [
//         {
//           id: 1,
//           name: "",
//           downloadLink: "",
//           desc: "",
//         },
//       ],
//       image: [
//         {
//           id: 1,
//           downloadLink: "",
//         },
//       ],
//     },
//   ],
// };
export { conversations, onChangeConversations };
