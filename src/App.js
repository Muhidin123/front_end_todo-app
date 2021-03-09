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
import SingleCard from "./components/SingleCard";
import NewNoteForm from "./components/NewNoteForm";
import { loginSuccess } from "./actions/login";
import { notesFetchSuccess } from "./actions/notes";
import DefaultContainer from "./components/DefaultContainer";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    route: "",
  };

  componentDidMount() {
    const token = localStorage.getItem("jwt");

    if (!token) {
      this.props.history.push("/login");
    } else {
      const reqObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      fetch("https://afternoon-harbor-70437.herokuapp.com/current_user", reqObj)
        .then(resp => resp.json())
        .then(data => {
          this.props.currentUser(data);
          this.props.notes(data.notes);
          this.props.history.push("/todos");
        });
    }
  }
  render() {
    return (
      <div id='test'>
        <Router>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/login' />} />
            <Route path='/login' component={LoginForm} />
            <Route path='/sign-up' component={SignUp} />
            <Route exact path='/todos' component={DefaultContainer} />
            <Route exact path='/todos/edit/:id' component={SingleCard} />
            <Route exact path='/todos/new' component={NewNoteForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = {
  currentUser: loginSuccess,
  notes: notesFetchSuccess,
};

export default connect(null, mapDispatchToProps)(withRouter(App));
