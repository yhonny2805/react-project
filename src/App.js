import React from 'react'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import InitialFields from './Component/InitialFields/InitialFields';

//import Events from './Component/Events/Events';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <InitialFields />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
