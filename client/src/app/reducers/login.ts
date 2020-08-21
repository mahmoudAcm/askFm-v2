interface initialState {
    logInPopUp: boolean
}

const Login = (state: initialState = {
    logInPopUp: false
}, action: any) => {
    switch (action.type){
        case "logInPopUp": return {
            logInPopUp: action.popUp
        }
        default:
            return state;
    }
}

export default Login;