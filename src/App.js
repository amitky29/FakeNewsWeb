import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './shared/pages/Header';
import Footer from './shared/pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Info from './pages/Info';
import Error from './shared/pages/Error';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/about' exact component = {About} />
          <Route path = '/contact' exact component = {Contact} />
          <Route path = '/Info' exact component = {Info} />
          <Route component = {Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
