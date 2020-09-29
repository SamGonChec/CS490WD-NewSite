import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Doctors from './components/pages/Doctors';
import Covid from './components/pages/Covid';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/doctors' component={Doctors} />
          <Route path='/about' component={About} />
          <Route path='/covid' component={Covid} />
        </Switch>
      </Router>
    </>
  );
}

export default App;