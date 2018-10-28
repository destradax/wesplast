import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.scss';
import Clients from './clients';
import Home from './home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/clients" component={Clients} />
        </div>
      </Router>
    );
  }
}

export default App;
