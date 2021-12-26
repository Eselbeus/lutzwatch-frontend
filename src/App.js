import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Music from './components/Music'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/music' component={Music} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
