import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import  Friends from './components/Friends'
import Login from './components/Login'

function App() {
  return (
    <Router>
    <div className="App">
  

      <Link to="/login"> Login</Link>
      <Link to="/protected"> Protected</Link>

      <Switch>
      <PrivateRoute path="/protected" component={Friends} /> 
      <Route path="/login" component={Login} />
      <Route component={Login} />
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
