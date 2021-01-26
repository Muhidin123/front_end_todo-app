import React, { Component } from "react";
import { TextArea, Form, Segment, Button, Grid } from "semantic-ui-react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { newNoteSuccess } from "../actions/new";

class NewNoteForm extends Component {
  state = {
    title: "",
    description: "",
    completed: false,
    user_id: this.props.user,
  };

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

    fetch("http://localhost:3000/notes", reqObj)
      .then(resp => resp.json())
      .then(note => {
        console.log(note);
        this.props.newNote(note);
        this.props.history.push("/todos");
      });
  };

  render() {
    return (
      <div>
        <Nav />
        <Grid
          textAlign='center'
          style={{ height: "50vh" }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment stacked>
              <Form onSubmit={this.handleSubmit} size='large'>
                <Form.Field
                  control='input'
                  placeholder='Add title here'
                  onChange={this.handleChange}
                  name='title'
                />
                <TextArea
                  placeholder='Add description here'
                  onChange={this.handleChange}
                  name='description'
                  rows='5'
                />
                <Button color='teal' fluid size='large' type='submit'>
                  Add new note
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.currentUser.user.id,
  };
};

const mapDispatchToProps = {
  newNote: newNoteSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteForm);
