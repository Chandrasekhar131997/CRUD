import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";


function ReadDetails() {
    const {id} =useParams();
    const [employee,setEmployee] =useState([])
    useEffect(()=> {
        axios.get('http://localhost:5000/read'+id)
         
        .then(res =>{
          console.log(res)
          setEmployee(res.data);
        })
          .catch(err => console.log(err))
        
        },[id])
    
  return (
    <div>
       <h1>Employee Details</h1>
       <p>{employee.pepoleHubId}</p>
       <p>{employee.EmployeeName}</p>
      
    </div>
  )
}

export default ReadDetails
