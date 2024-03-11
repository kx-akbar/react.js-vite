import React, { useContext } from "react";
import { StudentContext } from "../main";
// import { student } from "../menu/menu.js";

function Students({ list, onDelete }) {
  const context = useContext(StudentContext);
  console.log("students render", context);
  return (
    <div>
      <main>
        <h1>
          All students {list.length > 0 ? list.length : "Studentlar qolmadi"}
        </h1>
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
