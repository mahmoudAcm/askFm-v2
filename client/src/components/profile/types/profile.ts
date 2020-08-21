import {ProfileBackground} from "../profileBackground";

export interface ProfileHeaderState {
    userImage: string,
    userTagName: string,
    fullName: string
}

export interface ProfileBackgroundState {
    backgroundImage: string
}

export interface ProfileBodyState extends ProfileHeaderState, ProfileBackgroundState{

}