import React, { Component } from "react";
import SignUp from "./SignUp";

export default class NoteCard extends Component {
  render() {
    return (
      <div className='ui cards'>
        <div className='card'>
          <div className='content'>
            <div className='header'>Elliot Fu</div>
            <div className='description'>
              Elliot Fu is a film-maker from New York.
            </div>
          </div>
          <div className='ui bottom attached button'>
            <i className='add icon'></i>
            Add Friend
          </div>
        </div>
      </div>
    );
  }
}
