import React from 'react';
import {Switch, Route} from 'react-router-dom'; //enables us to use different react-router methods
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import shopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop' component={shopPage} />
      </Switch>
    </div>

  ); // Here, switch allows us to check for the first route conditions to be checked only without executing the next line
  // Exact is a boolean statement to give conditions for when to execute that particular route
}

export default App;
