import { ProfileReducerAction, ProfileReducerInitialState } from "../types/profile";
const Profile = (state: ProfileReducerInitialState = {} , action: ProfileReducerAction) => {
    switch (action.type){
        case "profile/register": return {
            ...state,
            userData: action.userData
        }
        default:
        return {
            userData: JSON.parse(localStorage.getItem("user")!)
        };
    }
}

export default Profile;