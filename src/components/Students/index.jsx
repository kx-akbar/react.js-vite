import React, { useEffect, useState } from "react";
// import menu from "../../utils/student.json";

const url = "https://jsonplaceholder.typicode.com/";

function Fetch() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch(`${url}users/`)
      .then((res) => res.json())
      .then((res) => setTodo(res));
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ margin: "15px" }}>
        <h1>Users</h1>
        {todo.length &&
          todo.map((todos) => {
            return (
              <h1 key={todos.id}>
                {todos.id} - {todos.name}
                <button>select</button>
              </h1>
            );
          })}
      </div>
      <div>
        <h1>Selected User</h1>
      </div>
    </div>
  );
}

export default Fetch;
