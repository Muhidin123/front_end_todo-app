import React, { Component } from "react";
import {
  TextArea,
  Form,
  Segment,
  Button,
  Grid,
  Dropdown,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { updateNotesSuccess } from "../actions/update";
const stateOptions = [
  {
    key: "whatever",
    text: "whatever",
    value: "whatever",
  },
  {
    key: "work",
    text: "Work",
    value: "work",
  },
  {
    key: "just cuz",
    text: "Just cuz",
    value: "just cuz",
  },
  {
    key: "fun",
    text: "Fun",
    value: "fun",
  },
];

class SingleCard extends Component {
  constructor(props) {
    super(props);

    let filteredNote = this.props.note.find(note => {
      return note.id == this.props.match.params.id;
    });

    this.state = {
      id: filteredNote.id,
      title: filteredNote.title,
      description: filteredNote.description,
      completed: filteredNote.completed,
      category: {},
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

  handleChangeSelection = (e, { value }) => this.setState({ category: value });

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
                <Form.Field
                  label='Title'
                  value={this.state.title}
                  control='input'
                  placeholder='Add title here'
                  onChange={this.handleChange}
                  name='title'
                />
                <TextArea
                  placeholder=''
                  value={this.state.description}
                  onChange={this.handleChange}
                  name='description'
                />
                <Dropdown
                  placeholder='Category'
                  fluid
                  search
                  selection
                  options={stateOptions}
                  onChange={this.handleChangeSelection}
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
    note: state.notes,
  };
};

const mapDispatchToProps = {
  updateNote: updateNotesSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
