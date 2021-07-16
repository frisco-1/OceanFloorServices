import React from 'react';
import NavMerge from './Navbar/NavMerge';

import HomePage from './HomePage';
import Footer from './Footer';

import AboutPage from './AboutPage';
import Contact from './Contact';
import Services from './Services';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <>
      <Router>
        <NavMerge />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/aboutus' component={AboutPage} />
          <Route exact path='/services' component={Services}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>

        <Footer/>
      </Router>
    </>
  )
}

export default Main
