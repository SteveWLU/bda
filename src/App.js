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
          <Route path='/about' component={About}/>
          <Route path='/collaborators' component={Collaborators}/>
          <Route path='/library' component={Library}/>
          <Route path='/merchants' component={Merchants}/>
          <Route path='/guerrino' component={Guerrino}/>
          <Route path='/*' component={error404}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
