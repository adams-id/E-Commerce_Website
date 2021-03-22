import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; //enables us to use different react-router methods
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-sign-out-page/sign-in-sign-out-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action'; 

class App extends React.Component{
  unsubscribeFromAuth = null;


  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => { //used to integrate firebase and remember the current state of the user
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //user created in the firebase db
        userRef.onSnapshot(snapShot => { //remeber the activities of the current user
         setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={shopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' /> ) : (<SignInAndSignOut />)} />
        </Switch>
      </div>
  
    ); // Here, switch allows us to check for the first route conditions to be checked only without executing the next line
    // Exact is a boolean statement to give conditions for when to execute that particular route

  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
