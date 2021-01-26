import React, { Component } from "react";
import { connect } from "react-redux";
import NoteCard from "./NoteCard";

class CardContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='ui four stackable cards'>
        {this.props.notes.map(note => {
          return (
            <NoteCard note={note} key={note.id} history={this.props.history} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
  };
};

export default connect(mapStateToProps, null)(CardContainer);
