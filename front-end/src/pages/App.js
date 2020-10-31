import React from 'react';
import '../styles/App.css';
import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/about' exact component={About} />
          <Route path='/services' exact component={Services} />
          <Route path='/contact' exact component={Contact} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
