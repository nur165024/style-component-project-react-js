import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Components";
import { GlobalStyle } from "./Global.style";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
