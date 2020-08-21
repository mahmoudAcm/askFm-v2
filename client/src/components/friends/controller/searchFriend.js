import store from '../../../app/store.ts';
import { searchFriendByKeyword } from '../../../app/actions/friends';

const searchFriend = (e) => {
    const { mainFriendList } = store.getState().friends ;
    let searchKey = e.target.value ;

    if(!searchKey) {
        searchFriendByKeyword(mainFriendList);
        return;
    }

    let searchWords = searchKey.split(/\s+/gm);
    let searchLine = "" ;
    for(let word of searchWords) searchLine += word; 
    searchWords = searchLine ;
    
    try{
        const newList = mainFriendList.filter(({ username }) => {
            let usernameWords = username.split(/\s+/gm);
            let usernameLine = "" ;
            for(let word of usernameWords) usernameLine += word; 
            usernameWords = usernameLine ;
            
            return usernameWords.includes(searchWords);
        });
        
        searchFriendByKeyword(newList);
    } catch(e) {
        console.log(e);
    } finally {
        // console.log(store.getState(), mainFriendList);
    }
}

export default searchFriend;