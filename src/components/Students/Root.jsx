import React, { useMemo, useState } from "react";
import Navbar from "./Navbar.jsx";
import Students from "./StudentList.jsx";

function Root() {
  console.log("root render");
  const [bool, setBool] = useState(false);
  const state = useMemo(() => bool, []);
  return (
    <div>
      <Navbar state={state} />
      <Students state={state} />
      <button onClick={() => setBool(!bool)}>change</button>
    </div>
  );
}

export default Root;