import React, { useState } from 'react';

export const Admincomponent = () => {
  const [data, setData] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [subjects, setSubjects] = useState(['']);
  const [subCourse, setSubCourse] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/addnew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, year, subjects, subCourse }),
      });
  
      if (response.ok) {
        console.log('Data inserted successfully');
      } else {
        console.log('Data insertion failed');
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  

  const handleSubjectChange = (index, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = value;
    setSubjects(updatedSubjects);
  };

  const addSubjectField = () => {
    setSubjects([...subjects, '']);
  };

  const removeSubjectField = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

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

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
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
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Subjects:</label>
        {subjects.map((subject, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '5px' }}>
            <input
              type="text"
              style={{ flex: 1, padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
              value={subject}
              onChange={(e) => handleSubjectChange(index, e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeSubjectField(index)}
              style={{
                marginLeft: '10px',
                padding: '6px 12px',
                fontSize: '12px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSubjectField}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
        >
          Add Subject
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="data">
          Data:
        </label>
        <textarea
          id="data"
          rows={4}
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            resize: 'vertical',
            height: '120px',
          }}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <br />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '4px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};