import React from 'react'
import Header from '../src/Header/Header';
import Footer from '../src/Footer/Footer';
import InitialFields from '../src/InitialFields/InitialFields';
import logo_2_toms from '../src/images/logo_2_toms.png';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <img src={logo_2_toms} alt='logo' />
      </div>
      <div>
        <Header />
        <InitialFields />
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, re
          maining essentially unchanged.</p>
        </div>
        <div></div>
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
