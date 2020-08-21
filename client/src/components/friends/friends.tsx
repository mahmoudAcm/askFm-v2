import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './assets/css/friends.css';
import searchFriend from './controller/searchFriend';

const FriendItem = ({ profileImage, username, userTag }: any) => {
    return (
        <ul className='nav friend-item'>
            <li className='nav-item'>
                <img src={profileImage} alt='usernameImage'/>
            </li>
            <li className='nav-item friend-info'>
                <div className='username'>{username}</div>
                <div className='usertag'>@{userTag}</div>
            </li>
            <li className='nav-item'>
                <div className='get-profile-btn bg-primary'>
                    <Link to={`/${userTag}/ask`}><input type='button' className='rounded float-right cursor-pointer' value='Ask >'/></Link>
                </div> 
           </li>
        </ul>
    );
}

const FriendList = ({ friendList }: any) => {
    if(!friendList) return <></>;
    return friendList.map(({ profileImage, username, userTag }: any) => {
        return (
            <FriendItem 
                key={userTag}
                profileImage={profileImage} 
                username={username} 
                userTag={userTag} 
            />
        );
   })
};

const FriendsBody = (props: any) => {
    return (
       <div className='container friends'>
           <div className='col-7 card friends-list'>
               <div className='card-body'>
                <div className="input-group flex-nowrap my-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Search</span>
                    </div>
                    <input spellCheck="false" type="text" onChange={searchFriend} className="form-control" placeholder="people by keywords" aria-label="Username" aria-describedby="addon-wrapping" />
                </div> 
               <div className='card-title'>Your Friends</div>
                    <FriendList {...props}/>
               </div> 
           </div>
           <div className='col'></div>
       </div> 
    );
}

const mapStateToProps = (state: any) => {
    return {
        friendList: state.friends.friends
    }
}

export const Friends = connect(mapStateToProps)(FriendsBody);
