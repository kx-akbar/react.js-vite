import React, { useState } from "react";
import { students } from "./Students";
import "./ListStyle.css";

function List() {
  const [data, setdata] = useState(students);

  const onDeleteUser = (id) => {
    const updatedStudents = data.filter((student) => student.id !== id);
    setdata(updatedStudents);
  };
  return (
    <div className="main">
      <h1 className="h1 fw-bolder">Students List</h1>
      <table
        className="table table-dark table-striped"
        style={{ width: "50%" }}
      >
        <thead className="thead-light">
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Status</th>
            <th scope="col">Year</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr className="text-center" key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.status.toUpperCase()}</td>
                <td>{value.year}</td>
                <td>
                  <button
                    className="btn btn-dark border-light"
                    onClick={() => onDeleteUser(value.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger border-light">Edit</button>
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
