import Modal from "react-modal";
import React from "react";
import { hideLoginPopUp } from "./controller/login";
import { LoginModalProps } from "./types/login";

const LoginModal = ({ logInPopUp, LoginFormApp }: LoginModalProps) => {
    return <Modal
        isOpen={logInPopUp}
        ariaHideApp={false}
    >
        <button onClick={ hideLoginPopUp } className={'btn btn-danger close-loginPopUp'}>X</button>
        <div className={'clearfix'}> </div>
        <LoginFormApp />
    </Modal>
}

export default LoginModal;