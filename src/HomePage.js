import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <h1> Benci Digital Library
          </h1> <code>src/App.js</code> and save to reload.
          <h2>Merchant bibliophiles in fifteenth-century Florence</h2>
      </header>
    </div>
    </Router>);
}

export default App;
