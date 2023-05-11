import React  from 'react';

import CardDetails from './Card Details';

import {
  StyledName,
  StyledNav,
  StyledList,
  Styledcontent,
  NavbarInnerContainer,
  StyledLeftcontainer,
  StyledRightcontainer,
  StyledList2,
  StyledList1
  
} from "../Style/Dashboard.style";


export default function EmployeeDashboard() {


  return (
   <div >
      <StyledName>Employee Dashboard</StyledName>
      <StyledNav>
      <NavbarInnerContainer>
      <StyledLeftcontainer>
            <StyledList>TATA CONSUMER PRODUCTS</StyledList>
            <StyledList1>{""}</StyledList1>
            <StyledList2>Exit Management</StyledList2>

         </StyledLeftcontainer>
         <StyledRightcontainer>
            <Styledcontent>Sidhi Sadh</Styledcontent>
            <Styledcontent></Styledcontent>
         </StyledRightcontainer>
      </NavbarInnerContainer>
    
        </StyledNav>



        <CardDetails/>
       
      </div>
  
  )
}
