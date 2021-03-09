import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  TextArea,
} from "semantic-ui-react";

import React from "react";
import { connect } from "react-redux";
import { notesFetchSuccess } from "../actions/notes";
import { loginSuccess } from "../actions/login";

class SignUp extends React.Component {
  state = {
    // errors: {
    //   passwordError: false,
    //   username: false,
    //   email: false,
    // },
    user: {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
      bio: "",
    },
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = () => {
    console.log(this.state.user);
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.user),
    };

    fetch("http://localhost:3000/users", reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          // for (let [_key, value] of Object.entries(data.error)) {
          //   console.log(value[0]);
          // }
          console.log(data.error);
          // this.setState({
          //   ...this.state,
          //   errors: data.error,
          // });
        } else {
          localStorage.setItem("jwt", data.user.token);
          this.props.currentUser(data);
          this.props.notes(data.notes);
          this.props.history.push("/todos");
          console.log(data);
        }
      });
  };

  render() {
    // const { username, email, passwordError } = this.state.errors;
    return (
      <Grid
        textAlign='center'
        style={{ height: "100vh" }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Sign-up to use App
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                name='first_name'
                icon='user'
                iconPosition='left'
                placeholder='First Name'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Input
                name='last_name'
                icon='user'
                iconPosition='left'
                placeholder='Last Name'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Input
                // error={username ? username : null}
                name='username'
                icon='user'
                iconPosition='left'
                placeholder='Username'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Input
                // error={email ? email : null}
                icon='mail'
                name='email'
                iconPosition='left'
                placeholder='E-mail address'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Input
                // error={passwordError ? passwordError : null}
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                name='password'
                type='password'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <TextArea
                icon='lock'
                iconPosition='left'
                placeholder='Tell us about yourself'
                name='bio'
                onChange={e => {
                  this.handleChange(e);
                }}
              />

              <Button color='teal' fluid size='large'>
                Sign-up
              </Button>
            </Segment>
          </Form>
          <Message>
            Back to Login? <a href='/login'>Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  currentUser: loginSuccess,
  notes: notesFetchSuccess,
};

export default connect(null, mapDispatchToProps)(SignUp);
