import React from "react";
import SingleCard from "./SingleCard";
// import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
// import SingleCard from "./SingleCard";

class NoteCard extends React.Component {
  handleClick = () => {
    const { id } = this.props.note;

    this.props.history.push(`/todos/${id}`);
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
        <div className='ui bottom attached button' onClick={this.handleClick}>
          <i className='add icon'></i>
          Completed
        </div>
      </div>
    );
  }
}
export default NoteCard;
