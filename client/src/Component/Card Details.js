import { useEffect} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {CardWrapper,
        CardHeading,
        CardHeader,
        CardSubHeading,
        CardBody,
        CardButton,
        ButtonCollection,
        Gettable,
        Gettablehead,
        Gettr,
        Getth,
        Gettablebody,
        Gettd
        
} from '../Style/Dashboard.style';
import { useState } from "react";



export default function CardDetail(){

const[data,setData] =useState([]);
const[value,setValue]=useState([])

function GetEmployees(){
  
  axios({
    method:"GET",
    url:"http://localhost:5000/employee",
    data: "the data to get"
  })
.then(res =>
  setValue(res.data))
  .catch(err => console.log(err));

}
useEffect(()=>{
  GetEmployees();
},[])


   const navigate = useNavigate();

 function  HandleClick () {


navigate('/insertdetails')
  }

  function EditClick(){
    navigate('/updatedetails')
  }

  

  function DeleteClick (id) {
    axios({
      method: "DELETE",
      url: `http://localhost:5000//user/`+id,
    })
      .then(res => {
       window.location.reload();
      })
      
      
      .catch(err => console.log(err));
  }

    return(
      <CardWrapper>
        <CardHeading>Employee Details</CardHeading>
        
       
         <CardBody> 
         <CardHeader>
          <CardSubHeading>Basic Information</CardSubHeading>
          </CardHeader>
        
          <Gettable>
          <Gettablehead>
            <Gettr>
              <Getth>PeopleHub ID</Getth>
              <Getth>Employee Code</Getth>
              <Getth>Employee Name</Getth>
              <Getth>Phone Number</Getth>
              <Getth>Email ID</Getth>
              <Getth>Personal Phone Number</Getth>
              <Getth>Personal Email ID</Getth>
            </Gettr>
          </Gettablehead>
          <Gettablebody>
          {value.map((employee,index) =>{
             return(
          <Gettr key={index}>
               <Gettd>{employee.pepoleHubId}</Gettd>
               <Gettd>{employee.employeeCode}</Gettd>
               <Gettd>{employee.employeeName}</Gettd>
               <Gettd>{employee.phoneNumber}</Gettd>
               <Gettd>{employee.EmailID}</Gettd>
               <Gettd>{employee.PersonalPhoneNumber}</Gettd>
               <Gettd>{employee.PersonalEmailID}</Gettd>
          </Gettr>   
             )  
 })}

</Gettablebody>
</Gettable>





           <CardHeader>
          <CardSubHeading>Work Information</CardSubHeading>
          </CardHeader>
          <Gettable>
          <Gettablehead>
            <Gettr>
              <Getth>Designation</Getth>
              <Getth>Joining Date</Getth>
              <Getth>Manager</Getth>
              <Getth>HRBP</Getth>
              <Getth>Unit</Getth>
              <Getth>Function</Getth>
              <Getth>Sub Function</Getth>
              <Getth>Emplyment Type</Getth>
              <Getth>Grade</Getth>
              <Getth>Location</Getth>
            </Gettr>
          </Gettablehead>
          <Gettablebody>
          {value.map((employee,index)=>{
            return(
          <Gettr key={index}>
               <Gettd>{employee.Designation}</Gettd>
               <Gettd>{employee.JoiningDate}</Gettd>
               <Gettd>{employee.Manager}</Gettd>
               <Gettd>{employee.HRBP}</Gettd>
               <Gettd>{employee.Unit}</Gettd>
               <Gettd>{employee.Function}</Gettd>
               <Gettd>{employee.SubFunction}</Gettd>
               <Gettd>{employee.EmplymentType}</Gettd>
               <Gettd>{employee.Grade}</Gettd>
               <Gettd>{employee.Location}</Gettd>
          </Gettr>  
            )   
 })}

</Gettablebody>
</Gettable>    



    
        </CardBody> 
       
        <ButtonCollection>
            <CardButton type='submit'>Exit</CardButton>
            <CardButton type='submit' onClick={()=>HandleClick()} ><Link to={`/create/${value.Id}`} > Create</Link></CardButton>
            {/* <CardButton type='submit' ><Link to={`/read/${employee.Id}`} >Read</Link></CardButton> */}
            <CardButton type='submit'onClick={()=>EditClick()}><Link to={`/update/${value.Id}`}>Edit</Link></CardButton>
            <CardButton type='submit' onClick={()=> DeleteClick(value.Id)}>Delete</CardButton>
            </ButtonCollection>
      </CardWrapper>
    );
    
    }

  

