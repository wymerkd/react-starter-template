import React from 'react';
import './App.css';

// dependencies
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Test from './components/Test';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/test' component={Test}/>
      </Switch>
    </div>
  );
}

export default App;
