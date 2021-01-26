import React, { Component } from "react";
import { TextArea, Form, Segment, Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateNotesSuccess } from "../actions/update";

class SingleCard extends Component {
  constructor(props) {
    super(props);

    let filteredNote = this.props.note.find(note => {
      return note.id == this.props.match.params.id;
    });

    this.state = {
      //INSTEAD OF EMPTY STRING  ASSIGNEE VALUE FROM PROPS PASSED IN AFTER CLICK
      id: filteredNote.id,
      title: filteredNote.title,
      description: filteredNote.description,
      completed: filteredNote.completed,
    };
  }

  componentDidMount = () => {
    console.log(this.props);
  };

  handleSubmit = e => {
    e.preventDefault();
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    fetch(`http://localhost:3000/notes/${this.state.id}`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.props.updateNote(data);
        this.props.history.goBack();
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
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
                <TextArea
                  value={this.state.title}
                  onChange={this.handleChange}
                  name='title'
                />
                <TextArea
                  placeholder=''
                  value={this.state.description} //ASSIGNEE FROM STATE
                  onChange={this.handleChange}
                  name='description'
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
  return {
    note: state.notes.notes,
  };
};

const mapDispatchToProps = {
  updateNote: updateNotesSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
