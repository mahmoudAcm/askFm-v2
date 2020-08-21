import React from 'react';
import {ProfileBackgroundState} from "./types/profile";

export const ProfileBackground = ({ backgroundImage }: ProfileBackgroundState ) => {
    return (
        <div className='profile-background'>
            <img className="" src={backgroundImage} alt='backgroundImage' />
            <div className='gradient'>

            </div>
        </div>
    );
}