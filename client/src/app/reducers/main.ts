import { combineReducers } from '@reduxjs/toolkit';
import FriendReducer from './friends';
import Login from './login';
import Profile from "./profile";
import Inbox from './inbox';

export default combineReducers({
    Inbox,
    Profile,
    Login,
    friends: FriendReducer
});