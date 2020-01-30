import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Sun from './paginas/Sun'
import Water from './paginas/Water'
import Pets from './paginas/Pets'
import Plants from './paginas/Plants'
import Contact from './paginas/Contact'
import PlantBuy from './paginas/PlantBuy'
import Form from './componentes/Form'


import './App.css';

function App() {
  return (
      <div>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sun' component={Sun} />
        <Route path='/water' component={Water} />
        <Route path='/pets' component={Pets} />
        <Route path='/plants' component={Plants} />
        <Route path='/contact' component={Contact} />    
        <Route path='/plantbuy' component={PlantBuy} />  
        <Route path='/form' component={Form} />  

    </Switch>
      </div>
  );
}

export default App;
