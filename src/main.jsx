import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/Root.jsx";

export const StudentContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
