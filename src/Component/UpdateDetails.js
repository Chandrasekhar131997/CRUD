import React from 'react';

import {CardWrapper,
        CardHeading,
        CardHeader,
        CardSubHeading,
        Detailheading,
        CardBody,
        CardFieldset,
        CardButton,
       
        
} from '../Style/Dashboard.style';
// import React from react;
// const sc = styled.default
// const { css } = styled
// const cardContainer = document.querySelector('.card-container')

// const CardWrapper = styled.div`
//   overflow: hidden;
//  margin-left: 20px;
// margin-right: 20px;
// margin-bottom: 20px;
// margin-top: -20px;
//   font-family: Quicksand, arial, sans-serif;
//   box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
//   border-radius: 5px;
//   align-items: center;
// `

// const CardHeading = styled.h1`
//   font-size: 20px;
//   font-weight: bold;
//   text-align: start;
//   margin-left: 50px;
//   color:#626469;
//   margin-top: 30px;
// `
// const CardHeader = styled.header`
//   padding: 1px;
//   margin-left: 18px;
//   margin-top: 10px;
//   background-color:#0059b3;
//   border-radius: 5px;
  
// `
// const CardSubHeading = styled.h1`
// font-size:18px;
// color:#dadde6;
// font-weight: 500;
// margin-left: 10px;

// `
// const Detailheading = styled.h1`
// font-size:15px ;
// font-family: 'Times New Roman', Times, serif;
// `

// const CardBody = styled.div`
//   padding-right: 32px;
//   padding-left: 32px;
// `

// const CardFieldset = styled.section`

//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
//   border-radius: 5px;
//   margin-left: 20px;
//   `

// const CardButton = styled.button`
//   display: block;
//   width: 10%;
//   padding: 12px 0;
//   font-family: inherit;
//   font-size: 14px;
//   font-weight: 700;
//   color: #dadde6;
//   background-color: #0059b3;
//   border: 0;
//   border-radius: 5px;
//   box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
//   cursor: pointer;
//   transition: all .25s cubic-bezier(.02, .01, .47, 1);
//  margin-left: 50px;
//  margin-top: 20px;
//  margin-bottom: 30px;
//  /* margin: 30px; */
//   &:hover {
//     box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
//     transform: translate(0, -5px);
//   }
// `




export default function CardDetail(){
//   constructor (props) {
//     super(props)
    
//     this.state = {
//       isPasswordVisible: false
//     }
    
//     this.revealPassword = this.revealPassword.bind(this);
//   }
  
//   revealPassword () {
//     this.setState({
//       isPasswordVisible: !this.state.isPasswordVisible
//     })
//   }
  
//   render () {
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

      
            
            <CardButton type='button'>Update</CardButton>
            
            
      </CardWrapper>
    )
    
    }



