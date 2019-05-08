import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom'

/** This pattern is downloaded from www.subtlepatterns.com */
import bgImg from '../../img/bg.png'

import Nav from '../Nav'
import Home from '../Home'
import Footer from '../Footer'

import AboutMe from '../AboutMe-Page'
import Skills from '../Skills-Page'
import Projects from '../Projects-Page'
import CV from '../CV-Page'
import Contact from '../Contact-Page'
import NotFound from '../NotFound'


class App extends Component {

  render() {

  console.log('Pattern is downloaded from www.subtlepatterns.com');

    return (
      <BrowserRouter>
        <div className="App" style={{ backgroundImage: `url("${bgImg}")` }}>
          <Nav />

          <div className="container">
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/o-mnie' component={ AboutMe } />
              <Route exact path='/skills' component={ Skills } />
              <Route exact path='/projekty' component={ Projects } />
              <Route exact path='/cv' component={ CV } />
              <Route exact path='/kontakt' component={ Contact } />

              <Route component={NotFound} />
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
