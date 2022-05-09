import "./content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos

import Home from "../../views/exemples/home";
import About from "../../views/exemples/about";
import Param from "../../views/exemples/param";
import NotFound from "../../views/exemples/notFond";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" exact element={<Param />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*"  element={<NotFound/>} />
    </Routes>
  </main>
);

export default Content;
