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
          {/* <main className='main_start'> */}
          <Route exact path = '/'  component = {Home} />
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/contact' component = {Contact} />
          <Route exact path = '/info' component = {Info} />
          <Route component = {Error} />
          {/* </main> */}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
