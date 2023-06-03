// import logo from './logo.svg';
// import './App.css';
import { NotFoundPage } from "./mycomoponents/errorpage";
import { Header } from "./mycomoponents/header";
import { About } from "./mycomoponents/aboutpage";
import { Loginpage } from "./mycomoponents/login";
import { Studentsdashboard } from "./mycomoponents/studentsdashboard";
import { StudentsProfile } from "./mycomoponents/students_Profile";
import { StudentsLogin } from "./mycomoponents/studentslogin";
import { Homepage } from "./mycomoponents/homepage";
import { Attendancepage } from "./mycomoponents/attendance";
import { Querypage } from "./mycomoponents/query_page";
import { Queryresolver } from "./mycomoponents/query_resolving";
import { Teachersdashboard } from "./mycomoponents/teachers_dashboard";
import { Footer } from "./mycomoponents/footer";
import { Signup } from './mycomoponents/signup';
import { Admincomponent } from './mycomoponents/admincomponent';
// import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from 'react';
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  // const [no_of_working_days, set_no_of_working_days] = useState(50);
  const no_of_working_days = 26;
  const [presentdays, setpresentdays] = useState(40);
  // const [currentpage, setCurrentPage] = useState("homepage");
  const [attendancce_result, setattendance_result] = useState([]);
  const [queries, setqueries] = useState([]);
  const [subarr, setsubarr] = useState([]);
  const [queried_attendance, setqueried_attendance] = useState([]);
  const [attendance_data, setattendance_data] = useState({});
  const [teacherloggedin, setteacherloggedin] = useState(false);
  const [dbname, setdbname] = useState('');
  const [roll_no, setroll_no] = useState('');
  const [collectionname, setcollectioname] = useState('');
  const [pagename,setpagename] = useState("Hoempage");

  

  return (
    <Router>
      <Routes>


        <Route exact path="/about"  element={<> <Header pagename={pagename}/>  <About/> <Footer/> </> } />
        <Route exact path="/admin"  element={<> <Header pagename={pagename}/>  <Admincomponent/> <Footer/> </> } />

        <Route exact path="/"  element={<> <Homepage setpagename={setpagename}/> <Footer/> </> } />
        
        <Route exact path="/teacherlogin" element={<> <Header pagename={pagename}/> <Loginpage setpagename={setpagename} setcollectioname={setcollectioname} setdbname={setdbname} setteacherloggedin={setteacherloggedin} /> <Footer/> </> } />

        <Route exact path="/signup" element={<> <Header pagename={pagename}/> <Signup/> <Footer/> </> } />

        <Route exact path="/studentslogin" element={ <> <Header pagename={pagename}/> <StudentsLogin setpagename={setpagename} setroll_no={setroll_no} setsubarr={setsubarr} dbname={dbname} setdbname={setdbname} /> <Footer/> </>} />

        <Route exact path="/studentslogin/StudentsProfile/Studentsdashboard" element={ <> <Studentsdashboard attendancce_result={attendancce_result} dbname={dbname} workingdays={no_of_working_days} presentdays={presentdays}/> </> } />
       
      <Route exact path="/studentslogin/StudentsProfile" element={  <StudentsProfile setpagename={setpagename} roll_no={roll_no} dbname={dbname} subarr={subarr} setattendance_result={setattendance_result}  setpresentdays={setpresentdays} /> } />



        <Route exact path="/teacherlogin/teachersdashboard" element={ teacherloggedin ?
         <> 
         <Header pagename={pagename} /> <Teachersdashboard setpagename={setpagename} dbname={dbname} collectionname={collectionname} setattendance_data={setattendance_data} setqueries={setqueries} /> 
         </> 
        
        :
         <>
          <Header/> <NotFoundPage/> <Footer/> 
        </> 

        } />

        <Route exact path="/teacherlogin/teachersdashboard/attendance" element={ teacherloggedin ?
        <> 
        <Header pagename={pagename}/> <Attendancepage  dbname={dbname} collectionname={collectionname} attendance_data={attendance_data}/> <Footer/> 
        </>
        :
        <>
        <Header/> <NotFoundPage/> <Footer/> 
      </> 
      } /> 


        <Route exact path="/teacherlogin/teachersdashboard/Querypage" element={ teacherloggedin ?
        <> 
        <Header pagename={pagename}/> <Querypage setpagename={setpagename} dbname={dbname}collectionname={collectionname} setqueried_attendance={setqueried_attendance} queries={queries} /> <Footer /> 
        </>
        :
        <>
           <Header pagename={pagename}/> <NotFoundPage/> <Footer/> 
        </> 
      } /> 


        <Route exact path="/teacherlogin/teachersdashboard/Querypage/Queryresolverpage" element={<> <Header pagename={pagename}/> <Queryresolver  dbname={dbname}collectionname={collectionname} setqueried_attendance={setqueried_attendance} queried_attendance={queried_attendance}/> <Footer/> </>} /> 
        



      </Routes>
    </Router>
  );
}


export default App;

