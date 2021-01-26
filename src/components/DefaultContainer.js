import React, { Component } from "react";
import CardContainer from "./CardContainer";
import NavBar from "./NavBar";

export default class DefaultContainer extends Component {
  render() {
    return (
      <div>
        {/* <div>
          <NavBar />
        </div> */}
        <div>
          <CardContainer />
        </div>
      </div>
    );
  }
}
