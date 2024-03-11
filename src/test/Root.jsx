import React, { useState } from "react";
import { student } from "../menu/menu";
import Navbar from "./Navbar.jsx";
import Students from "./StudentList.jsx";

function Root() {
    console.log("root render");
  const [list, setList] = useState(student);
  const onDelete = (id) => {
    let res = list.filter((val) => val.id !== id);
    setList(res);
  };
  return (
    <div>
      <Navbar />
      <Students list={list} onDelete={onDelete}/>
    </div>
  );
}

export default Root;
