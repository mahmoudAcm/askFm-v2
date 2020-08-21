import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './assets/css/profile.css';
import { Stats } from './stats' ;
import { AboutMe } from './aboutMe';
import { ProfileHeader } from './profileHeader';
import { ProfileBackground } from './profileBackground';
import AskPost from './askYourSelf';
import {ProfileBodyState} from "./types/profile";

const ProfileBody = ({fullName, userTagName, userImage, backgroundImage}: ProfileBodyState) => {
    return (
        <>
            <ProfileBackground backgroundImage={backgroundImage}/>
            <div className='profile-body container'>
                <ProfileHeader fullName={fullName} userTagName={userTagName} userImage={userImage}/>
                <div className='row main-content'>
                    <div className='col-7 profile-posts mr-4'>
                        <AskPost />
                    </div>    
                    <div className='col profile-aside'>
                       <div className='row ml-2'>
                           <Stats />
                       </div>
                       <div className='row'>
                           <AboutMe />
                       </div>
                       <div className='row'>
                           {/* <Footer /> */}
                       </div>
                    </div>
                </div>
            </div>
        </ >
    );
};

const mapStateToProps = (state: any) => {
    return {
        ...state.Profile.userData
    }
}

export default connect(mapStateToProps)(ProfileBody);