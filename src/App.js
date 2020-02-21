import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register.page';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndRegister />
              )
              }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

/*
  mapDispatchToProps is a function which gets the dispatch property and returns an object.
  It will return setCurrentUser but it goes to a function that gets the user object and then calls dispatch.
  Dispatch is a way for redux to know that whatever object is passed in is going to be an action object that is going to be passed to every reducer.
  We call the action (setCurrentUser) and we pass in the user object so that it will be used as the payload
*/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/*
  We connect our App component to the outcome of the intial connect call using mapDispatchToProps.
  We pass in null as the first argument becuase we don't need state as props from the reducer.
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
