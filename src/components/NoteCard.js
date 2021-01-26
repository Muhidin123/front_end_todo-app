import React from "react";

import { connect } from "react-redux";
import { deleteNoteSuccess } from "../actions/delete";
import { withRouter } from "react-router-dom";

class NoteCard extends React.Component {
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

  render() {
    const { title, description } = this.props.note;

    return (
      <div className='card'>
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
        </div>
        <div className='ui two buttons'>
          {/* <i className='add icon'></i> */}
          <div className='ui basic green button' onClick={this.handleEdit}>
            EDIT
          </div>
          <div className='ui basic red button' onClick={this.handleDelete}>
            DELETE
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
