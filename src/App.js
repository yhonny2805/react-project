import React from 'react'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import InitialFields from './Component/InitialFields/InitialFields';
import logo_toms_3 from './images/logo_toms_3.png';
import Events from './Component/Events/Events';
import './App.css';

function App() {
  return (
    <div>
      <div className='img1'>
        <img src={logo_toms_3} alt='logo' />
      </div>
      <div>
        <Header />
        <div>
          <InitialFields />
        </div>
        <div>
          <Events />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
