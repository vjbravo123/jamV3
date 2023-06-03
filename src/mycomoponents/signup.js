// import React from 'react';
import React, { useState } from 'react';
import '../css/sup.css';
import { useNavigate } from "react-router-dom";
export const Signup = (props) => {

  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [subCourse, setSubCourse] = useState('');
  const navigate = useNavigate();

  const renderSubCourses = () => {
    if (course === 'B.sc.') {
      return (
        <select
          id="subCourse"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          value={subCourse}
          onChange={(e) => setSubCourse(e.target.value)}
        >
          <option value="">Select Sub Course</option>
          <option value="Bsc phy Sci cs">
            Bsc phy Sci cs
          </option>
          <option value="Bsc phy Sci chem">
            Bsc phy Sci chem
          </option>
          <option value="B.sc. Hons. Electronics">Bsc Hons Electronics</option>
          <option value="B.sc. Mathematical Science">Bsc Mathematical Science</option>
        </select>
      );
    } else if (course === 'B.com') {
      return (
        <select
          id="subCourse"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          value={subCourse}
          onChange={(e) => setSubCourse(e.target.value)}
        >
          <option value="">Select Sub Course</option>
          <option value="Bcom Hons">BCom Hons</option>

        </select>
      );
    } else if (course === 'B.A.') {
      return (
        <select
          id="subCourse"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          value={subCourse}
          onChange={(e) => setSubCourse(e.target.value)}
        >
          <option value="">Select Sub Course</option>
          <option value="BA_Jrnlsm_Hons">B.A. Jrnlsm Hons</option>
          <option value="BA_Biz_Econ_Hons">B.A. Biz Econ Hons</option>
          <option value="BA_Eng_Hons">B.A. Eng Hons</option>
          <option value="BA_Pol_Sci_Hons">B.A. Pol Sci Hons</option>
          <option value="BA_OMSP_Math">B.A. (OMSP, Math)</option>
          <option value="BA_Hindi_Hons">B.A. Hindi Hons</option>
          <option value="BA_Comp_Appl_Pol_Sci">
            B.A. (Comp Appl, Pol Sci)
          </option>
          <option value="BA_Hindi_Hist">B.A. (Hindi, Hist)</option>
          <option value="BA_OMSP_Hist">B.A. (OMSP, Hist)</option>
          <option value="BA_Comp_Appl_Econ">
            B.A. (Comp Appl, Econ)
          </option>
          <option value="BA_Comp_Appl_Math">
            B.A. (Comp Appl, Math)
          </option>
          <option value="BA_Eng_Econ">B.A. (Eng, Econ)</option>
          <option value="BA_OMSP_Econ">B.A. (OMSP, Econ)</option>
          <option value="BA_Eng_Math">B.A. (Eng, Math)</option>
          <option value="BA_Eng_Hist">B.A. (Eng, Hist)</option>
          <option value="BA_Comp_Appl_Hist">
            B.A. (Comp Appl, Hist)
          </option>
          <option value="BA_OMSP_Pol_Sci">
            B.A. (OMSP, Pol Sci)
          </option>
          <option value="BA_Hindi_Math">B.A. (Hindi, Math)</option>
          <option value="BA_Hindi_Econ">B.A. (Hindi, Econ)</option>
          <option value="BA_Hindi_Pol_Sci">
            B.A. (Hindi, Pol Sci)
          </option>
          <option value="BA_Eng_Pol_Sci">
            B.A. (Eng, Pol Sci)
          </option>
        </select>
      );

    }
  }


  const handleSubmit = (event) => {
 
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);

    fetch(`${process.env.REACT_APP_SERVER_URL}/submit-form`, {
      method: 'POST',
      body: JSON.stringify({ username: formData.get('username'), roll_no: formData.get('roll_no'), password: formData.get('password'), id: formData.get('id')  , year: year, subCourse:subCourse   }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {

        if (data.value) {
          alert("signup succesful")
          navigate("/studentslogin")
        }
        else {
          alert("signup failed")
          console.log("false username or paasword")
        }

        console.log(data)


      })
      .catch(error => {
        console.log(`error happened ${error}`)
      });
  };

  return (
    <div className="bomdy">
          <form onSubmit={handleSubmit} >
      <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="roll_no" placeholder="Roll no" />
            <input type="password" name="password" placeholder="Password" />
            <input type="text" name="id" placeholder="Id" />

            <input className='subb' type="submit" name="signup_submit" value="Sign me up" />

        </div>



        <div className="rightt">

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="course">
              Course:
            </label>
            <select
              id="course"
              style={{ width: '100%', padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              <option value="B.sc.">B.sc.</option>
              {/* <option value="course1">B.sc.</option> */}
              <option value="B.com">B.com</option>
              <option value="B.A.">B.A.</option>
            </select>
          </div>


          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="subCourse">
              Sub Course:
            </label>
            {renderSubCourses()}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="year">
              Year:
            </label>
            <input
              id="year"
              type="number"
              min="1"
              max="3"
              style={{ width: '100%', padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

        </div>

      </div>
      
      </form>
    </div>

  )

}
