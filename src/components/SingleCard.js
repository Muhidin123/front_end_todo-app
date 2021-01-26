import React, { Component } from "react";
import { TextArea, Form, Segment, Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
// import { updateSuccess } from "../actions/update";
// import { Redirect } from "react-router-dom";

class SingleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //INSTEAD OF EMPTY STRING  ASSIGNEE VALUE FROM PROPS PASSED IN AFTER CLICK
      title: "",
      description: "",
      completed: false,
      redirect: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    // fetch(`http://localhost:3000/notes${note.id}`, reqObj)
    //   .then(resp => resp.json())
    //   .then(data => {this.props.updatedNote(data); this.props.history.push("/sign-up");}); SEND ACTION WITH NEW UPDATED NOTE and REDIRECT TO ALL NOTES
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <Grid
          textAlign='center'
          style={{ height: "50vh" }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment stacked>
              <Form onSubmit={this.handleSubmit} size='large'>
                <TextArea value={this.props.note.description} />{" "}
                <TextArea
                  placeholder=''
                  value={this.props.note.description} //ASSIGNEE FROM STATE
                />
                <Button
                  color='teal'
                  fluid
                  size='large'
                  type='submit'
                  onClick={this.handleClick}
                >
                  Edit
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
  // const desiredNote = state.currentUser.notes.filter(note => {
  //   return note.id === this.props.match.params.id;
  // });
  return {
    note: state,
  };
};

// const mapDispatchToProps = {
//   updatedNote: updateSuccess,
// };
export default connect(mapStateToProps, null)(SingleCard);
