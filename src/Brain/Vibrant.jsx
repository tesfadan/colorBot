import * as Vibrant from "node-vibrant";

export const PaletteFromUrl = ({ url, setColors }) => {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'blob';
    request.onload = function () {
        var reader = new FileReader();
        reader.readAsDataURL(request.response);
        reader.onload = function (e) {
            console.log('DataURL:', e.target.result);
            let v = new Vibrant(e.target.result);
            v.getPalette((err, palette) => {
                // console.log(palette);
                palette ?
                    setColors({ [0]: palette.DarkVibrant.hex, [1]: palette.Vibrant.hex, [2]: palette.LightVibrant.hex }) :
                    console.log(err)
            }
            );
        };
    };
    request.send();
}