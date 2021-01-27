import React from "react";
import { connect } from "react-redux";
import { deleteNoteSuccess } from "../actions/delete";
import { withRouter } from "react-router-dom";

class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, description, completed } = this.props.note;

    this.state = {
      id,
      title,
      description,
      completed,
    };
  }

  handleEdit = () => {
    const { id } = this.props.note;

    this.props.history.push(`/todos/edit/${id}`);
  };

  handleDelete = params => {
    const { id } = this.props.note;

    const reqObj = {
      method: "DELETE",
    };

    fetch(`http://localhost:3000/notes/${id}`, reqObj).then(data => {
      this.props.delete(id);
    });
  };

  handleCompletedTodo = () => {
    const { id } = this.state;
    // this.setState({
    //   completed: !this.state.completed,
    // });

    const updatedNote = {
      ...this.state,
      completed: !this.state.completed,
    };

    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNote),
    };

    fetch(`http://localhost:3000/notes/${id}`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        const { id, title, description, completed } = data;
        this.setState({
          id,
          title,
          description,
          completed,
        });
      });
  };

  render() {
    const { title, description, completed } = this.state;

    return (
      <div className='ui raised card'>
        <div
          className={
            completed
              ? "ui bottom aligned active inverted dimmer"
              : "ui bottom aligned  dimmer"
          }
        >
          <div className='content'>
            <div className='ui animated fade  secondary button' color='red'>
              <div className='visible content'>
                Changed my mind not completed
              </div>
              <div
                className='hidden content'
                onClick={this.handleCompletedTodo}
              >
                <i className='calendar times icon'></i>
              </div>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='meta'>2 days ago</div>
          <div className='header'>{title}</div>
          <div className='description'>
            <p>{description}</p>
          </div>
        </div>
        <div className='extra content'>
          <i className='check icon'></i>
          Maybe set a due date
          <div className='right floated author'>
            <i className='user circle icon'></i> First Name
          </div>
        </div>
        <div className='ui two buttons'>
          <div className='ui basic green button' onClick={this.handleEdit}>
            EDIT
          </div>
          <div className='ui basic red button' onClick={this.handleDelete}>
            DELETE
          </div>
        </div>
        <div
          className='ui bottom attached button'
          onClick={this.handleCompletedTodo}
        >
          COMPLETED
          <div className='right floated author'>
            <i className='calendar check icon'></i>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  delete: deleteNoteSuccess,
};

export default connect(null, mapDispatchToProps)(withRouter(NoteCard));
