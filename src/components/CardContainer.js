import React, { Component } from "react";
import { connect } from "react-redux";
import NoteCard from "./NoteCard";
import "./index.css";

class CardContainer extends Component {
  render() {
    return (
      <>
        {this.props.notes && this.props.notes.length > 0 ? (
          <div className='ui four doubling  cards'>
            {this.props.notes.map(note => {
              return (
                <NoteCard note={note} key={note.id} name={this.props.user} />
              );
            })}
          </div>
        ) : (
          <div className='container'>
            <div className='child'>
              <h1>Nothing to display</h1>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    user: state.currentUser,
  };
};

export default connect(mapStateToProps, null)(CardContainer);
