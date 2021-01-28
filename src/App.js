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
// import CardContainer from "./components/CardContainer";
import SingleCard from "./components/SingleCard";
import NewNoteForm from "./components/NewNoteForm";
import { loginSuccess } from "./actions/login";
import { notesFetchSuccess } from "./actions/notes";
// import RichEditor from "./components/RichEditor";
import DefaultContainer from "./components/DefaultContainer";
import Nav from "./components/Nav";
import RichTextEditor from "./components/NewEditorTry";
import TestNewNoteForm from './components/TestNewForm';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    this.props.history.push("/login");

    if (!token) {
      console.log("No token");
      this.props.history.push("/login");
    } else {
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
          this.props.history.push("/todos");
        });
    }
  }
  render() {
    const token = localStorage.getItem("jwt");

    return (
      <div id='test'>
        <Router>
          {token ? <Nav /> : null}
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/login' />} />
            <Route path='/login' component={LoginForm} />
            <Route path='/sign-up' component={SignUp} />
            <Route exact path='/todos' component={DefaultContainer} />
            <Route exact path='/todos/edit/:id' component={SingleCard} />
            <Route exact path='/todos/new' component={NewNoteForm} />
            <Route exact path='/editor' component={RichTextEditor} />
            <Route exact path='/test/new/form' component={TestNewNoteForm} />
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
