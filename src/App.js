import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

import LoginView from './LoginView';
import OpcionesView from './OpcionesView';

function App() {
  return <Router>
    <Route path="/opciones" exact children={OpcionesView} />
    <Route path="/" exact children={LoginView} />
  </Router>
}

export default App;
