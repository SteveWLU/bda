import './Assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collaborators from './pages/Collaborators'
import Manuscripts from './pages/Manuscripts'
import Guerrino from './pages/Guerrino'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/' component={About}/>
          <Route path='/' component={Collaborators}/>
          <Route path='/' component={Manuscripts}/>
          <Route path='/' component={Guerrino}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
