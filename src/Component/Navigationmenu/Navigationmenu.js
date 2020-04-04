import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import logo_toms_3 from '../Header/logo_toms_3.png';
import './Navigationmenu.css';


function Navigationmenu(props) {
    return (
        <Navbar className='navcol'>
            <img className='mylogo' src={logo_toms_3} alt='logo' />
            <Nav className="mr-auto">
                <Nav.Link href="#home">Recent Requests</Nav.Link>
                <Nav.Link href="#History">History</Nav.Link>
                <Nav.Link href="#Getreports">Get Reports</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigationmenu;