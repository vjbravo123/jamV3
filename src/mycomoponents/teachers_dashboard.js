import React from 'react'
import "../css/teachers_dashboard.css"
import { useNavigate } from "react-router-dom";
// import data from './sheet_data.js/sheet_data';
// import data from './sheet_data.js/sheet_data'
export const Teachersdashboard = (props) => {
  const navigate = useNavigate();
  
    const handleclick = async()=>{
    await fetch(`${process.env.REACT_APP_SERVER_URL}/attendancetabledata/${props.dbname}/${props.collectionname}`)
    .then( data =>(data.json()))
    .then( async (data)=>
    {
         console.log(data)
         await props.setattendance_data(data);
    })
    navigate("attendance")
    props.setpagename("Attendance")
        // props.setCurrentPage("attendance")


    }
    const handleclick2 =()=>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/documents/${props.dbname}/`)
        .then(response => response.json())
        .then(data => {
          // handle the response data
          // console.log(data);
         props.setqueries(data);
         navigate("Querypage")
         props.setpagename("Querypage")
        })
        .catch(error => {
          // handle any errors
        });
    }
  return (
    <>
    <div className="body">
   <h1>Welcome, Teacher!</h1>
	
	<section>
		<h2>Take Attendance</h2>
		<p>Click the button below to take attendance for your class.</p>
		<button onClick={handleclick}>Take Attendance</button>
	</section>
	
	<section>
		<h2>Student Queries</h2>
		<p>Click the button below to view and respond to student queries.</p>
		<button onClick={handleclick2}>Student Queries</button>
	</section>
<footer>
		<p>&copy; 2023 Teacher Dashboard</p>
	</footer>
    </div>
    </>
  )
}
