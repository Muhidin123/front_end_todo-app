import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "./components/Login";
import SignUp from "./components/SignUp";
import CardContainer from "./components/CardContainer";
import SingleCard from "./components/SingleCard";
import NewNoteForm from "./components/NewNoteForm";
import { loginSuccess } from "./actions/login";
import { notesFetchSuccess } from "./actions/notes";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    this.props.history.push("/login");
    if (!token) {
      console.log("No token");
    } else {
      console.log(this.props);
      const reqObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      fetch("http://localhost:3000/current_user", reqObj)
        .then(resp => resp.json())
        .then(data => {
          this.props.currentUser(data);
          this.props.notes(data.notes);
        });
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/login' />} />
          <Route path='/login' component={LoginForm} />
          <Route path='/sign-up' component={SignUp} />
          <Route exact path='/todos' component={CardContainer} />
          <Route exact path='/todos/edit/:id' component={SingleCard} />
          <Route exact path='/todos/new' component={NewNoteForm} />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  currentUser: loginSuccess,
  notes: notesFetchSuccess,
};

export default connect(null, mapDispatchToProps)(withRouter(App));
