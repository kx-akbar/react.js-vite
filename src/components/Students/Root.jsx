import React, { useCallback, useMemo, useState } from "react";
import Navbar from "./Navbar.jsx";
import Students from "./StudentList.jsx";

function Root() {
  console.log("root render");
  const [value, setValue] = useState("webbrain");
  const state = useMemo(() => value, []);
  const callback = useCallback((props) => value + " " + props, []);
  return (
    <div>
      <Navbar state={state} />
      <Students callback={callback} />
      <button onClick={() => setValue(!value)}>change</button>
    </div>
  );
}

export default Root;
