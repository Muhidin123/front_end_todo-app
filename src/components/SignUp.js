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
    errors: null,
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
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    fetch("https://afternoon-harbor-70437.herokuapp.com/users", reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          console.log(data.error);
          this.setState({
            errors: data.error,
          });
          this.props.history.push("/sign-up");
        } else {
          localStorage.setItem("jwt", data.user.token);
          this.props.currentUser(data);
          this.props.notes(data.notes);
          this.props.history.push("/todos");
        }
      });
  };

  render() {
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
                fluid
                name='first_name'
                icon='user'
                iconPosition='left'
                placeholder='First Name'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Input
                fluid
                name='last_name'
                icon='user'
                iconPosition='left'
                placeholder='Last Name'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Input
                fluid
                name='username'
                icon='user'
                iconPosition='left'
                placeholder='Username'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Input
                fluid
                icon='mail'
                name='email'
                iconPosition='left'
                placeholder='E-mail address'
                onChange={e => {
                  this.handleChange(e);
                }}
              />
              <Form.Input
                fluid
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
                fluid
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
          {this.state.errors
            ? this.state.errors.map(err => {
                i++;
                return <Message error content={err} key={i} />;
              })
            : null}
        </Grid.Column>
      </Grid>
    );
  }
}
let i = 0;

const mapDispatchToProps = {
  currentUser: loginSuccess,
  notes: notesFetchSuccess,
};

export default connect(null, mapDispatchToProps)(SignUp);
