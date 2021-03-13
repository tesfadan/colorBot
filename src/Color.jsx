import React from "react";
import Home from "./Pages/Home";
import "./Style/Global.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";

const Color = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" children={<Home />} />
                </Switch>
                {/* <Footer /> */}
            </Router>
        </div>
    );
}

export default Color;
