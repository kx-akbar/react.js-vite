import React, { memo, useContext } from "react";
// import { StudentContext } from "../../context/Student";

const Students = () => {
  console.log("students render");
  // const [list, dispatch] = useContext(StudentContext);
  return (
    <div>
      <main>
        <h1>All students</h1>
        {/* <h1>All students {list.length}</h1> */}
        {/* {list.map((value) => (
          <h2 key={value.id} style={{ margin: "15px 30px" }}>
            {value.id} {value.name}
            <button
              onClick={() => dispatch({ type: "delete", payload: value.id })}
            >
              delete
            </button>
          </h2>
        ))} */}
      </main>
    </div>
  );
};

export default memo(Students);
