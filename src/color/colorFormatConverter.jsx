import React, { Component } from "react";
import Scheme from "./scheme";

function toHSL(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  r = r /= 255;
  g = g /= 255;
  b = b /= 255;
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  var colorInHSL = "hsl(" + h + ", " + s + "%, " + l + "%)";
  return colorInHSL;
}

export const toRGB = hex => {
  // console.log("TO RGB CALLED");
  // Convert to RGB
  //stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var rgbResult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var rgbResult = {
    r: parseInt(rgbResult[1], 16),
    g: parseInt(rgbResult[2], 16),
    b: parseInt(rgbResult[3], 16)
  };

  // var rgbResult2 =
  //   "rgb(" + rgbResult.r + "," + rgbResult.g + "," + rgbResult.b + ")";
  // console.log(rgbResult2);
  return rgbResult;
};

const convert = (hex, type) => {
  return type === "RGB" ? toRGB(hex) : type === "HSL" ? toHSL(hex) : null;
};

export default convert;
