import { combineReducers } from "redux";

import ForgetPassword from "./auth/forgetpwd/reducer";
import Login from "./auth/login/reducer";
import Register from "./auth/register/reducer";
import Layout from "./layout/reducer";
import Profile from "./profile/reducer";
import Contacts from "./contacts/reducer";
import Calls from "./calls/reducer";
import Bookmarks from "./bookmarks/reducer";
import Settings from "./settings/reducer";
import Chats from "./chats/reducer";

export default combineReducers({
  ForgetPassword,
  Login,
  Register,
  Layout,
  Profile,
  Contacts,
  Calls,
  Bookmarks,
  Settings,
  Chats,
});
