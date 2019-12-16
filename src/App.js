import React, { Component } from 'react'
import Nav from './homePage/componts/nav'
import {
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom";
import Up from '../src/addPost/UploadForm'
import HomePage from './homePage/componts/homepage'
import addProject from './addPost/addPost'
import FreelancerProfile from './freelancer/FHome'
import Checkout from './checkout/Checkout'
import Login from "./containers/Login";
// import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
export default class App extends Component {
  render() {
    return (
      <div>
   <Nav/>

   <BrowserRouter>
    <Switch>
<Route exact path='/' component={HomePage} />
    <Route exact path='/addProject' component={addProject} />
<Route exact path='/profile' component ={FreelancerProfile} />
<Route exact path = '/checkout' component ={Checkout} />
    </Switch>
    </BrowserRouter>
      </div>
    )
  }
}
