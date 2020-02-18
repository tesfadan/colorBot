import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className={"button " + this.props.type}
        onClick={() => this.props.click()}>
        {this.props.name}
      </button>
    );
  }
}
