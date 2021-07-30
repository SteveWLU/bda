import './Assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stemma from './Assets/Images/stemma.png'
import Sidebar from './Components/sidebar'
import { BrowserRouter as Router } from 'react-router-dom'

// import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Stemma} className="App-logo" alt="logo" />
        
          <h1> The Benci Digital Archive
          </h1> <code>src/App.js</code> and save to reload.
          <h2> Il Guerrin Meschino</h2>
      <p> </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
