const Inbox = (state: any = {}, action: any) => {
    switch (action.type){
        case "inbox/askPosts": return {
            ...state,
            askPosts: action.askPosts
        }
        default:
           return state;
    }
}

export default Inbox;