//for nested html content
import React from "react";
import ReactDOM from "react-dom/client";

const headingChildren1 = React.createElement(
  "h1",
  { id: "heading1", key: "heading1" },
  "Hello I am heading1"
);
const headingChildren2 = React.createElement(
  "h1",
  { id: "heading2", key: "heading2" },
  "Hello I am heading2"
);
const headingChildren3 = React.createElement(
  "h1",
  { id: "heading3", key: "heading3" },
  "Hello I am heading3"
);
const headingChildren4 = React.createElement(
  "h1",
  { id: "heading4", key: "heading4" },
  "Hello I am heading4"
);

const parentDiv = React.createElement("div", { id: "parent" }, [
  headingChildren1,
  headingChildren2,
  headingChildren3,
  headingChildren4,
]);

console.log(parentDiv);
//parent can take array of children element if there are multiple children elements

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);
