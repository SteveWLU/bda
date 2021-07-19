import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import error404 from './error404';
import HomePage from './HomePage';
import Navigation from './components/Navigation';
// import Guerrino from './pages/guerrino'

function App () {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="*" component={error404} />
            {/* <Route path="/guerrino" component={Guerrino} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;