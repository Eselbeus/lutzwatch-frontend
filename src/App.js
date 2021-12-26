import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Articles from './components/Articles'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
