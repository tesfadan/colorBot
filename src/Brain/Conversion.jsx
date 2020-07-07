var convert = require('color-convert');

export const FormatRGB = (x) => {
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

export const toSmallRGB = (hex) => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [
            Math.round(parseInt(result[1], 16) / 2.55) / 100,
            Math.round(parseInt(result[2], 16) / 2.55) / 100,
            Math.round(parseInt(result[3], 16) / 2.55) / 100
        ]
        : null;
}

export const toRGB = (hex) => {
    let rgb = convert.hex.rgb(hex);
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

export const toHSL = (hex) => {
    let rgb = convert.hex.rgb(hex);
    let hsl = convert.rgb.hsl(rgb);
    return `hsl(${hsl[0]}, ${hsl[1]}, ${hsl[2]})`
}