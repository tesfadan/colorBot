import React, { Component } from "react";
import * as Vibrant from "node-vibrant";

class vibrant extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    // Using constructor
    let v = new Vibrant(this.props.image);
    v.getPalette((err, palette) => console.log(palette));
    // Promise
    v.getPalette().then(palette => console.log(palette));
    return <div></div>;
  }
}

export default vibrant;
