import React, { Component } from "react";
import { connect } from "react-redux";
import NoteCard from "./NoteCard";
import "./index.css";
import Nav from "./Nav";

class CardContainer extends Component {
  render() {
    return (
      <>
        <Nav />
        {this.props.notes && this.props.notes.length > 0 ? (
          <div className='ui four stackable cards'>
            {this.props.notes.map(note => {
              return <NoteCard note={note} key={note.id} />;
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
    notes: state.notes.notes,
  };
};

export default connect(mapStateToProps, null)(CardContainer);
