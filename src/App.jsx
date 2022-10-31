import React from "react";
import Characters from "./components/Characters";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Characters />
    </div>
  );
};

export default App;
