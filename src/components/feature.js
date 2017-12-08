import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  render() {
    return (
      <div>
        <h2>Feature</h2>
      </div>
    );
  }
}

export default connect(null, actions)(Feature);
