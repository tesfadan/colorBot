import React from "react";
import { Provider } from "./Context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header.jsx";
import Home from "./Pages/Home";


function App() {
  return (
    // Context provider 
    <Provider>
      <Router>
        <Header />
        <Switch>
          {/* App pages go here */}
          <Route path="/" children={<Home />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
