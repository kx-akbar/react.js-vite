import React, { memo, useContext, useRef } from "react";
import { StudentContext } from "../../context/Student";

const Students = () => {
  const [list, dispatch] = useContext(StudentContext);
  const refId = useRef();
  const refName = useRef();
  const onChange = () => {
    if (refId.current.placeholder == "name") {
      dispatch({
        type: "edit",
        payload: { key: refId.current.placeholder, value: refId.current.value },
      });
    } else {
      dispatch({
        type: "edit",
        payload: {
          key: refName.current.placeholder,
          value: refName.current.value,
        },
      });
    }
  };

  return (
    <div>
      <main>
        <h1>All students {list.length}</h1>
        <div style={{ padding: "10px 20px" }}>
          <input type="text" ref={refId} placeholder="id" />
          <input type="text" ref={refName} placeholder="name" />
          <button onClick={onChange}>search</button>
        </div>
        {list.map((value) => (
          <h2 key={value.id} style={{ margin: "15px 30px" }}>
            {value.id} {value.name}
            <button
              onClick={() => dispatch({ type: "delete", payload: value.id })}
            >
              delete
            </button>
          </h2>
        ))}
      </main>
    </div>
  );
};

export default memo(Students);
