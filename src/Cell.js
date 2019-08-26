import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  colorChange = () => {
    this.setState({
      color: "#333"
    });
  };

  render() {
    return (
      <div
        className="cell"
        onClick={this.colorChange}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
