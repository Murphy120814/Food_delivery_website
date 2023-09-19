import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./src/components/App";
import { appRouter } from "./src/components/App";
import { RouterProvider } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
