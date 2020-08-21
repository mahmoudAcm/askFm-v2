import { combineReducers } from '@reduxjs/toolkit';
import FriendReducer from './friends';
import Login from './login';
import Profile from "./profile";

export default combineReducers({
    Profile,
    Login,
    friends: FriendReducer
});