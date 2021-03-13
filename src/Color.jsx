import React, { useContext } from "react";
import { Home } from "./Home";
import "./Style/Global.scss";
import { Dashboard } from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import { ColorContext } from "./Context/Context";
const Color = () => {
    const { mode, setMode } = useContext(ColorContext);
    return (
        <div className="App">
            <Router>
                <Header />
                <Footer />
                <Switch>
                    <Route path="/dashboard" children={<Dashboard />} />
                    <Route path="/" children={() => mode.dashboard ? setMode({ ...mode, edit: false, dashboard: false }) : null} />
                </Switch>
                <Home />
            </Router>
        </div>
    );
}

export default Color;
