import store from '../store';

export const register = (data: any) => {
    store.dispatch({
        type: "profile/register",
        userData: data
    });
}