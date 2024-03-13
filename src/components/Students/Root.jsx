import React from "react";
import Navbar from "./Navbar.jsx";
import Students from "./StudentList.jsx";

function Root() {
  console.log("root render");
  return (
    <div>
      <Navbar />
      <Students />
    </div>
  );
}

export default Root;
