import {FormEvent} from "react";
import store from '../../../app/store';

export const getUserId = () => {
    return store.getState().Profile.userData._id;
}

export const getUserTagName = () => {
    return store.getState().Profile.userData.userTagName;
}

export const setUserTagName = () => {
    let user = store.getState().Profile.userData.userTagName;
    if(window.location.href.endsWith(user)){
        user = "Yourself"
    }
    return user;
}

export const handlePostLengthLabel = (setLength: Function, maxLength: any) => {
    return (e: FormEvent<HTMLTextAreaElement>) => {
        const length = e.currentTarget.value.length;
        setLength(-length + maxLength);
    }
}