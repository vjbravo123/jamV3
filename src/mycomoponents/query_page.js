import React from "react";
// import { json } from "react-router-dom";
import "../css/query.css"
import { useNavigate } from "react-router-dom";
export const Querypage = (props) => {
  const navigate = useNavigate();
  const handleResolveQuery = (roll_no) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/querydelete/${props.dbname}`, {
      method: 'POST',
      body: JSON.stringify({ roll_no:roll_no}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(async (data) => {console.log(data)})
  }

  const handleCheckAttendance = (rollNo) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/queryattendance/${props.dbname}/${props.collectionname}`, {
      method: 'POST',
      body: JSON.stringify({ roll_no:rollNo}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(async (data) => {
      // Handle the server response here
      // let a = JSON.parse(data);
      
      console.log("attendance check button is clicked response from server is :", data.attendance)
     await props.setqueried_attendance(data.attendance);
    }
    )


    // props.setCurrentPage("Queryresolverpage");
    navigate("Queryresolverpage")
    props.setpagename("Queryresolverpage")
    // props.setroll_no(rollNo);
    // TODO: implement logic to check attendance for the given roll number
  }

  return (
    <div className="dimv">
      <h2>Student Queries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No.</th>
            <th>Email</th>
            <th>Query</th>
            <th>Check Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.queries.map((query, index) => (
            <tr key={index}>
              <td>{query.name}</td>
              <td>{query.roll_no}</td>
              <td>{query.email}</td>
              <td>{query.question}</td>
              <td>
                <button onClick={() => handleCheckAttendance(query.roll_no)}>Check</button>
              </td>
              <td>
                {query.resolved ? (
                  <span>Resolved</span>
                ) : (
                  <button onClick={() => handleResolveQuery(query.roll_no)}>Resolve</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
