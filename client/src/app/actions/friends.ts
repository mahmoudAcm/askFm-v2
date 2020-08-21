import store from '../store';

export const searchFriendByKeyword = (list: any[]) => {
    store.dispatch({
        type: 'searchFriendByKeyword',
        friends: list
    });
}

export const getAllFriends = () => {
    //get data using fetch
    const friends: any = [] ;
    store.dispatch({
        type: 'getAllFriends',
        friends
    });
}