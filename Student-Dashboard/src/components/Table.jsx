import React from "react";
import student from "../data/student";

const Table = () => {
  return (
    <div>
      <table border="1">
        <caption>Student Dashboard</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>                                                         
            <th>Course</th>
            <th>Branch</th>
            <th>Section</th>
          </tr>
        </thead>

        <tbody>
          {student.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.course}</td>
              <td>{item.branch}</td>
              <td>{item.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;