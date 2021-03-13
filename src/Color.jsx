import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header.jsx";

const Color = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" children={<Home />} />
                </Switch>
            </Router>
        </div>
    );
}

export default Color;
