import React from 'react';
import logo_toms_3 from '../Header/logo_toms_3.png';
import {
    BrowserRouter as Router,
    Switch, Route, Link, useHistory, useLocation
} from "react-router-dom";

import Initloginpage from '../Initloginpage/Initloginpage';
import NewRequests from '../NewRequests/NewRequests';
import History from '../History/History';
import './Navigationmenu.css';


function Navigationmenu(props) {
    return (
        <Router>
            <div>
                <nav className='navbar navbar-default'>
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand divlog" href="#">TOMS</a>
                        </div>
                        <ul className=''>
                            <li>
                                <Link to="/new-requests">New Request</Link>
                            </li>
                            <li>
                                <Link to="/History">History</Link>
                            </li>
                            <li>
                                <Link to="/Getreports">Get Reports</Link>
                            </li>
                            <li>
                                <Link to="/productos">History</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/new-requests">
                        <NewRequests />
                    </Route>
                    <Route path="/History">
                        <History />
                    </Route>
                    <Route path="/Getreports">
                        < Getreports />
                    </Route>
                    <Route path="*">
                        <PaginaNoEncontrada />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
}





function Getreports() {
    return <div><h2 className='h22'>This page is under construction</h2><p>Thank you for your comprenhension!</p></div>;
}
function PaginaNoEncontrada() {
    let direccion = useLocation();
    return <div><h2 className='h22'>This page doesn't exist or is broken</h2><p><code>{direccion.pathname}</code></p></div>;
}

export default Navigationmenu;