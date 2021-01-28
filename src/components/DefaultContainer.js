import React, { Component } from "react";
import CardContainer from "./CardContainer";
import { connect } from "react-redux";

import notesReducer from "../reducers/notes";

class DefaultContainer extends Component {
  render() {
    return (
      <div>
        <CardContainer />
      </div>
    );
  }
}

// const mapStateToProps = {
//   note: notesReducer,
// };
export default connect(null, null)(DefaultContainer);
