import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/Students/Root.jsx";
import { RootContext } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);
