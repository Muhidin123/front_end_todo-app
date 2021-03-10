import React, { Component } from "react";
import { Form, Segment, Button, Grid, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { newNoteSuccess } from "../actions/new";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

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

class NewNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      completed: false,
      user_id: this.props.user,
      category: "",
      due_date: "",
    };

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
  }

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
        this.props.newNote(note);
        this.props.history.push("/todos");
      });
  };

  handleChangeSelection = (e, { value }) => {
    return this.setState({ category: value });
  };

  render() {
    const { category } = this.state;
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
                  control='input'
                  placeholder='Add title here'
                  onChange={this.handleChange}
                  name='title'
                />
                <ReactQuill
                  theme='snow'
                  modules={this.modules}
                  formats={this.formats}
                  onChange={this.rteChange}
                  value={this.state.description || ""}
                  placeholder='Add your description here'
                />
                <br />
                <Dropdown
                  placeholder='Category'
                  fluid
                  search
                  selection
                  options={stateOptions}
                  value={category}
                  onChange={this.handleChangeSelection}
                />
                <br />
                <input
                  type='date'
                  name='due_date'
                  id='date'
                  onChange={this.handleChange}
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
    user: state.currentUser.id,
  };
};

const mapDispatchToProps = {
  newNote: newNoteSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteForm);
