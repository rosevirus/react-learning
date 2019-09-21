import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
      함수형 => 기능 1개
      클래스형 => 기능이 여러개
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React~~~~~~
        </a>
      </header>
    </div>
  );
}

export default App;
