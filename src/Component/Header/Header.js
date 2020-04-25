import React from 'react';
import './Header.css';
import logo_toms_3 from '../Header/logo_toms_3.png';

function Header(props) {
    return (
        <div className='header' >
            <img className='mylogo' src={logo_toms_3} alt='logo' />
            <div className='head01'>
                <h1>Welcome to the Time Off Management System!</h1>
            </div>
        </div>
    );
}

export default Header;