import React, { Component } from "react";
import CardContainer from "./CardContainer";
import { connect } from "react-redux";


class DefaultContainer extends Component {
  render() {
    return (
      <div>
        <CardContainer />
      </div>
    );
  }
}

export default connect(null, null)(DefaultContainer);
