import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Sun from './paginas/Sun'
import Water from './paginas/Water'
import Pets from './paginas/Pets'
import Plants from './paginas/Plants'
import Login from './paginas/Login'


import './App.css';

function App() {
  return (
    <Switch>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/sun' component={Sun} />
        <Route path='/water' component={Water} />
        <Route path='/pets' component={Pets} />
        <Route path='/plants' component={Plants} />
        <Route path='/login' component={Login} />
      </div>
    </Switch>
  );
}

export default App;
