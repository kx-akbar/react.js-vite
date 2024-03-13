import React, { useContext } from "react";
import { StudentContext } from "../../context/StudentContext.jsx";

function Students() {
  const [list, setList] = useContext(StudentContext);
  const onDelete = (id) => {
    let res = list.filter((val) => val.id !== id);
    setList(res);
  };
  console.log("students render", list);
  return (
    <div>
      <main>
        <h1>All students {list.length}</h1>
        {list.map((value) => (
          <h2 key={value.id} style={{ margin: "15px 30px" }}>
            {value.id} {value.name}
            <button onClick={() => onDelete(value.id)}>delete</button>
          </h2>
        ))}
      </main>
    </div>
  );
}

export default Students;
