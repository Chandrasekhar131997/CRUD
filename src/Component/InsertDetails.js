import { useState } from 'react';
import React  from 'react';
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
    peoplehubid: "",
    employeecode: "",
    employeename: "",
    phonenumber: "",
    emailid: "",
    personalphonenumber: "",
    personalemailid: "",
    designation: "",
    joiningdate: "",
    manager: "",
    hrbp: "",
    unit: "",
    function: "",
    subfunction: "",
    employeetype: "",
    grade: "",
    location: ""
  });
  
  const handleChange = (event) => {
    setEmployeedetails({
      ...employeedetails,
      [event.target.name]: event.target.value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  function handleSaveEmployee(event) {
    console.log("Employee details saved");
    console.log(employeedetails);
  }




    return(
      <CardWrapper>
        <CardHeading>Employee Details</CardHeading>
        <InputForm  onSubmit={handleSubmit}>
        
         <CardBody> 
         <CardHeader>
          <CardSubHeading>Basic Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>
            
         
         <Dataheading htmlFor="peoplehubid">PeopleHub ID
            <InputData
          type="text"
          name="peoplehubid"
          value={employeedetails.peoplehubid}
          onChange={handleChange}
          />
            </Dataheading>
        
            <Dataheading htmlFor="employeecode">Employee Code
            <InputData
          type="text"
          name="employeecode"
          value={employeedetails.employeecode}
          onChange={handleChange}
          />
            </Dataheading>
           
            <Dataheading htmlFor="employeename">Employee Name
            <InputData
          type="text"
          name='employeename'
          value={employeedetails.employeename}
          onChange={handleChange}
          defaultValue="@abcdef"
          />
            </Dataheading>
           
            <Dataheading htmlFor="phonenumber">Phone Number
            <InputData
          type="text"
          name="phonenumber"
          value={employeedetails.phonenumber}
          onChange={handleChange}
          />
            </Dataheading>
         
           <Dataheading htmlFor="emailid">Email ID
           <InputData
          type="text"
          name='emailid'
          value={employeedetails.emailid}
          onChange={handleChange}
          />
           </Dataheading>
            
            <Dataheading htmlFor="personalphonenumber">Personal Phone Number
            <InputData
          type="text"
          name='personalphonenumber'
          value={employeedetails.personalphonenumber}
          onChange={handleChange}
          />
            </Dataheading>
          
            <Dataheading htmlFor="personalemailid">Personal Email ID
            <InputData
          type="text"
          name='personalemailid'
          value={employeedetails.personalemailid}
          onChange={handleChange}
          />
            </Dataheading>
           


            
          </CardFieldset>



          <CardHeader>
          <CardSubHeading>Work Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>
         
            <Dataheading htmlFor="designation">Designation
            <InputData
          type="text"
          name='designation'
          value={employeedetails.designation}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="joiningdate">Joining Date
            <InputData
          type="text"
          name='joiningdate'
          value={employeedetails.joiningdate}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="manager">Manager
            <InputData
          type="text"
          name='manager'
          value={employeedetails.manager}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="hrbp">HRBP
            <InputData
          type="text"
          name='hrbp'
          value={employeedetails.hrbp}
          onChange={handleChange}
          />
            </Dataheading>
            <Dataheading htmlFor="unit">Unit 
            <InputData
          type="text"
          name='unit'
          value={employeedetails.unit}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="function">Function
            <InputData
          type="text"
          name='function'
          value={employeedetails.function}
          onChange={handleChange}
          />
            </Dataheading>
            <Dataheading htmlfor="subfunction">Sub Function
            <InputData
          type="text"
          name='subfunction'
          value={employeedetails.subfunction}
          onChange={handleChange}
          />
            </Dataheading>
            <Dataheading htmlFor="employeetype">Emplyment Type
            <InputData
          type="text"
          name="employeetype"
          value={employeedetails.employeetype}
          onChange={handleChange}
          />
            </Dataheading>
            <Dataheading htmlFor="grade">Grade
            <InputData
          type="text"
          name='grade'
          value={employeedetails.grade}
          onChange={handleChange}
          />
            </Dataheading>

            <Dataheading htmlFor="location">Location
            <InputData
          type="text"
          name='location'
          value={employeedetails.location}
          onChange={handleChange}
          />
            </Dataheading>
            {/* <CardButton type='submit' onClick={handleSave}>Save</CardButton> */}
           
          </CardFieldset>
          
        
         
        </CardBody> 

             </InputForm>
            <CardButton type='submit' onClick={handleSaveEmployee}>Save</CardButton>
            
      </CardWrapper>


    );
    
    }



