import React from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/login";
import { notesFetchSuccess } from "../actions/notes";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: false,
    };
  }

  componentDidMount = () => {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
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

  fetch("http://localhost:3000/auth", reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          this.setState({
            error: data.error,
          });
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
            Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.handleSubmit} error='false'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='username'
                name='username'
                onChange={e => {
                  this.handleChange(e);
                }}
                error={this.state.error}
              />
              <Form.Input
                fluid
                icon='lock'
                name='password'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={e => {
                  this.handleChange(e);
                }}
                error={this.state.error}
              />
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/sign-up'>Sign Up</a>
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

export default connect(null, mapDispatchToProps)(LoginForm);
