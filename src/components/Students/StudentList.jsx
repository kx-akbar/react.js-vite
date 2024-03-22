import React, { memo, useContext, useState } from "react";
import { StudentContext } from "../../context/Student";

const Students = () => {
  const [list, dispatch] = useContext(StudentContext);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const onChange = () => {
    dispatch({ type: "edit", payload: { key: "name", value: name } });
  };

  const onChangeId = ({ target: { value } }) => {
    setId(value);
  };

  const onChangeName = ({ target: { value } }) => {
    setName(value);
    console.log(name);
  };

  return (
    <div>
      <main>
        <h1>All students {list.length}</h1>
        <div style={{ padding: "10px 20px" }}>
          <input type="text" onChange={onChangeId} placeholder="id" />
          <input type="text" onChange={onChangeName} placeholder="name" />
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
