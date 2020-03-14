import React from 'react';
import logo_2_toms from './logo_2_toms';
import './Toms.css';

function Toms(props) {
    return (
        <div>
            <img src={logo_2_toms}></img>
            <div className='Generic'>
                <h1>Welcome to the Time Off Management System</h1>
            </div>
        </div>
    );
}

export default Toms;