import React from 'react';
import { connect } from 'react-redux';
import './assets/css/aboutMe.css';

const About = () => {
    return (
        <div className='AboutMe'>
            <h6 className='text-light'>About Me</h6>    
            <div className='row'><span className='section-name'>Bio: </span></div>
            <div className='row'><span className='section-name'>Location: </span></div>
            <div className='row'><span className='section-name'>Links: </span></div>
            <div className='row'><span className='section-name'>Interests: </span></div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
};

export const AboutMe = connect(mapStateToProps)(About);



