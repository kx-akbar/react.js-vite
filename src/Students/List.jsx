import React, { useState } from "react";
import { students } from "./Students";
import "./ListStyle.css";

function List() {
  const [data, setData] = useState(students);
  const [selected, setSelected] = useState({
    select: null,
  });

  const onRemoveUser = function (usrId) {
    let ar = data.filter((val) => val.id != usrId);
    setData(ar);
  };

  const onChanges = function (event) {
    let { value, placeholder } = event.target;
    let res = students.filter((val) => {
      return val[placeholder].toLowerCase().includes(value.toLowerCase());
    });
    setData(res);
  };

  const onUserSelect = function (user) {
    if (selected.select == null) setSelected({ select: user });
    else {
      let res = data.map((val) => {
        return val.id == selected.select?.id ? selected.select : val;
      });
      setSelected({ select: null });
      setData(res);
    }
  };

  return (
    <div className="main">
      <h1 className="fw-bolder">Students List</h1>
      <div className="d-flex gap-3">
        <input
          type="text"
          className="form-control mb-3"
          onChange={onChanges}
          placeholder="name"
        />
        <input
          type="text"
          className="form-control mb-3"
          onChange={onChanges}
          placeholder="status"
        />
      </div>
      <table className="table table-hover table-dark w-75">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Year</th>
            <th scope="col">Change</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>
                  {selected.select?.id == value.id ? (
                    <input
                      type="text"
                      className="form-control w-75"
                      defaultValue={selected.select.name}
                      onChange={({ target }) =>
                        setSelected({
                          select: { ...selected.select, name: target.value },
                        })
                      }
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>
                  {selected.select?.id == value.id ? (
                    <input
                      type="text"
                      className="form-control w-75"
                      defaultValue={selected.select?.status.toUpperCase()}
                      onChange={({ target }) =>
                        setSelected({
                          select: { ...selected.select, status: target.value },
                        })
                      }
                    />
                  ) : (
                    value.status.toUpperCase()
                  )}
                </td>
                <td>{value.year}</td>
                <td>
                  <button
                    className="btn border-light bg-danger text-light"
                    onClick={() => onUserSelect(value)}
                  >
                    {selected.select?.id == value.id ? "save" : "change"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn border-light btn-dark"
                    onClick={() => onRemoveUser(value.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
