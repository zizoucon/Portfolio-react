import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Resume from './pages/Resume'
function App() {
  return (
    <div className="App" >
       <Router>
         <Switch>
           <Route path="/home" component ={Home}></Route>
           <Route path="/contact" component ={Contact}></Route>
           <Route path="/project" component ={Project}></Route>
           <Route path="/resume" component ={Resume}></Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
