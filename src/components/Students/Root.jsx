import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Students from "./StudentList.jsx";

function Root() {
  console.log("root render");
  const [value, setValue] = useState("webbrain");
  return (
    <div>
      <Navbar />
      <Students />
      <button onClick={() => setValue(!value)}>change</button>
    </div>
  );
}

export default Root;
