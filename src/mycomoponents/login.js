import React from 'react'
import "../css/login.css"
import { useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_SERVER_URL;
export const Loginpage = (props) => {

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log(process.env.REACT_APP_SERVER_URL)
    event.preventDefault(); // Prevent the form from reloading the page
    const formData = new FormData(event.target); // Get the form data

    fetch(`${apiUrl}/login/users`, {
      method: 'POST',
      body: JSON.stringify({ Username: formData.get('username'), Password: formData.get('password') }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the server response here

        console.log("login button clicked response from server is :", data)


        if (data.value) {
          props.setteacherloggedin(true)
          props.setdbname(data.data[0].Subcourse)
          props.setcollectioname(data.data[0].Subject)
          
          console.log("subcourse",data.data[0].Subcourse)
          console.log("subject",data.data[0].Subject)
          navigate("teachersdashboard")
          props.setpagename("Teachersdashboard")

          
        }
        else {
          alert("false username or password")
        }

      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  return (
    <div className='bc' id='bc'>
      <div className='todoadd'>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="username"></label>
            <input type="text" name="username" id="username" placeholder='username' />
          </div>
          <div className="input">
            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder='password' />
          </div>
          <div className="btn">
            {/* <input type="submit" className='button' value={"LOGIN"} /> */}
            <button type='submit' className='button'>login</button>
            {/* <div className='button'>Sign-Up</div> */}
          </div>
        </form>
      </div>
    </div>
  )
}


