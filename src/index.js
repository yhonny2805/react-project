import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Header from "./Component/Header/Header";
//import Footer from "./Component/Footer/Footer";

import Greetings from './Component/Greetings/Greetings';
//import Loginpage from './Component/Loginpage/Loginpage';
//import Initialfields from './Component/Initialfields/Initialfields';
//import UseridList from './Component/UseridList/UseridList';
//import Navigationmenu from './Component/Navigationmenu/Navigationmenu';
//import Events from './Component/Events/Events';
//import Initloginpage from './Component/Initloginpage/Initloginpage';
//import EmployeeList from './Component/EmployeeList/EmployeeList';
//import History from './Component/History/History';
//import NewRequest from './Component/NewRequests/NewRequests';
//import HistoryH from './Component/HistoryH/HistoryH';
import LoginControl from './Component/LoginControl/LoginControl';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

///////////////////////////////////////////////////////////////////////
//App
//ReactDOM.render(<App />, document.getElementById('root'));

// ** Header **
//ReactDOM.render(<Header />, document.getElementById('root'));

// Try changing to isLoggedIn={true}:
ReactDOM.render(<Greetings isLoggedIn={false} />, document.getElementById('root'));

// Login Control:
ReactDOM.render(<LoginControl />, document.getElementById('root'));

//** Navigation Menu **
//ReactDOM.render(<Navigationmenu />, document.getElementById('root'));

//** Initialfields **
//RectDOM.render(<Initialfields />, document.getElementById('root'));

//** Loginpage **
//ReactDOM.render(<Loginpage />, document.getElementById('root'));

// ** Lista **
//ReactDOM.render(<UseridList />, document.getElementById('root'));

//  ** Form/Initloginpage (Autenticacion)**
//ReactDOM.render(<Initloginpage />, document.getElementById('root'));

//  ** EmployeeList **
//ReactDOM.render(<EmployeeList />, document.getElementById('root')); 

//  ** History **
//ReactDOM.render(<History />, document.getElementById('root'));

//  ** New Request **
//ReactDOM.render(<NewRequest />, document.getElementById('root'));

//  ** HistoryH **
//ReactDOM.render(<HistoryH />, document.getElementById('root'));

//** Footer **
//ReactDOM.render(<Footer />, document.getElementById('root'));


