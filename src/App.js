import React from 'react';
import {Switch, Route} from 'react-router-dom'; //enables us to use different react-router methods
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-sign-out-page/sign-in-sign-out-page.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor() {
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user}); //allows us to update the current stae of user signed in or signed out

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={shopPage} />
          <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
  
    ); // Here, switch allows us to check for the first route conditions to be checked only without executing the next line
    // Exact is a boolean statement to give conditions for when to execute that particular route

  }
  
}

export default App;
