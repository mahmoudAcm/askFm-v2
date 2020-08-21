import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './assets/css/footer.css';

const Footer = ({ status, login }: any) => {
    return <></>;
    return (
        <footer className={login? 'footer-login': 'footer'}>
            <div className='container'>
            <ul>
                <li>About askFm</li>
                <li>Safety center</li>
                <li>Do not sell my personal information</li>
                <li>Cookies policy</li>
                <li>terms of use</li>
                <li>privacy policy</li>
                <li>Help</li>
            </ul>
            {login && <div className="dropdown-divider"> </div>}
            <div className='lang-settings'>Language:&ensp;<span className='cursor-pointer' title='change language'>English</span></div>
            <div className='footer-contact'>
                <ul className='nav'>
                    <li className='nav-item'><i className="fa fa-tasks" aria-hidden="true"> </i></li>
                    <li className='nav-item'><i className="fab fa-facebook" aria-hidden="true"> </i></li>
                    <li className='nav-item'><i className="fab fa-twitter" aria-hidden="true"> </i></li>
                    <li className='nav-item'><i className="fab fa-instagram" aria-hidden="true"> </i></li>
                    <li className='nav-item'><i className="fab fa-vk" aria-hidden="true"> </i></li>
                </ul>
            </div>
            {!login && <div className="dropdown-divider"> </div>}
            <span className='copy-right'>AskFM 2020</span>
            </div>
        </footer>
    );
};

const mapStateToProps = (state: any) => {
    return {
        status: state.userProfile.status
    }
}

export default connect(mapStateToProps)(Footer);