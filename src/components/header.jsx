import React, { Component } from "react";
import * as graphics from "./graphics";
import Button from "./button";
import Menu from "./menu";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: false,
      colorFormat: this.props.format,
      page: this.props.page
    };
  }
  colorFormat = e => {
    // console.log("Triggred");
    return this.state.colorFormat !== e
      ? (this.setState({ colorFormat: e }), this.props.returnState(e))
      : null;
  };

  menuClickHandler() {
    return (
      this.setState({ header: !this.state.header }),
      this.props.blur(!this.state.header)
    );
  }

  render() {
    return (
      <header className={this.state.header ? "headerActive" : null}>
        <span onClick={() => this.props.changePage("home")}>
          {graphics.wordMark}
        </span>
        {this.props.page !== "Create" ? (
          <Button
            type="headerBtn outline"
            name="Create"
            click={() => this.props.changePage("create")}
          />
        ) : null}

        <span
          className="bentoContainer"
          onClick={() => this.menuClickHandler()}>
          {graphics.bento}
        </span>
        {this.state.header ? (
          <Menu
            returnState={e => this.colorFormat(e)}
            format={this.props.format}
          />
        ) : null}
      </header>
    );
  }
}
