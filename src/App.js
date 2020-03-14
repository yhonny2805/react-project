import React from 'react';
import logo_2_toms from '../src/images/logo_2_toms.png';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <img src={logo_2_toms} alt='logo' />
      </div>
      <div>
        <h1>
          Welcome to the Time Off Management System!
        </h1>
        <h2>
          Are you ready for your Holidays!
        </h2>
      </div>
    </div>
  );
}

export default App;
