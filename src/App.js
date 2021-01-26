import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginForm from "./components/Login";
import SignUp from "./components/SignUp";
import CardContainer from "./components/CardContainer";
import SingleCard from "./components/SingleCard";
// import DefaultContainer from "./components/DefaultContainer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/login' />} />
          <Route path='/login' component={LoginForm} />
          <Route path='/sign-up' component={SignUp} />
          <Route exact path='/todos' component={CardContainer} />
          <Route exact path='/todos/:id' component={SingleCard} />
        </Switch>
      </Router>
    );
  }
}
