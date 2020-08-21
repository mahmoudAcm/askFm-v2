import store from '../store';

export const setLogInPopUp = (popUp: boolean) => {
    store.dispatch({
        type: "logInPopUp",
        popUp
    });
}