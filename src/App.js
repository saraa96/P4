import React, { Component } from 'react'
import Nav from './homePage/componts/nav'
import {
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import Up from '../src/addPost/UploadForm'
import HomePage from './homePage/componts/homepage'
import addProject from './addPost/addPost'
import FreelancerProfile from './freelancer/FHome'
import Checkout from './checkout/Checkout'

import axios from 'axios'
import Qpage from './addq/qPage'
import Chat from './chat/Chat/Chat'
import Register from './components/auth/Signup'
import Login from './components/auth/Login'
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


export default class App extends Component {
  render() {
    
    return (
      <div>
            <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Nav/>
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
            <Route exact path="/post" component={Qpage} />
          <Switch>
    <PrivateRoute exact path='/addProject' component={addProject} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
      </Provider>
   {/* <Nav/> */}

   <BrowserRouter>
    <Switch>
<Route exact path='/' component={HomePage} />
<Route exact path='/profile' component ={FreelancerProfile} />
<Route exact path = '/checkout' component ={Checkout} />
{/* <Route exact path = '/post' component ={Qpage} /> */}
<Route exact path = '/chat' component ={Chat} />
    </Switch>
    </BrowserRouter>
    
      </div>
    )
  }
}



