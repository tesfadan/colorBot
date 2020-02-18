import React, { Component } from "react";
import Scheme from "../color/scheme";
// import Vibrant from "../color/vibrant";
import Button from "./button";
import * as Vibrant from "node-vibrant";
import db from "../firestore/firebase";
import { xIcon } from "./graphics";

const schemes = [
  {
    id: "preview1",
    colors: ["#d4d4d4", "#bababa", "#d4d4d4", "#bababa"]
  },
  {
    id: "preview2",
    colors: ["#d4d4d4", "#bababa", "#d4d4d4", "#bababa"]
  }
];

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: null,
      previewScheme: schemes
    };
    this.file = this.file.bind(this);
  }

  file = e => {
    var This = this;
    var input = document.getElementById("imageUpload");
    var fReader = new FileReader();

    // console.log(input.files[0]);

    return input.files[0] !== null
      ? (fReader.readAsDataURL(input.files[0]),
        (fReader.onloadend = function(event) {
          This.setState({ selectedImage: event.target.result });

          // Using constructor
          let v = new Vibrant(event.target.result);
          v.getPalette((err, palette) => console.log(palette));
          // Promise
          v.getPalette().then(palette => This.palettePreview(palette));
        }))
      : null;
  };

  palettePreview(palette) {
    console.log("Palette Preview");
    const previewScheme = [
      {
        id: "preview1",
        colors: [
          palette.DarkVibrant.hex,
          palette.Vibrant.hex,
          palette.LightVibrant.hex,
          palette.LightMuted.hex
        ]
      },
      {
        id: "preview2",
        colors: [
          palette.DarkMuted.hex,
          palette.Muted.hex,
          palette.LightMuted.hex,
          palette.LightVibrant.hex
        ]
      }
    ];

    return this.setState({
      previewScheme: previewScheme
    });
  }

  remove = e => {
    // console.log(e);
  };

  like = scheme => {
    // Add a new document with a generated id.
    db.collection("schemes")
      .add({
        colors: [
          scheme.colors[0],
          scheme.colors[1],
          scheme.colors[2],
          scheme.colors[3]
        ],
        created: Date.now()
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="uploadText">
          <label for="imageUpload">
            {this.state.selectedImage == null
              ? "Upload an image to generate a color scheme from."
              : "Upload Another"}
          </label>
        </h3>

        <div
          className={
            this.state.selectedImage == null
              ? "uploadSection"
              : "uploadSection withBG"
          }
          style={{
            backgroundImage: "url(" + this.state.selectedImage + ")"
          }}>
          <label for="imageUpload" className="inputLabel fullWidth">
            <span>
              {this.state.selectedImage == null ? (
                <h3> Upload Image </h3>
              ) : (
                "Replace"
              )}
            </span>
            <input
              id="imageUpload"
              type="file"
              className="uploadInput"
              onChange={e => this.file(e.target)}
              style={{ display: "none " }}
            />
          </label>
        </div>
        <div className="schemesContainer newSchemes">
          {this.state.previewScheme.map(scheme => {
            return (
              <Scheme
                values={scheme.colors}
                type={this.props.type}
                new={this.state.selectedImage !== null}
                id={scheme.id}
                uid={scheme.id}
                like={() => this.like(scheme)}
                remove={e => this.remove(e)}
                latestCopy={e => this.props.latestCopy(e)}
              />
            );
          })}
        </div>
        {this.state.selectedImage !== null ? (
          <div className="mobileButtonContainer">
            <label
              for="imageUpload"
              className="inputLabel fullWidth filledButton mobileButton mobileLabel">
              <h3>New Image</h3>
              <input
                id="imageUpload"
                type="file"
                className="uploadInput"
                onChange={e => this.file(e.target)}
              />
            </label>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Create;
