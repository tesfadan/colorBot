import React, { Component } from "react";
import brain from "brain.js";
import * as Vibrant from "node-vibrant";
import cup from "../src/cup.png";
import fruits from "../src/fruits.jpg";

// TypeScript

const network = new brain.NeuralNetwork();

// network.train([
//   { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
//   { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
//   { input: { r: 0.73, g: 0.24, b: 0.29 }, output: { dark: 1 } },
//   { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
//   { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
//   { input: { r: 0.98, g: 1, b: 0.04 }, output: { light: 1 } }
// ]);

network.train([
  {
    input: { r: 1, g: 0.86, b: 0.0 },
    output: { r: 0.71, g: 0.2, b: 1 }
  },
  {
    input: { r: 0.25, g: 0.49, b: 1 },
    output: { r: 1, g: 1, b: 1 }
  },
  {
    input: { r: 0.78, g: 0.39, b: 0 },
    output: { r: 1, g: 1, b: 1 }
  },
  {
    input: { r: 0.84, g: 0.66, b: 0 },
    output: { r: 0, g: 0, b: 1 }
  },
  {
    input: { r: 0, g: 0, b: 0 },
    output: { r: 1, g: 1, b: 1 }
  },
  {
    input: { r: 0.86, g: 0.65, b: 1 },
    output: { r: 1, g: 0.9, b: 0 }
  },
  {
    input: { r: 0.96, g: 0.85, b: 1 },
    output: { r: 0.9, g: 0.9, b: 0.9 }
  },
  {
    input: { r: 0.08, g: 0.31, b: 0.29 },
    output: { r: 1, g: 0.9, b: 0 }
  },
  {
    input: { r: 1, g: 0.6, b: 0.46 },
    output: { r: 0.7, g: 0.26, b: 1 }
  }
]);

const result = network.run({ r: 250, g: 250, b: 250 });

console.log(result);

function getRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
      g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
      b: Math.round(parseInt(result[3], 16) / 2.55) / 100
    }
    : null;
}

// The following will do to the RGB to hex conversion and add any required zero padding:

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// alert(rgbToHex(0, 51, 255)); // #0033ff

// function rgbThis(x) {
//   return (
//     Math.round(x.r * 2.55) +
//     "" +
//     Math.round(x.g * 2.55) +
//     "" +
//     Math.round(x.b * 2.55)
//   );
// }

class colorPicker extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.formatRGB = this.formatRGB.bind(this);

    this.state = {
      bg: "rgb(250220240)"
    };
  }

  formatRGB(x) {
    return (
      "rgb(" +
      Math.round(x.r * 2.55 * 100) +
      "," +
      Math.round(x.g * 2.55 * 100) +
      "," +
      Math.round(x.b * 2.55 * 100) +
      ")"
    );
  }

  formatRGBSimp(x) {
    return "rgb(" + x.r + "," + x.g + "," + x.b + ")";
  }

  handleChange(event) {
    const rgb = getRgb(event.target.value);
    console.log(rgb);
    // const result = brain.likely(rgb, network);
    // console.log(rgb);
    // result = brain.run(network);
    const x = network.run(rgb);

    // const y =
    //   Math.round(x.r * 2.55 * 100) +
    //   "" +
    //   Math.round(x.g * 2.55 * 100) +
    //   "" +
    //   Math.round(x.b * 2.55 * 100);

    console.log(this.formatRGB(x));

    this.setState({
      bg: this.formatRGB(rgb),
      color: this.formatRGB(x)
    });
  }

  vibe() {
    // Using builder
    Vibrant.from(fruits).getPalette(
      (err, palette) => (
        console.log(palette),
        this.setState({
          vib: this.formatRGBSimp(palette.Vibrant)
        })
      )
    );

    // Promise
    // Vibrant.from("/cup.png")
    //   .getPalette()
    //   .then(palette => console.log(palette));
  }

  componentDidMount() {
    this.vibe();
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.bg }}>
        <input
          type="color"
          id="head"
          name="head"
          onChange={this.handleChange}
        />
        <h5 style={{ color: this.state.color }}>COLORPICKER.JS</h5>
        <h3>{this.state.color}</h3>
        <h2> {result[0]}</h2>
        <h1 style={{ color: this.state.vib }}> ITS A VIBE </h1>
      </div>
    );
  }
}

export default colorPicker;
