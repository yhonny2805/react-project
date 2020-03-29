import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Loginpage from './Component/Loginpage/Loginpage';
import Initialfields from './Component/Initialfields/Initialfields';
import UseridList from './Component/UseridList/UseridList';
//import Events from './Component/Events/Events';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

///////////////////////////////////////////////////////////////////////
//App
ReactDOM.render(<App />, document.getElementById('root'));

// ** Header **
//ReactDOM.render(<Header />, document.getElementById('root'));

//** Initialfields **
//ReactDOM.render(<Initialfields />, document.getElementById('root'));

//** Loginpage (Autenticacion) **
//ReactDOM.render(<Loginpage />, document.getElementById('root'));

// ** Lista **
//ReactDOM.render(<UseridList />, document.getElementById('root'));

//** Footer **
//ReactDOM.render(<Footer />, document.getElementById('root'));


