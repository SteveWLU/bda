import './Assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collaborators from './pages/Collaborators'
import Library from './pages/Library'
import Merchants from './pages/Merchants'
import Guerrino from './pages/Guerrino'
import error404 from './pages/error404'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/' component={About}/>
          <Route path='/' component={Collaborators}/>
          <Route path='/' component={Library}/>
          <Route path='/' component={Merchants}/>
          <Route path='/' component={Guerrino}/>
          <Route component={error404}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
