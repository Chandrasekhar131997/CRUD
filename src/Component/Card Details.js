import React  from 'react';
import {useNavigate} from "react-router-dom";
import {CardWrapper,
        CardHeading,
        CardHeader,
        CardSubHeading,
        Detailheading,
        CardBody,
        CardFieldset,
        CardButton,
        ButtonCollection
        
} from '../Style/Dashboard.style';



export default function CardDetail(){
   const navigate = useNavigate();

 function  HandleClick () {


navigate('/insertdetails')
  }

  function EditClick(){
    navigate('/updatedetails')
  }
 function DeleteClick(){
  
  navigate('/')
 }
    return(
      <CardWrapper>
        <CardHeading>Employee Details</CardHeading>
        
        
         <CardBody> 
         <CardHeader>
          <CardSubHeading>Basic Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>
            
            <Detailheading>PepoleHub ID</Detailheading>
            <Detailheading>Employee Code</Detailheading>
            <Detailheading>Employee Name</Detailheading>
            <Detailheading>Phone Number</Detailheading>
            <Detailheading>Email ID </Detailheading>
            <Detailheading>Personal Phone Number</Detailheading>
            <Detailheading>Personal Email ID</Detailheading>
            
          </CardFieldset>



          <CardHeader>
          <CardSubHeading>Work Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>
          
            <Detailheading>Designation</Detailheading>
            <Detailheading>Joining Date</Detailheading>
            <Detailheading>Manager</Detailheading>
            <Detailheading>HRBP</Detailheading>
            <Detailheading>Unit </Detailheading>
            <Detailheading>Function</Detailheading>
            <Detailheading>Sub Function</Detailheading>
            <Detailheading>Emplyment Type</Detailheading>
            <Detailheading>Grade</Detailheading>
            <Detailheading>Location</Detailheading>
          </CardFieldset>
          
        
    
        </CardBody> 

        <ButtonCollection>
            <CardButton type='submit'>Exit</CardButton>
            <CardButton type='submit' onClick={()=>HandleClick()} >Create</CardButton>
            <CardButton type='submit'onClick={()=>EditClick()}>Edit</CardButton>
            <CardButton type='submit' onClick={()=> DeleteClick()}>Delete</CardButton>
            </ButtonCollection>
      </CardWrapper>
    )
    
    }



