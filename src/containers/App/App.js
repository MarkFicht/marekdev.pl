import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

import Nav from '../Nav';
import Home from '../Home';
import Footer from '../Footer';

import AboutMe from '../AboutMe';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />

          <div className="container">
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/o-mnie' component={ AboutMe } />
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
