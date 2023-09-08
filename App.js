//for nested html content
import React from "react";
import ReactDOM from "react-dom/client";

const AnotherFunctionalComponent = () => (
  <h1 id="heading3"> THis is called as component composition!!! </h1>
);

const Heading2 = () => (
  <h1>THis is JSX element returning using implicit return</h1>
);
//functional component using Explicit return
function Heading() {
  return (
    <>
      <h1 className="heading" id="heading1">
        Hello, this is functional component
      </h1>
      <Heading2 />
      {AnotherFunctionalComponent()}
    </>
  );
}

//functional component using explicit return

//Babel will convert jsx element into createELement object Babel will be managed by the parcel

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
