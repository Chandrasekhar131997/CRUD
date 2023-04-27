import React from 'react'
import {BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import EmployeeDashboard from './Component/Employee Dashboard';
import InsertDetails from './Component/InsertDetails';
import UpdateDetails from './Component/UpdateDetails';
export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<EmployeeDashboard/>} />
        <Route path='/insertdetails' element={<InsertDetails/>}/>
        <Route path='/updatedetails' element={<UpdateDetails/>}/>
        <Route element ={Error} />
      </Routes>
      </Router>
    </>
  )
}



