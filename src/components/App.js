import React from 'react';
import logo from '../public/logo.svg';
import '../styles/App.css';
import TileSet from './TileSet/TileSet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TileSet />
      </header>
    </div>
  );
}

export default App;
