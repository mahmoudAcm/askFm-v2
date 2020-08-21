import { ComponentType } from "react";

export interface LoginBodyProps {
    logInPopUp: boolean
}

export interface LoginModalProps extends LoginBodyProps{
    LoginFormApp: ComponentType
}
