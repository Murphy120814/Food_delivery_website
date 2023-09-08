//for nested html content
import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (
  <h1 id="heading1" className="heading">
    Hello, THis is heading using JSX
  </h1>
); //this is called as jsx element

//Babel will convert jsx element into createELement object Babel will be managed by the parcel

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
