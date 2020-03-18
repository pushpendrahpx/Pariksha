import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import Welcome from './Pages/Welcome/Welcome';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Welcome} />
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
