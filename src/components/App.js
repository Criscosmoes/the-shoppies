import React from "react";
import "../App.css";

// components

import NavBar from "./NavBar";
import MiddleSection from "./MiddleSection";

const App = () => {
  return (
    <div className="main--container">
      <NavBar />
      <MiddleSection />
    </div>
  );
};

export default App;
