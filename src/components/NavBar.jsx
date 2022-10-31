import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <h1>Rick and Morty API</h1>
      <div>
        <ul>
          <li>Characters</li>
          <li>Planets</li>
          <li>Alive People</li>
          <li>Dead People</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
