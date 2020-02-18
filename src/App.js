import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Button from "./components/button";
import SchemeBox from "./color/schemeBox";
import Create from "./components/create";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFormat: "HEX",
      page: "home",
      latestCopy: "",
      blur: false
    };
    this.latestCopy = this.latestCopy.bind(this);
  }

  colorFormat = e => {
    console.log("Triggred");
    return this.state.colorFormat !== e
      ? this.setState({ colorFormat: e })
      : null;
  };
  changePage(e) {
    return this.state.page !== e
      ? this.setState({
          page: e
        })
      : null;
  }
  latestCopy(e) {
    // console.log("Triggerd latestCopy");
    // console.log(e);
    this.setState({
      latestCopy: e
    });
  }

  style = {
    hide: { display: "none" }
  };

  blur = e => {
    console.log("Blur: " + e);
    this.setState({
      blur: e
    });
  };

  mainContainerCname() {
    return this.state.blur ? "mainContainer blur" : "mainContainer ";
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.mainContainerCname()}>
          <Header
            returnState={this.colorFormat}
            format={this.state.colorFormat}
            changePage={e => this.changePage(e)}
            page={this.state.page}
            blur={e => this.blur(e)}
          />
          {this.state.page === "create" ? (
            <Create latestCopy={e => this.latestCopy(e)} />
          ) : null}
          <div
            className="inheritContainer"
            style={{ display: this.state.page === "home" ? "block" : "none" }}>
            <React.Fragment>
              <SchemeBox
                type={this.state.colorFormat}
                latestCopy={e => this.latestCopy(e)}
              />
              <div className="mobileButtonContainer">
                <Button
                  type="createButton filledButton mobileButton "
                  name="Create"
                  click={() => this.changePage("create")}
                />
              </div>
            </React.Fragment>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
