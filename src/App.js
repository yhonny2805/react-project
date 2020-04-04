import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Footer from './Component/Footer/Footer';
//import Initialfields from './Component/Initialfields/Initialfields';
//import Loginpage from './Component/Loginpage/Loginpage';
import Initloginpage from './Component/Initloginpage/Initloginpage';

//import Events from './Component/Events/Events';
import './App.css';


function App() {
  return (
    <div className='Backgmainpage'>
      <div>
        <Initloginpage name="Yhonnatan" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
