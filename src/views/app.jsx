import React from "react";
import "./app.css";

import { BrowserRouter as Router } from "react-router-dom";

import Content from "../components/layout/content";
import Menu from "../components/layout/menu";

const App = (props) => (
  <div className="App">
    <Router>
      <Menu />
      <Content />
    </Router>
  </div>
);

export default App;
