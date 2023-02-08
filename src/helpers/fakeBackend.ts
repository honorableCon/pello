import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as url from "../api/urls";

// dummy data
import {
  // profile
  profileDetails,
  myData,

  //contacts
  contacts,
  onChangeContacts,

  // calls
  calls,

  // channels
  userChannels,
  onChangeUserChannels,

  // bookmarks
  bookmarks,
  onChangeBookmark,

  // chats
  favourites,
  onChangeFavourite,
  directMessages,
  channels,
  onChangeDirectMessages,
  onChangeChannels,
  conversations,
  onChangeConversations,

  // archive
  archiveChats,
  onChangeArchives,
} from "../data/index";
import { settings, onChangeSettings } from "../data/settings";

const accessToken =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImp0aSI6ImQ2MTEwYzAxLWMwYjUtNDUzNy1iNDZhLTI0NTk5Mjc2YjY1NiIsImlhdCI6MTU5MjU2MDk2MCwiZXhwIjoxNTkyNTY0NjE5fQ.QgFSQtFaK_Ktauadttq1Is7f9w0SUtKcL8xCmkAvGLw";

let users = [myData];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

  mock.onPost(url.POST_FAKE_REGISTER).reply(config => {
    const user = JSON.parse(config["data"]);
    users.push(user);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-fake-login").reply(config => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          setTimeout(() => {
            resolve([200, validUser[0]]);
          }, 1000);
        } else {
          reject([
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onPost("/fake-forget-pwd").reply(config => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."]);
      });
    });
  });

  mock.onPost("/post-jwt-register").reply(config => {
    const user = JSON.parse(config["data"]);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-jwt-login").reply(config => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onPost("/post-jwt-profile").reply(config => {
    const user = JSON.parse(config["data"]);

    const one = config.headers;

    let finalToken = one.Authorization;

    const validUser = users.filter(usr => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser["length"] === 1) {
            let objIndex;

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex(obj => obj.uid === user.idx);

            //Update object's name property.
            users[objIndex].username = user.username;

            // Assign a value to locastorage
            localStorage.removeItem("authUser");
            localStorage.setItem("authUser", JSON.stringify(users[objIndex]));

            resolve([200, "Profile Updated Successfully"]);
          } else {
            reject([400, "Something wrong for edit profile"]);
          }
        } else {
          reject([400, "Invalid Token !!"]);
        }
      });
    });
  });

  mock.onPost("/post-fake-profile").reply(config => {
    const user = JSON.parse(config["data"]);

    const validUser = users.filter(usr => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          let objIndex;

          //Find index of specific object using findIndex method.
          objIndex = users.findIndex(obj => obj.uid === user.idx);

          //Update object's name property.
          users[objIndex].username = user.username;

          // Assign a value to locastorage
          localStorage.removeItem("authUser");
          localStorage.setItem("authUser", JSON.stringify(users[objIndex]));

          resolve([200, "Profile Updated Successfully"]);
        } else {
          reject([400, "Something wrong for edit profile"]);
        }
      });
    });
  });

  mock.onPost("/jwt-forget-pwd").reply(config => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."]);
      });
    });
  });

  mock.onPut(url.USER_CHANGE_PASSWORD).reply(config => {
    return new Promise((resolve, reject) => {
      const user = JSON.parse(config["data"]);
      users[0].password = user.password;
      if (user) {
        resolve([200, users[0]]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  /*
  profile
  */
  mock.onGet(url.GET_PROFILE_DETAILS).reply(config => {
    return new Promise((resolve, reject) => {
      if (profileDetails) {
        resolve([200, profileDetails]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  /*
  contacts
  */
  mock.onGet(url.GET_CONTACTS).reply(config => {
    return new Promise((resolve, reject) => {
      if (contacts) {
        resolve([200, contacts]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  mock.onPost(url.INVITE_CONTACT).reply(config => {
    // const user = JSON.parse(config["data"]);

    return new Promise((resolve, reject) => {
      resolve([200, "User is Invited"]);
    });
  });

  /*
  calls
  */
  mock.onGet(url.GET_CALLS_LIST).reply(config => {
    return new Promise((resolve, reject) => {
      if (calls) {
        resolve([200, calls]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  /*
  bookmarks
  */
  mock.onGet(url.GET_BOOKMARKS_LIST).reply(config => {
    return new Promise((resolve, reject) => {
      if (bookmarks) {
        resolve([200, bookmarks]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  mock.onDelete(new RegExp(`${url.DELETE_BOOKMARK}/*`)).reply(config => {
    const { params } = config;

    return new Promise((resolve, reject) => {
      if (params.id && bookmarks.length !== 0) {
        const updatedB = bookmarks.filter(
          (b: any) => b.id + "" !== params.id + ""
        );
        onChangeBookmark(updatedB);
        resolve([200, "Bookmark is Deleted!"]);
      } else {
        reject(["Your id is not found"]);
      }
    });
  });

  mock.onPut(new RegExp(`${url.UPDATE_BOOKMARK}/*`)).reply(config => {
    const data = JSON.parse(config["data"]);
    return new Promise((resolve, reject) => {
      if (data.id && bookmarks.length !== 0) {
        const bookmIdx = bookmarks.findIndex(
          (b: any) => b.id + "" === data.id + ""
        );

        if (bookmIdx > -1) {
          let updatedB = [...bookmarks];
          updatedB[bookmIdx] = data;
          onChangeBookmark(updatedB);
        }
        resolve([200, "Bookmark is Updated!"]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  /*
  settings
  */
  mock.onGet(url.GET_USER_SETTINGS).reply(config => {
    return new Promise((resolve, reject) => {
      if (settings) {
        resolve([200, settings]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  /*
  chats
  */
  /*
   settings
   */
  mock.onGet(url.GET_FAVOURITES).reply(config => {
    return new Promise((resolve, reject) => {
      if (favourites) {
        resolve([200, favourites]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  mock.onGet(url.GET_DIRECT_MESSAGES).reply(config => {
    return new Promise((resolve, reject) => {
      if (directMessages) {
        resolve([200, directMessages]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  mock.onGet(url.GET_CHANNELS).reply(config => {
    return new Promise((resolve, reject) => {
      if (channels) {
        resolve([200, channels]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  mock.onPost(url.ADD_CONTACTS).reply(config => {
    const data = JSON.parse(config["data"]);

    return new Promise((resolve, reject) => {
      if (data) {
        let newC: Array<any> = [];
        for (let index = 0; index < (data || []).length; index++) {
          const contactId = data[index];
          const contact = contacts.find((c: any) => c.id + "" === contactId);
          if (contact) {
            newC = [...newC, contact];
          }
        }
        onChangeDirectMessages([...directMessages, ...newC]);
        resolve([200, "Contacts Added!"]);
      } else {
        reject(["Some thing went wrong!"]);
      }
    });
  });

  mock.onPost(url.CREATE_CHANNEL).reply(config => {
    const data = JSON.parse(config["data"]);
    return new Promise((resolve, reject) => {
      if (data) {
        const newC = {
          id:
            channels[channels.length - 1].id + new Date().getTime().toString(),
          name: data.name,
          description: data.description,
          members: data.members,
        };
        onChangeChannels([...channels, newC]);
        resolve([200, "Channel Created!"]);
      } else {
        reject([400, "Some thing went wrong!"]);
      }
    });
  });

  mock.onGet(new RegExp(`${url.GET_CHAT_USER_DETAILS}/*`)).reply(config => {
    const { params } = config;
    let data: any;
    if (params.id && contacts.length !== 0) {
      const chat = (contacts || []).find(
        (c: any) => c.id + "" === params.id + ""
      );
      if (chat) {
        data = chat;
      }
    }

    return new Promise((resolve, reject) => {
      if (data) {
        setTimeout(() => {
          resolve([200, data]);
        });
      } else {
        reject(["Your id is not found"]);
      }
    });
  });

  mock
    .onGet(new RegExp(`${url.GET_CHAT_USER_CONVERSATIONS}/*`))
    .reply(config => {
      const { params } = config;

      let data: any;
      if (params.id && conversations.length !== 0) {
        const chat = (conversations || []).find(
          (c: any) => c.userId + "" === params.id + ""
        );
        if (chat) {
          data = chat;
        }
      }

      return new Promise((resolve, reject) => {
        if (data) {
          setTimeout(() => {
            resolve([200, data]);
          }, 500);
        } else {
          setTimeout(() => {
            reject(["Your id is not found"]);
          }, 500);
        }
      });
    });

  mock.onPost(url.SEND_MESSAGE).reply(config => {
    const data = JSON.parse(config["data"]);
    if (data && data.meta && data.meta.receiver && data.meta.sender) {
      let modifiedC = [...conversations];
      const conversationIdx = (conversations || []).findIndex(
        (c: any) => c.userId + "" === data.meta.receiver + ""
      );
      if (conversationIdx > -1) {
        const mid =
          conversations[conversationIdx].messages &&
          conversations[conversationIdx].messages.length
            ? conversations[conversationIdx].messages.length + 1
            : 1;
        let newM: any = {
          mId: mid,
          text: data.text && data.text,
          time: data.time,
          meta: {
            ...data.meta,
            sent: true,
            received: false,
            read: false,
          },
        };
        if (data.image && data.image.length) {
          newM["image"] = data.image;
        }
        if (data.attachments && data.attachments.length) {
          newM["attachments"] = data.attachments;
        }
        if (data.replyOf) {
          newM["replyOf"] = data.replyOf;
        }

        conversations[conversationIdx].messages = [
          ...conversations[conversationIdx].messages,
          newM,
        ];
        modifiedC = [...conversations];
      } else {
        // new message first time
        let newM: any = {
          mId: 1,
          text: data.text,
          time: data.time,
          meta: {
            ...data.meta,
            sent: true,
            received: false,
            read: false,
          },
        };
        if (data.image && data.image.length) {
          newM["image"] = data.image;
        }
        if (data.attachments && data.attachments.length) {
          newM["attachments"] = data.attachments;
        }
        if (data.replyOf) {
          newM["replyOf"] = data.replyOf;
        }
        const newC = {
          conversationId: conversations.length + 1,
          userId: data.meta.receiver,
          messages: [
            {
              ...newM,
            },
          ],
        };
        modifiedC = [...conversations, newC];
      }
      onChangeConversations(modifiedC);
    }

    return new Promise((resolve, reject) => {
      if (data && data.meta && data.meta.receiver && data.meta.sender) {
        resolve([200, "Channel Created!"]);
      } else {
        reject([400, "Some thing went wrong!"]);
      }
    });
  });

  mock.onPut(new RegExp(`${url.RECEIVE_MESSAGE}/*`)).reply(config => {
    const data = JSON.parse(config["data"]);
    let updatedUserC: any;
    if (data.params && data.params.id && conversations.length !== 0) {
      let modifiedC = [...conversations];
      const conversationIdx = (modifiedC || []).findIndex(
        (c: any) => c.userId + "" === data.params.id + ""
      );
      if (conversationIdx > -1) {
        if (modifiedC[conversationIdx].messages) {
          modifiedC[conversationIdx].messages = (
            modifiedC[conversationIdx].messages || []
          ).map((c: any) => {
            return {
              ...c,
              meta: { ...c.meta, received: true },
            };
          });
        }
        updatedUserC = modifiedC[conversationIdx];
        onChangeConversations(modifiedC);
      }
    }

    return new Promise((resolve, reject) => {
      if (updatedUserC) {
        resolve([200, updatedUserC]);
      } else {
        setTimeout(() => {
          reject(["Your id is not found"]);
        }, 500);
      }
    });
  });

  mock.onPut(new RegExp(`${url.READ_MESSAGE}/*`)).reply(config => {
    const data = JSON.parse(config["data"]);
    let updatedUserC: any;
    if (data.params && data.params.id && conversations.length !== 0) {
      let modifiedC = [...conversations];
      const conversationIdx = (modifiedC || []).findIndex(
        (c: any) => c.userId + "" === data.params.id + ""
      );
      if (conversationIdx > -1) {
        if (modifiedC[conversationIdx].messages) {
          modifiedC[conversationIdx].messages = (
            modifiedC[conversationIdx].messages || []
          ).map((c: any) => {
            return {
              ...c,
              meta: { ...c.meta, read: true },
            };
          });
        }
        updatedUserC = modifiedC[conversationIdx];
        onChangeConversations(modifiedC);
      }
    }

    return new Promise((resolve, reject) => {
      if (updatedUserC) {
        resolve([200, updatedUserC]);
      } else {
        setTimeout(() => {
          reject(["Your id is not found"]);
        }, 500);
      }
    });
  });

  mock.onGet(new RegExp(`${url.RECEIVE_MESSAGE_FROM_USER}/*`)).reply(config => {
    let updatedUserC: any;
    const { params } = config;
    if (params && params.id && conversations.length !== 0) {
      let modifiedC = [...conversations];
      const conversationIdx = (modifiedC || []).findIndex(
        (c: any) => c.userId + "" === params.id + ""
      );
      if (conversationIdx > -1) {
        if (modifiedC[conversationIdx].messages) {
          const newM = {
            ...modifiedC[conversationIdx].messages[
              modifiedC[conversationIdx].messages.length - 1
            ],
          };

          modifiedC[conversationIdx].messages.push({
            ...newM,
            mId: newM.mId + new Date().getTime(),
            meta: {
              ...newM.meta,
              receiver: newM.meta.sender,
              sender: newM.meta.receiver,
            },
          });
        }
        updatedUserC = modifiedC[conversationIdx];
        onChangeConversations(modifiedC);
      }
    }

    return new Promise((resolve, reject) => {
      if (updatedUserC) {
        resolve([200, updatedUserC]);
      } else {
        setTimeout(() => {
          reject(["Your id is not found"]);
        }, 500);
      }
    });
  });

  mock.onDelete(new RegExp(`${url.DELETE_MESSAGE}/*`)).reply(config => {
    const { params } = config;

    return new Promise((resolve, reject) => {
      if (params.userId && params.messageId) {
        let modifiedC = [...conversations];
        const conversationIdx = (modifiedC || []).findIndex(
          (c: any) => c.userId + "" === params.userId + ""
        );
        if (conversationIdx > -1) {
          modifiedC[conversationIdx].messages = (
            modifiedC[conversationIdx].messages || []
          ).filter((m: any) => m.mId + "" !== params.messageId + "");
        }
        onChangeConversations(modifiedC);
        resolve([200, "Message is Deleted!"]);
      } else {
        reject(["Your id is not found"]);
      }
    });
  });

  mock.onPost(url.FORWARD_MESSAGE).reply(config => {
    const data = JSON.parse(config["data"]);
    let modifiedC = [...conversations];
    if (data && data.contacts) {
      for (let index = 0; index < data.contacts.length; index++) {
        const c = data.contacts[index];
        const conversationIdx = (modifiedC || []).findIndex(
          (con: any) => con.userId + "" === c + ""
        );

        if (conversationIdx > -1) {
          const mid =
            modifiedC[conversationIdx].messages &&
            modifiedC[conversationIdx].messages.length
              ? modifiedC[conversationIdx].messages.length + 1
              : 1;
          let newM: any = {
            mId: mid,
            text: data.message && data.message,
            time: new Date().toISOString(),
            meta: {
              receiver: c,
              sender: users[0].uid,
              sent: true,
              received: false,
              read: false,
              isForwarded: true,
            },
          };
          if (data.image && data.image.length) {
            newM["image"] = data.image;
          }
          if (data.attachments && data.attachments.length) {
            newM["attachments"] = data.attachments;
          }
          if (data.forwardedMessage) {
            newM["replyOf"] = data.forwardedMessage;
          }

          modifiedC[conversationIdx].messages = [
            ...modifiedC[conversationIdx].messages,
            newM,
          ];
          modifiedC = [...modifiedC];
        } else {
          // new message first time
          let newM: any = {
            mId: 1,
            text: data.message && data.message,
            time: new Date().toISOString(),
            meta: {
              receiver: "614ecab4ac946a9bdafa4e3b",
              sender: users[0].uid,
              sent: true,
              received: false,
              read: false,
              isForwarded: true,
            },
          };
          if (data.image && data.image.length) {
            newM["image"] = data.image;
          }
          if (data.attachments && data.attachments.length) {
            newM["attachments"] = data.attachments;
          }
          if (data.forwardedMessage) {
            newM["replyOf"] = data.forwardedMessage;
          }
          const newC = {
            conversationId: modifiedC.length + 1,
            userId: c,
            messages: [
              {
                ...newM,
              },
            ],
          };
          modifiedC = [...modifiedC, newC];
        }
      }
    }

    onChangeConversations(modifiedC);
    return new Promise((resolve, reject) => {
      if (data) {
        resolve([200, "Message is Forwarded!"]);
      } else {
        reject(["Your id is not found"]);
      }
    });
  });

  mock.onDelete(new RegExp(`${url.DELETE_USER_MESSAGES}/*`)).reply(config => {
    const { params } = config;

    return new Promise((resolve, reject) => {
      if (params.userId) {
        let modifiedC = [...conversations];
        modifiedC = (modifiedC || []).filter(
          (c: any) => c.userId + "" !== params.userId + ""
        );
        onChangeConversations(modifiedC);
        resolve([200, "Messages are Deleted!"]);
      } else {
        reject(["Your id is not found"]);
      }
    });
  });

  mock.onGet(new RegExp(`${url.GET_CHANNEL_DETAILS}/*`)).reply(config => {
    const { params } = config;
    let data: any;
    if (params.id && contacts.length !== 0) {
      const chat = (userChannels || []).find(
        (c: any) => c.id + "" === params.id + ""
      );
      if (chat) {
        data = chat;
      }
    }

    return new Promise((resolve, reject) => {
      if (data) {
        setTimeout(() => {
          resolve([200, data]);
        });
      } else {
        reject(["The channel is not found"]);
      }
    });
  });

  mock.onPut(new RegExp(`${url.TOGGLE_FAVOURITE_CONTACT}/*`)).reply(config => {
    const data = JSON.parse(config["data"]);

    let message = "User has been added to your favourite";
    let modifiedC = [...contacts];
    let modifiedF = [...favourites];
    let modifiedD = [...directMessages];
    if (data.params.id && contacts.length !== 0) {
      const contactIdx = (modifiedC || []).findIndex(
        (c: any) => c.id + "" === data.params.id + ""
      );
      if (contactIdx > -1) {
        if (contacts[contactIdx].isFavourite) {
          contacts[contactIdx].isFavourite = false;
          modifiedF = modifiedF.filter((f: any) => f.id !== data.params.id);
          message = "User has been removed to your favourite";
        } else {
          contacts[contactIdx].isFavourite = true;
          modifiedF = [...modifiedF, contacts[contactIdx]];
          modifiedD = modifiedD.filter((c: any) => c.id !== data.params.id);
        }
      }
    }
    onChangeContacts(contacts);
    onChangeFavourite(modifiedF);
    onChangeDirectMessages(modifiedD);

    return new Promise((resolve, reject) => {
      if (data.params.id) {
        setTimeout(() => {
          resolve([200, message]);
        });
      } else {
        reject(["The channel is not found"]);
      }
    });
  });

  mock.onGet(url.GET_ARCHIVE_CONTACT).reply(config => {
    return new Promise((resolve, reject) => {
      if (archiveChats) {
        setTimeout(() => {
          resolve([200, archiveChats]);
        });
      } else {
        reject(["The archive chat is not found"]);
      }
    });
  });

  mock.onPut(new RegExp(`${url.TOGGLE_ARCHIVE_CONTACT}/*`)).reply(config => {
    const data = JSON.parse(config["data"]);

    let message = "User has been added to your archives";
    let modifiedC = [...contacts];
    let modifiedA = [...archiveChats];
    let modifiedD = [...directMessages];
    let modifiedChannels = [...userChannels];
    let modifiedChatChannels = [...channels];
    if (data.params.id && contacts.length !== 0) {
      const contactIdx = (modifiedC || []).findIndex(
        (c: any) => c.id + "" === data.params.id + ""
      );
      const channelIdx = (modifiedChannels || []).findIndex(
        (c: any) => c.id + "" === data.params.id + ""
      );
      if (contactIdx > -1) {
        if (contacts[contactIdx].isArchived) {
          contacts[contactIdx].isArchived = false;
          modifiedA = modifiedA.filter((f: any) => f.id !== data.params.id);
          message = "User has been removed to your archives";
        } else {
          contacts[contactIdx].isArchived = true;
          modifiedA = [...modifiedA, contacts[contactIdx]];
          modifiedD = modifiedD.filter((c: any) => c.id !== data.params.id);
        }
      } else if (channelIdx > -1) {
        if (userChannels[channelIdx].isArchived) {
          userChannels[channelIdx].isArchived = false;
          modifiedA = modifiedA.filter((f: any) => f.id !== data.params.id);
          message = "User has been removed to your archives";
        } else {
          userChannels[channelIdx].isArchived = true;
          modifiedA = [
            ...modifiedA,
            { ...userChannels[channelIdx], isChannel: true },
          ];
          modifiedChannels = modifiedChannels.filter(
            (c: any) => c.id !== data.params.id
          );
          modifiedChatChannels = modifiedChatChannels.filter(
            (c: any) => c.id !== data.params.id
          );
        }
      }
    }
    onChangeContacts(contacts);
    onChangeArchives(modifiedA);
    onChangeDirectMessages(modifiedD);
    onChangeUserChannels(modifiedChannels);
    onChangeChannels(modifiedChatChannels);

    return new Promise((resolve, reject) => {
      if (data.params.id) {
        setTimeout(() => {
          resolve([200, message]);
        });
      } else {
        reject(["Internal Error!"]);
      }
    });
  });

  mock.onPut(new RegExp(`${url.READ_CONVERSATION}/*`)).reply(config => {
    const data = JSON.parse(config["data"]);
    let modifiedD = [...directMessages];
    let modifiedF = [...favourites];
    let modifiedC = [...channels];
    if (data.params && data.params.id && conversations.length !== 0) {
      /*
     for chat conversations
     */

      const contactIdx = (modifiedD || []).findIndex(
        (c: any) => c.id + "" === data.params.id + ""
      );
      const contactFIdx = (modifiedF || []).findIndex(
        (c: any) => c.id + "" === data.params.id + ""
      );
      const contactCIdx = (modifiedC || []).findIndex(
        (c: any) => c.id + "" === data.params.id + ""
      );
      if (contactIdx > -1 && modifiedD[contactIdx]["meta"]) {
        modifiedD[contactIdx].meta!.unRead = 0;
        onChangeDirectMessages(modifiedD);
      }
      if (contactFIdx > -1 && modifiedF[contactFIdx]["meta"]) {
        modifiedF[contactFIdx].meta!.unRead = 0;
        onChangeFavourite(modifiedF);
      }
      if (contactCIdx > -1 && modifiedC[contactCIdx]["meta"]) {
        modifiedC[contactCIdx].meta!.unRead = 0;
        onChangeChannels(modifiedC);
      }
    }

    return new Promise((resolve, reject) => {
      if (modifiedD) {
        resolve([200, "true"]);
      } else {
        setTimeout(() => {
          reject(["Your id is not found"]);
        }, 500);
      }
    });
  });

  mock.onDelete(new RegExp(`${url.DELETE_IMAGE}/*`)).reply(config => {
    const { params } = config;

    return new Promise((resolve, reject) => {
      if (params.userId && params.messageId && params.imageId) {
        let modifiedC = [...conversations];
        const conversationIdx = (modifiedC || []).findIndex(
          (c: any) => c.userId + "" === params.userId + ""
        );
        if (conversationIdx > -1 && modifiedC[conversationIdx].messages) {
          const mIdx = (modifiedC[conversationIdx].messages || []).findIndex(
            (c: any) => c.mId + "" === params.messageId + ""
          );
          if (
            mIdx > -1 &&
            modifiedC[conversationIdx].messages[mIdx] &&
            modifiedC[conversationIdx].messages[mIdx].image
          ) {
            if (modifiedC[conversationIdx].messages[mIdx].image?.length === 1) {
              modifiedC[conversationIdx].messages = (
                modifiedC[conversationIdx].messages || []
              ).filter((m: any) => m.mId + "" !== params.messageId + "");
            } else {
              modifiedC[conversationIdx].messages[mIdx].image = modifiedC[
                conversationIdx
              ].messages[mIdx].image?.filter(
                (m: any) => m.id + "" !== params.imageId + ""
              );
            }
          }
        }
        onChangeConversations(modifiedC);
        resolve([200, "Message is Deleted!"]);
      } else {
        reject(["Your id is not found"]);
      }
    });
  });

  mock.onPut(new RegExp(`${url.UPDATE_ETTINGS}/*`)).reply(config => {
    const data = JSON.parse(config["data"]);
    const { field, value } = data;
    const modifiedS: any = { ...settings };
    modifiedS[field] = value;
    onChangeSettings(modifiedS);

    return new Promise((resolve, reject) => {
      if (modifiedS) {
        setTimeout(() => {
          resolve([200, "Setting Updated!"]);
        });
      } else {
        reject(["Something went wrong!"]);
      }
    });
  });
};

export default fakeBackend;
