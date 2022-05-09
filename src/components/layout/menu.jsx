import "./menu.css";
import React from "react";

import { Link } from "react-router-dom";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/param/123">Param #01</Link>
        </li>
        '
        <li>
          <Link to="/param/321">Param #02</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/nãoExiste">nãoExiste</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
