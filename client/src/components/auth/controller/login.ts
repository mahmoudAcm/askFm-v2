import { FormEvent } from "react";
import { setLogInPopUp } from '../../../app/actions/login';

export const login = (e: FormEvent<any>) => {
    setLogInPopUp(true);
}

export const hideLoginPopUp = (e: FormEvent<any>) => {
    setLogInPopUp(false);
}