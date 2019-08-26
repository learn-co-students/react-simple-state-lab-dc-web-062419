import React, { Component } from "react";
import ReactDom from "react-dom";

export default class Cell extends Component {
  constructor(props) {
    super(props), (this.state = { color: this.props.value });
  }
  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
  handleClick = () => {
    this.setState({ color: "#333" });
  };
}
