import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register.page';
import Header from './components/header/header.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndRegister} />
      </Switch>
    </div>
  );
}

/*
  The route component takes 3 arguments, exact, path and component. Component is set to the component we want to render (HomePage, ShopPage). 
  The path is a string that is equal to the current place its at. '/' on its own represents the very base of the application.
  That means that when the url is at '/' and the component is set to HomePage, it will render the HomePage.
  Exact is a true or false property. It means that the path must be exactly '/' in order for the HomePage to render. 
  Without exact, the HomePage will always render despite anything else being entered into the url after '/'.
*/

/*
  The switch component is wrapped around the route component.
  The moment that a route inside of it finds a match in the path, it does not render anything else but that route. 
*/ 

export default App;
