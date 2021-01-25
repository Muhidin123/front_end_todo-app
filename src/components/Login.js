import React from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/login";

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
      username: "muhidin",
      password: "muhidin",
    };
  }

  componentDidMount = () => {};

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
        console.log(data);

        if (data.error) {
          console.log(data.error);
          this.props.history.push("/todos");
        } else {
          console.log(this.props);
          this.props.currentUser(data);
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
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
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

// export default LoginForm;

const mapDispatchtoProps = {
  currentUser: loginSuccess,
};

export default connect(null, mapDispatchtoProps)(LoginForm);
