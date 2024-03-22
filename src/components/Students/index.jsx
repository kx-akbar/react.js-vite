import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/";

function Fetch() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${url}users/`)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  const onSelect = (id) => {
    fetch(`${url}users/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setUser(res));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ margin: "15px" }}>
        <h1>Users</h1>
        {users.map((user) => {
          return (
            <h1 key={user.id}>
              {user.id} - {user.name}
              <button onClick={() => onSelect(user.id)}>select</button>
            </h1>
          );
        })}
      </div>
      <div>
        <h1>Selected User {users.id}</h1>
        <div>
          <h5>
            Name: {user.name} {user.surname}
          </h5>
          <h4>Email: {user.email}</h4>
          <h4>Phone: {user.phone}</h4>
        </div>
      </div>
    </div>
  );
}

export default Fetch;
