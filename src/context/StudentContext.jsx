import { createContext, useState } from "react";
import { student } from "../utils/menu.js";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [list, setList] = useState(student);
  console.log("context render");

  return (
    <StudentContext.Provider value={[list, setList]}>
      {props.children}
    </StudentContext.Provider>
  );
};
