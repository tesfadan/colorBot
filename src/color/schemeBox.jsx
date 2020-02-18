import React, { Component } from "react";
import Scheme from "./scheme";
import db from "../firestore/firebase";

const offlineSchemes = [
  { id: "", colors: ["#AC57BC", "#95B9E3", "#F7CC6C", "#FE6F6F"] },
  { id: "", colors: ["#002957", "#FE562D", "#FE9147", "#F3E0E2"] },
  { id: "", colors: ["#0B0BF5", "#674BCA", "#FE552D", "#FFC6BE"] },
  { id: "", colors: ["#2B2B2B", "#366769", "#B3D5D6", "#F1B4A2"] },
  { id: "", colors: ["#F25CA2", "#0433BF", "#021859", "#0B9ED9"] },
  { id: "", colors: ["#0A1747", "#0029FA", "#8D07F6", "#FFFF05"] }
];

const loadingSchemes = [
  {
    uid: "loading1",
    colors: ["lightGray", "lightGray", "lightGray", "lightGray"]
  },
  {
    uid: "loading2",
    colors: ["lightGray", "lightGray", "lightGray", "lightGray"]
  },
  {
    uid: "loading3",
    colors: ["lightGray", "lightGray", "lightGray", "lightGray"]
  },
  {
    uid: "loading4",
    colors: ["lightGray", "lightGray", "lightGray", "lightGray"]
  }
];

export default class SchemeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schemes: loadingSchemes
    };
  }

  deleteScheme = uid =>
    db
      .collection("schemes")
      .doc(uid)
      .delete();

  update = () => {
    db.collection("schemes")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc =>
          Object.assign({ uid: doc.id }, doc.data())
        );

        return data[0] !== undefined
          ? this.setState({
              schemes: data
            })
          : this.setState({
              schemes: offlineSchemes
            });
      });
    // console.log("Running");
  };

  componentDidMount() {
    this.update();
  }

  componentWillMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  shouldComponentUpdate(nextState, nextProps) {
    return this.state !== nextState;
  }

  render() {
    return (
      <div className="schemesContainer">
        {this.state.schemes.map(scheme => {
          return (
            <Scheme
              values={scheme.colors}
              uid={scheme.uid}
              type={this.props.type}
              latestCopy={e => this.props.latestCopy(e)}
              delete={id => this.deleteScheme(id)}
            />
          );
        })}
      </div>
    );
  }
}
