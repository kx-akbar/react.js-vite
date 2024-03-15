import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Students from "./StudentList.jsx";

function Root() {
  console.log("root render");
  const [bool, setBool] = useState(false);
  return (
    <div>
      <Navbar />
      <Students />
      <button onClick={() => setBool(!bool)}>change</button>
    </div>
  );
}

export default Root;
