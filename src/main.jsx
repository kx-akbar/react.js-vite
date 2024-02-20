import React from "react";
import ReactDOM from "react-dom/client";
// import LogIn from "./LogIn/LogIn";
// import ResetPassword from "./Reset-Password/ResetPassword.jsx";
// import EnterCode from "./Enter-Code/EnterCode.jsx";
import NewPassword from "./New-Password/NewPassword.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LogIn /> */}
    {/* <ResetPassword /> */}
    <NewPassword />
    {/* <EnterCode /> */}
  </React.StrictMode>
);
