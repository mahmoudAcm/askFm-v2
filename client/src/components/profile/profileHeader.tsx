import React from 'react';
import { Link } from 'react-router-dom';
import {ProfileHeaderState} from "./types/profile";

export const ProfileHeader = ({userImage, userTagName, fullName}: ProfileHeaderState) => {
    return (    
        <div className='profile-header row'>
        <div className='profile-user col-2'>
            <img src={userImage} alt='userImage' />
            <div className='avatar-mood'>{}</div>
        </div>
        <div className='user-aside col-5'>
            <div className='row'>
                    <h5 className='user-name-id'>@{userTagName}</h5>
            </div>
            <div className='row'>
                    <h3 className='user-name'>{fullName}</h3>
            </div>
            <div className='row profile-desktop'>
                    <div className='col profile-desktop-section-1'>
                        <Link to='/account/leaders'>wallet</Link>
                    </div>
                    <div className='col profile-desktop-section-2'>
                    <span className="dropdown status-menu cursor-pointer">
                    <span className="dropdown-toggle text-light " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className='status mr-1'> </span>online</span>
                    <div className="dropdown-menu">
                        <div className="dropdown-item" onClick={() => {}}>online</div>
                        <div className="dropdown-item" onClick={() => {}}>invisible</div>
                    </div>
                    </span>
                    </div>
                    <div className='col profile-desktop-section-3'>
                        <i className="fa fa-upload cursor-pointer" aria-hidden="true" title='share your profile'> </i>
                        <i className="fa fa-ellipsis-h cursor-pointer" aria-hidden="true" title='More'> </i>
                    </div>
            </div>
        </div>
    </div>
    );
}