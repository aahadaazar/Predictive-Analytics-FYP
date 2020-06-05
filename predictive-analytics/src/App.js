import React from "react";
import logo from './giphy.gif';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/containers/home/home';


function mainScreen() {
  return (
    <Fade>
      <div className="App">
        <header className="App-header">
          <div className='project-title'>
            <h2>
              {'Predictive Analytics on Small Businesses and Large Corporations'}
            </h2>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/home">
            <Button
              style={{
                backgroundColor: '#61DAFB',
                fontSize: 15,
                fontWeight: 'bold',
              }}
            >
              Click here
         </Button>
          </Link>
        </header>
      </div>
    </Fade>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Switch>
          <Route
            component={Home}
            path={'/home'}
            key='home' />
          <Route
            component={mainScreen}
            path={'/'}
            key='mainScreen' />
        </Switch>
      </nav>
    </Router>
  );
}
