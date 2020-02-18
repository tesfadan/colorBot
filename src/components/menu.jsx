import React, { Component } from "react";
import Button from "./button";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.format
    };
  }
  cname = e => {
    return e === this.state.selected
      ? "outlined typeBtn selectedType"
      : "outlined typeBtn unselectedType";
  };
  changeColorFormat = e => {
    console.log("Change Color Format to: " + e);
    return e !== this.state.selected
      ? (this.setState({
          selected: e
        }),
        this.props.returnState(e))
      : null;
  };

  //
  render() {
    return (
      <div className="menu">
        <div className="menuItemsContainer">
          <div className="typesContainer">
            <Button
              name="HEX"
              type={
                this.state.selected === "HEX"
                  ? "outlined typeBtn selectedType"
                  : "outlined typeBtn unselectedType"
              }
              click={() => this.changeColorFormat("HEX")}
            />
            <Button
              name="RGB"
              type={
                this.state.selected === "RGB"
                  ? "outlined typeBtn selectedType"
                  : "outlined typeBtn unselectedType"
              }
              click={() => this.changeColorFormat("RGB")}
            />
            <Button
              name="HSL"
              type={
                this.state.selected === "HSL"
                  ? "outlined typeBtn selectedType"
                  : "outlined typeBtn unselectedType"
              }
              click={() => this.changeColorFormat("HSL")}
            />
          </div>

          <a className="credit" href="https://tesfadan.com" tarfet="_blank">
            <h3>Built by Tesfa Demissie, tesfadan.com</h3>
          </a>
        </div>
      </div>
    );
  }
}
