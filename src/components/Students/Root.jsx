import React, { useState } from "react";
import Fetch from "./index.jsx";
// import Navbar from "./Navbar.jsx";
// import Students from "./StudentList.jsx";

function Root() {
  // const [value, setValue] = useState("webbrain");
  return (
    <div>
      <Fetch />
      {/* <Navbar /> */}
      {/* <Students /> */}
      {/* <button onClick={() => setValue(!value)}>change</button> */}
    </div>
  );
}

export default Root;
