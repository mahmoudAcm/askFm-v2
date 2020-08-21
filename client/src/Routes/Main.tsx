import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/profile/profileBody";
import {Friends} from "../components/friends/friends";
import {Route} from "react-router-dom";
import RegisterFormApp from "../components/auth/register";
import Login from "../components/auth/login";
import React from "react";
import InboxBody from "../components/inbox/inboxBody";

const MainRoute = () => {
    return <>
        <ProtectedRoute exact={true} path='/:userTagName' component={Profile}/>
        <ProtectedRoute path='/account/friends' component={Friends}/>
        <ProtectedRoute path='/:username/ask' component={Friends}/>
        <ProtectedRoute path='/account/inbox' component={InboxBody}/>
        <Route exact={true} path='/auth/register' component={RegisterFormApp}/>
        <Route path='/auth/login' component={Login}/>
        <ProtectedRoute path='*'/>
    </>
}

export default MainRoute;