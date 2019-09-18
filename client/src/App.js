import React, { Component } from 'react';
import './App.css';
import Heroes from './components/heroes';
import AppNav from './components/AppNav';
import Fuerza60 from './components/Fuerza60';
import Top10Poder from './components/Top10Poder';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Velocidad60 from './components/Velocidad60';
import Top10hum from './components/Top10hum';
import Top10nohumanos from './components/Top10nohumanos';
import Fuerza80 from './components/Fuerza80';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <AppNav/>
          <Route exact path ="/" component={Heroes}/>
          <Route path ="/fuerza60" component={Fuerza60}/>
          <Route path ="/top10poder" component={Top10Poder}/>
          <Route path ="/velocidad60" component={Velocidad60}/>
          <Route path ="/top10intelhum" component={Top10hum}/>
          <Route path ="/top10velonohumanos" component={Top10nohumanos}/>
          <Route path ="/fuerza80mujeralien" component={Fuerza80}/>
          
          
        </div>
      </Router>       
    
    );
  }
}

export default App;
