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
          this.props.history.push("/login");
        }
        localStorage.setItem("jwt", data.user.token);
        this.props.currentUser(data);
        this.props.notes(data.notes);
        this.props.history.push("/todos");
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
            {/* <Image src="/logo.png" /> Log-in to your account */}
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
