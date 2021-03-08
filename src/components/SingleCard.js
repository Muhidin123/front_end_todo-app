import React, { Component } from "react";
import { Form, Segment, Button, Grid, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateNotesSuccess } from "../actions/update";
import { loginSuccess } from "../actions/login";
import { notesFetchSuccess } from "../actions/notes";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const stateOptions = [
  {
    key: "whatever",
    text: "Whatever",
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

    this.modules = {
      toolbar: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["clean"],
      ],
    };

    this.formats = [
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "list",
      "bullet",
      "align",
      "color",
      "background",
    ];

    this.rteChange = this.rteChange.bind(this);
    this.filteredNote = this.props.note.find(note => {
      return note.id === parseInt(this.props.match.params.id);
    });

    this.state = {
      id: this.filteredNote.id,
      title: this.filteredNote.title,
      description: this.filteredNote.description,
      completed: this.filteredNote.completed,
      due_date: this.filteredNote.due_date,
      category: {},
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

    fetch(
      `https://afternoon-harbor-70437.herokuapp.com/notes/${this.state.id}`,
      reqObj
    )
      .then(resp => resp.json())
      .then(data => {
        this.props.updateNote(data);
        this.props.history.goBack();
      });
  };

  rteChange = (content, delta, source, editor) => {
    let test = editor.getHTML();

    this.setState({
      description: test,
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
                <ReactQuill
                  label='Description'
                  theme='snow'
                  modules={this.modules}
                  formats={this.formats}
                  onChange={this.rteChange}
                  value={this.state.description}
                />
                <Dropdown
                  placeholder='Category'
                  fluid
                  search
                  selection
                  options={stateOptions}
                  onChange={this.handleChangeSelection}
                />
                <input
                  type='date'
                  name='due_date'
                  id='date'
                  onChange={this.handleChange}
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
  currentUser: loginSuccess,
  notes: notesFetchSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
