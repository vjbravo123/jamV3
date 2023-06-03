import React, { useRef, useEffect } from 'react';
import '../css/studentslogin.css';
import logo from "../images/logo.jpg";
import { useNavigate } from "react-router-dom";

export const StudentsLogin = (props) => {
  const navigate = useNavigate();
  const loginButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        loginButtonRef.current.click();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(`${process.env.REACT_APP_SERVER_URL}/studentslogin/students`, {
      method: 'POST',
      body: JSON.stringify({Username: formData.get('username'), Password: formData.get('password')}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("login button clicked response from server is :", data)

      if(data.value){
        navigate("StudentsProfile")
        props.setpagename("StudentsProfile")
        props.setsubarr(data.subarr)
        props.setdbname(data.Subcourse)
        props.setroll_no(data.roll_no)
      } else {
        console.log("false username or password",data)
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
  };

  const showMenu = () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.right = '0';
  };

  const hideMenu = () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.right = '-200px';
  };

  const handleclick = () => {
    navigate("/signup");
  };

  return (
    <section className="header">
      <nav>
        <a href="/">
          <img className="logo" src={logo} alt="Logo description" />
        </a>

        <div className="navLinks" id="nav-links">
          <i className="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      </nav>

      <div className="studentslogin-form">
        <h3>Login Here</h3>

        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <br />
          <input type="text" name="username" placeholder="Enter your username" />
          <br />

          <label>Password:</label>
          <br />
          <input type="password" name="password" placeholder="Enter your password" />

          <div className="flexx">
            <button className='newuserbtn' onClick={handleclick}>New User?</button>
            <button ref={loginButtonRef} type='submit' className='btnn'>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};
