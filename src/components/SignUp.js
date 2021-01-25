import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const SignUp = () => (
  <Grid textAlign='center' style={{ height: "100vh" }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        {/* <Image src="/logo.png" /> Log-in to your account */}
        Sign-up to use App
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='First Name'
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Last Name'
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Username'
          />
          <Form.Input
            fluid
            icon='mail'
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

const handleSubmit = () => {
  let test = {
    user: {
      first_name: "User3",
      last_name: "User3",
      username: "user3",
      password: "user4",
      email: "user@user.com",
      bio: "student",
    },
  };
  const reqObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(test),
  };

  fetch("http://localhost:3000/users", reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        console.log(data.error);
      }
      console.log(data);
    });
};

export default SignUp;
