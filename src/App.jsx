// @ts-nocheck
import React from "react";
import { Home } from "./Home";
import "./Style/Global.scss";
import { Dashboard } from "./Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Provider } from "./Context/Context";
import Color from "./Color";
function App() {
  return (
    <Provider>
      <Color />
    </Provider>

  );
}

export default App;
