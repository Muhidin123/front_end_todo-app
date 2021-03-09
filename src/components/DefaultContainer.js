import React, { Component } from "react";
import CardContainer from "./CardContainer";
import { connect } from "react-redux";
import Nav from "./Nav";

class DefaultContainer extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CardContainer />
      </div>
    );
  }
}

export default connect(null, null)(DefaultContainer);
