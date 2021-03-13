import React from "react";
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
