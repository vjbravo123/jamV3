import React from 'react'
import { useNavigate } from "react-router-dom";
import "../css/homepage.css"
import logo from '../images/logo.jpg';
import naac3 from '../images/naac3.jpg';
import logo2 from '../images/logo2.jpg';
// import homeph from "../../images/rm222batch3-kul-01.jpg";
export const Homepage = (props) => {
  const navigate = useNavigate();
  const handleTeacherLoginClick = () => {

    navigate("/teacherlogin")
    props.setpagename("Teacherlogin")
    // props.setCurrentPage("teacherlogin");
  };
  const handleaboutclick=()=>{
    navigate("/about")
    props.setpagename("About")
  }
  const handleadminclick=()=>{
    // navigate("/admin")
    props.setpagename("Admin")
  }
  const handleStudentLoginClick = () => {
    navigate("/studentslogin")
    props.setpagename("StudentsLogin")
    // props.setCurrentPage("studentslogin");
  };

  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>

      <div className="sidebar">
        <header>Joshi sidebar</header>
        <ul>
          <li><a className="active" href="/"><i className="fas fa-qrcode"></i>Dashboard</a></li>
          <li><a className="active" href="/"><i className="fas fa-link"></i>Shortcuts</a></li>
          <li><a className="active" href="/"><i className="fas fa-stream"></i>Overview</a></li>
          <li><a className="active" href="/"><i className="fas fa-calendar-week"></i>Events</a></li>
          <li><a className="active" onClick={handleaboutclick} href="/"><i className="far fa-question-circle"></i>About</a></li>
          <li><a className="active" onClick={handleadminclick} href="/admin"><i className="fas fa-sliders-h"></i>Admin</a></li>
          <li><a className="active" href="/"><i className="far fa-envelope"></i>Contact</a></li>
        </ul>
      </div>


      <div className="flex">
        <img className="ig" src={logo} alt="" />
        <img className="ig ig2" src={naac3} alt="" />
        <img className="ig ig3" src={logo2} alt="" />
      </div>
      
      <div className="flexing">
        <img className="ig" src={logo} alt="" />
      </div>

      <div className="bg">
        <h1><u>Teacher and Student Login</u></h1>

        <div className="login">
          <button onClick={handleTeacherLoginClick}>
            <h2>Teacher Login</h2>
            <p>Click here to login as a teacher</p>
          </button>
        </div>

        <div className="login">
          <button onClick={handleStudentLoginClick}>
            <h2>Student Login</h2>
            <p>Click here to login as a student</p>
          </button>
        </div>

     </div>
    </>
  );
}
