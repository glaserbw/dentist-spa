import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    const ourServices =['Cleaning', 'Whitening', 'Grills', 'Bad Puns', 'Braces']
    return (
      <div className="App">
        <Router>
           <div>
            <header className="App-header">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link> </li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
              <img alt="teeth" className="App-logo"/>
            </header>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/services" component={
                () => (<Services ourServices={ourServices} /> )
              } />
              <Route path="/contact" component={
                () => (<Contact name="Toothy McTootherson" phone="555-555-5555" /> )
              } />

            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
