import { createContext, useReducer } from "react";
import { initialValue, reduce } from "./reduce";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [list, dispatch] = useReducer(reduce, initialValue);

  return (
    <StudentContext.Provider value={[list, dispatch]}>
      {props.children}
    </StudentContext.Provider>
  );
};
