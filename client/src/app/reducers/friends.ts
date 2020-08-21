// import profileImage from '../../assets/images/logo512.png';

interface InitialState {
    mainFriendList: any[],
    friends: any[]
}

const profileImage: string = '';

const defaultState: Partial<InitialState> = {
    mainFriendList: [{
        profileImage,
        userTag: 'Mahmoud018823',
        username: 'Mahmoud Tarek'
    },{
        profileImage,
        userTag: 'MahmoudTarekMahmoudAhmed018823',
        username: 'samy mohamed'
    }]
}

defaultState.friends = defaultState.mainFriendList;

const FriendReducer = (state = defaultState , action: any) => {
    switch(action.type){
        case "searchFriendByKeyword": return {
            ...state,
            friends: action.friends
        }
        case "": return {
            ...state,
            friends: action.friends
        }
        default: return state;
    }
}

export default FriendReducer ;