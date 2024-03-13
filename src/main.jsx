import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/Students/Root.jsx";
import { StudentProvider } from "./context/StudentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentProvider>
      <Root />
    </StudentProvider>
  </React.StrictMode>
);
