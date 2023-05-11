import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import styled from "styled-components";
import {CardWrapper,
        CardHeading,
        CardHeader,
        CardSubHeading,
        Dataheading,
        CardBody,
        CardFieldset,
        CardButton,
        InputData,
        InputForm
        
} from '../Style/Dashboard.style';


export default function CardDetail(){


const [employeedetails, setEmployeedetails] = useState({
  pepoleHubId: "",
  employeeCode: "",
  employeeName: "",
  phoneNumber: "",
  EmailID : "",
  PersonalPhoneNumber: "",
  PersonalEmailID: "",
  Designation : "",
  JoiningDate: new Date(),
  Manager: "",
  HRBP: "",
  Unit: "",
  Function: "",
  SubFunction: "",
  EmplymentType : "",
  Grade: "",
  Location: ""
  });
  
  const handleChange = (event) => {
    setEmployeedetails({
      ...employeedetails,
      [event.target.name]: event.target.value
    });
  };
  
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/create',employeedetails)
    .then(res =>{

      setEmployeedetails(res)
    navigate('/')

    })
    .catch(err =>console.log(err));
  };
  

  return(
      <CardWrapper>
        <CardHeading>Employee Details</CardHeading>
        <InputForm  onSubmit={handleSubmit}>
        
         <CardBody> 
         <CardHeader>
          <CardSubHeading>Basic Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>
            
         
         <Dataheading htmlFor="pepoleHubId">PepoleHub ID
            <InputData
          type="text"
          name="pepoleHubId"
          value={employeedetails.pepoleHubId}
          onChange={handleChange}
          />
            </Dataheading>
        
            <Dataheading htmlFor="employeeCode">Employee Code
            <InputData
          type="text"
          name="employeeCode"
          value={employeedetails.employeeCode}
          onChange={handleChange}
          />
            </Dataheading>
           
            <Dataheading htmlFor="employeeName">Employee Name
            <InputData
          type="text"
          name='employeeName'
          value={employeedetails.employeeName}
          onChange={handleChange}
          />
            </Dataheading>
           
            <Dataheading htmlFor="phoneNumber">Phone Number
            <InputData
          type="text"
          name="phoneNumber"
          value={employeedetails.phoneNumber}
          onChange={handleChange}
          />
            </Dataheading>
         
           <Dataheading htmlFor="EmailID">Email ID
           <InputData
          type="text"
          name='EmailID'
          value={employeedetails.EmailID}
          onChange={handleChange}
          />
           </Dataheading>
            
            <Dataheading htmlFor="PersonalPhoneNumber">Personal Phone Number
            <InputData
          type="text"
          name='PersonalPhoneNumber'
          value={employeedetails.PersonalPhoneNumber}
          onChange={handleChange}
          />
            </Dataheading>
          
            <Dataheading htmlFor="PersonalEmailID">Personal Email ID
            <InputData
          type="text"
          name='PersonalEmailID'
          value={employeedetails.PersonalEmailID}
          onChange={handleChange}
          />
            </Dataheading>
           


            
          </CardFieldset>



          <CardHeader>
          <CardSubHeading>Work Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>
         
            <Dataheading htmlFor="Designation">Designation
            <InputData
          type="text"
          name='Designation'
          value={employeedetails.Designation}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="JoiningDate">Joining Date
            <InputData
          type="text"
          name='JoiningDate'
          value={employeedetails.JoiningDate}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="Manager">Manager
            <InputData
          type="text"
          name='Manager'
          value={employeedetails.Manager}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="HRBP">HRBP
            <InputData
          type="text"
          name='HRBP'
          value={employeedetails.HRBP}
          onChange={handleChange}
          />
            </Dataheading>
            <Dataheading htmlFor="Unit">Unit 
            <InputData
          type="text"
          name='Unit'
          value={employeedetails.Unit}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="Function">Function
            <InputData
          type="text"
          name='Function'
          value={employeedetails.Function}
          onChange={handleChange}
          />
            </Dataheading>
            <Dataheading htmlfor="SubFunction">Sub Function
            <InputData
          type="text"
          name='SubFunction'
          value={employeedetails.SubFunction}
          onChange={handleChange}
          />
            </Dataheading>
            <Dataheading htmlFor="EmplymentType">Emplyment Type
            <InputData
          type="text"
          name="EmplymentType"
          value={employeedetails.EmplymentType}
          onChange={handleChange}
          />
            </Dataheading>
            <Dataheading htmlFor="Grade">Grade
            <InputData
          type="text"
          name='Grade'
          value={employeedetails.Grade}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="Location">Location
            <InputData
          type="text"
          name='Location'
          value={employeedetails.Location}
          onChange={handleChange}
          />
            </Dataheading>
            
           
          </CardFieldset>
          
          <CardButton type='submit' >Save</CardButton>
         
        </CardBody> 

             </InputForm>
            
      </CardWrapper>


    );
    
    }










