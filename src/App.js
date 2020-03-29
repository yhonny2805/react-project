import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Footer from './Component/Footer/Footer';
import Initialfields from './Component/Initialfields/Initialfields';
import Loginpage from './Component/Loginpage/Loginpage';

//import Events from './Component/Events/Events';
import './App.css';

function App() {
  return (
    <div className='Backgmainpage'>
      <div>
        <Loginpage name='Yhonnatan' />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
