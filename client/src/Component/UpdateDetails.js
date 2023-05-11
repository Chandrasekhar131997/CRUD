import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link,useParams,useNavigate} from 'react-router-dom'
import {CardWrapper,
        CardHeading,
        CardHeader,
        CardSubHeading,
        Detailheading,
        CardBody,
        CardFieldset,
        CardButton,
        Getform,
        InputData1
       
        
} from '../Style/Dashboard.style';




export default function UpdateDetails(){
const {id} =useParams();
const [employee,setEmployee] =useState([]);
const navigate= useNavigate();


  const [values,setValues]=useState({
    pepoleHubId: "",
    employeeCode:"",
    employeeName: "",
    phoneNumber: "",
    EmailID : "",
    PersonalPhoneNumber: "",
    PersonalEmailID: "",
    Designation: "",
    JoiningDate: "",
    Manager:"",
    HRBP: "",
    Unit:"",
    Function: "",
    SubFunction: "",
    EmplymentType: "",
    Grade: "",
    Location:""
  });

  useEffect(()=>{
    if(id){
    axios.get(`http://localhost:5000/employee${id}`)
           
          .then(res =>{
            console.log(res)
            setValues({...values, 
              pepoleHubId: res.data[0].pepoleHubId,
              employeeCode: res.data[0].employeeCode,
              employeeName:res.dat[0].employeeName,
              phoneNumber:res.data[0].phoneNumber,
              EmailID:res.data[0].EmailID,
              PersonalPhoneNumber: res.data[0].PersonalPhoneNumber,
              PersonalEmailID: res.data[0].PersonalEmailID,
              Designation: res.data[0].Designation,
              JoiningDate: res.data[0].JoiningDate,
              Manager:res.data[0].Manager,
              HRBP: res.data[0].HRBP,
              Unit:res.data[0].Unit,
              Function: res.data[0].Function,
              SubFunction: res.data[0].SubFunction,
              EmplymentType: res.data[0].EmplymentType,
              Grade: res.data[0].Grade,
              Location: res.data[0].Location
            });
          })
            .catch(err => console.log(err))
        }
  },[id,values])
  

  
    const handleUpdate = (Id) => {
     axios.put('http://localhost:5000//userupdate/' +Id , values)
    .then(res=>{
      console.log(res)
      navigate('/')
    }).catch(err=>console.log(err));
  

    }
    const handleChange = (event) => {
      setEmployee({
        ...employee,
        [event.target.name]: event.target.value
      });
    };


    return(
      <CardWrapper>
        <CardHeading>Employee Details Update</CardHeading>
        
        <Getform onSubmit={handleUpdate}>
         <CardBody> 
         <CardHeader>
          <CardSubHeading>Basic Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>
            
            <Detailheading htmlFor="pepolehubid">PepoleHub ID
            <InputData1
          type="text"
          name=' pepoleHubId'
          value={values.pepoleHubId}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="employeeCode">Employee Code
            <InputData1
          type="text"
          name='employeeCode'
          value={values.employeeCode}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="employeeName">Employee Name
            <InputData1
          type="text"
          name='employeeName'
          value={values.employeeName}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="phoneNumber">Phone Number
            <InputData1
          type="text"
          name='phoneNumber'
          value={values.phoneNumber}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="EmailID">Email ID 
            <InputData1
          type="text"
          name='EmailID'
          value={values.EmailID}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="PersonalPhoneNumber">Personal Phone Number
            <InputData1
          type="text"
          name='PersonalPhoneNumber'
          value={values.PersonalPhoneNumber}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="PersonalEmailID">Personal Email ID
            <InputData1
          type="text"
          name='PersonalEmailID'
          value={values.PersonalEmailID}
          onChange={handleChange}
          />
            </Detailheading>
            
          </CardFieldset>



          <CardHeader>
          <CardSubHeading>Work Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>
          
            <Detailheading htmlFor="Designation">Designation
            <InputData1
          type="text"
          name='Designation'
          value={values.Designation}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="JoiningDate">Joining Date
            <InputData1
          type="text"
          name='JoiningDate'
          value={values.JoiningDate}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="Manager">Manager
            <InputData1
          type="text"
          name='Manager'
          value={values.Manager}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="HRBP">HRBP
            <InputData1
          type="text"
          name='HRBP'
          value={values.HRBP}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="Unit">Unit 
            <InputData1
          type="text"
          name='Unit'
          value={values.Unit}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="Function">Function
            <InputData1
          type="text"
          name='Function'
          value={values.Function}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="SubFunction">Sub Function
            <InputData1
          type="text"
          name='SubFunction'
          value={values.SubFunction}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="EmplymentType">Employee Type
            <InputData1
          type="text"
          name='EmplymentType'
          value={values.EmplymentType}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="Grade">Grade
            <InputData1
          type="text"
          name='Grade'
          value={values.Grade}
          onChange={handleChange}
          />
            </Detailheading>
            <Detailheading htmlFor="Location">Location
            <InputData1
          type="text"
          name='Location'
          value={values.Location}
          onChange={handleChange}
          />
            </Detailheading>
          </CardFieldset>
          <CardButton type='button'> <Link to="/" >Back</Link></CardButton>
          <CardButton type='submit'>Update</CardButton>
    
        </CardBody> 

      
        </Getform>
            
            
            
      </CardWrapper>
    )
    
    }
  