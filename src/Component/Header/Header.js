import React from 'react';
import './Header.css';
import logo_toms_3 from '../Header/logo_toms_3.png';

function Header(props) {
    return (
        <div className='Header' >
            <img className='mylogo' src={logo_toms_3} alt='logo' />
            <h1>Welcome to the Time Off Management System!</h1>
        </div>
    );
}

export default Header;