import React, { Component } from "react";
import Convert from "./colorFormatConverter";
import { xIcon, loveIcon } from "../components/graphics";

//techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
function copyStringToClipboard(str) {
  // Create new element
  var el = document.createElement("textarea");
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand("copy");
  // Remove temporary element
  document.body.removeChild(el);
}

export default class Scheme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textNumber: 0
    };
  }
  copyValue = e => {
    const rgbv = Convert(e, "RGB");
    const hslv = Convert(e, "HSL");
    const chosenMethod =
      this.props.type === "RGB" ? rgbv : this.props.type === "HSL" ? hslv : e;

    // Usage example:
    copyStringToClipboard(chosenMethod);

    // console.log("Copied: " + chosenMethod);

    this.props.latestCopy(e);
  };

  delete(item) {}

  resetMargin = this.props.new ? { marginBottom: "0px" } : {};
  cName = this.props.new ? "scheme newScheme" : "scheme";
  render() {
    return (
      <React.Fragment>
        <div className={this.cName}>
          {/* <span onClick={() => this.props.delete(this.props.uid)}>{xIcon}</span> */}

          {this.props.values.map(value => {
            return (
              <React.Fragment>
                <div
                  className="colorBox"
                  style={{ backgroundColor: value }}
                  onClick={() => this.copyValue(value)}
                  onDrag={() => this.props.delete(this.props.uid)}>
                  <span style={{ color: "white" }}>copy</span>
                </div>
              </React.Fragment>
            );
          })}
          {this.props.new ? (
            <div className="likeOrNot">
              <span
                className="love"
                onClick={() => this.props.like(this.props.id)}>
                {loveIcon}
              </span>
              {/* <span className="hate" onClick={e => this.props.remove(e)}>
                {xIcon}
              </span> */}
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
