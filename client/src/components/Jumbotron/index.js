// imports react and the style for the jumbotron
import React from "react";
import "./style.css";

// creates jumbotron
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}
 // exports jumbotron
export default Jumbotron;
