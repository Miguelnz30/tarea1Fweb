import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hola from './Hola'
import Hook from './Hook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <Hola/>
          <Hook/>
        </div>
        <br></br>
        <p>
        Integrante: Miguel Angel Canales Vado y Oldemar Cortez Rodriguez
        </p>
      </header>
      <footer>
      
      </footer>
    </div>
  );
}

export default App;

