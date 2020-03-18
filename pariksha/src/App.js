import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={} />
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
