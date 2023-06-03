import React from 'react';
import { useNavigate } from "react-router-dom";
import "../css/StudentsProfile.css"
export const StudentsProfile = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout functionality here
    navigate("/studentslogin");
  };

  const handleSubjectClick = (subject) => {
    console.log(props.dbname);
    fetch(`${process.env.REACT_APP_SERVER_URL}/studentAttendancePage`, {
      method: 'POST',
      body: JSON.stringify({Subject:subject ,dbname:props.dbname , roll_no:props.roll_no}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
          navigate("Studentsdashboard")
          props.setpagename("Studentsdashboard")
          props.setpresentdays(data.attendance)
          props.setattendance_result(data.attendance_data)

    })
    .catch(error => {
      console.log('Error:', error);
    });
    
  };

  return (
    <div className="students-profile">
      <header className='hdder'>
        <div className="profile-section">
          <span className="profile-icon">&#128221;</span>
          <h2>Welcome, [Student Name]</h2>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <main className='mainnn'>
        <h3>Check Attendance</h3>
        <ul>
          <li>
            <button onClick={() => handleSubjectClick(props.subarr[0])}>{props.subarr[0]}</button>
          </li>
          <li>
            <button onClick={() => handleSubjectClick(props.subarr[1])}>{props.subarr[1]}</button>
          </li>
          <li>
            <button onClick={() => handleSubjectClick(props.subarr[2])}>{props.subarr[2]}</button>
          </li>
          {/* Add more subjects as needed */}
        </ul>
      </main>
    </div>
  );
};
