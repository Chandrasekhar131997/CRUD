import styled from "styled-components";


// Dashboard headingr style
export const StyledName = styled.h2`

color:lightgray;
margin-left: 20px;
margin-top: 10px;
`;

export const StyledNav =styled.nav`

border: 4px solid #ba0ae1;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 20px;
margin-top: -20px;
 
`;
export const StyledList =styled.div`
text-decoration: none;
display:inline-flex;
color: 	#0059b3;
font-weight:bold;
font-size: large;

`;

export const Styledcontent =styled.div`
text-decoration: none;
display:inline-flex;
float:right;
`;
export const StyledLeftcontainer = styled.div`
/* display: inline-flex;
text-align:space-between; */
flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 1%;
`;

export const StyledRightcontainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1%;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;
export const StyledList2 = styled.div`
font-size: 15px;
color: gray;
font-weight: bold;
margin-left: 15px;
`;
export const StyledList1 = styled.div`
 border-left: 2px solid gray;
  height: 30px;
  margin-left: 15px;
`;



// Card Details style 

export const CardWrapper = styled.div`
  overflow: hidden;
 margin-left: 20px;
margin-right: 20px;
margin-bottom: 20px;
margin-top: -20px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
  align-items: center;
`

export const CardHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: start;
  margin-left: 50px;
  color:#626469;
  margin-top: 30px;
`
export const CardHeader = styled.header`
  padding: 1px;
  margin-left: 18px;
  margin-top: 10px;
  background-color:#0059b3;
  border-radius: 5px;
  
`
export const CardSubHeading = styled.h1`
font-size:18px;
color:#dadde6;
font-weight: 500;
margin-left: 10px;

`
export const Detailheading = styled.h1`
font-size:15px ;
font-family: 'Times New Roman', Times, serif;
`

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

export const CardFieldset = styled.section`

  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
  margin-left: 20px;
  `
 
// Button section

export const  ButtonCollection = styled.div`
display: flex;
`  

export const CardButton = styled.button`
  display: block;
  width: 10%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #dadde6;
  background-color: #0059b3;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
 margin-left: 50px;
 margin-top: 20px;
 margin-bottom: 30px;
 /* margin: 30px; */
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`

//CardDetails Style

export const Gettable =styled.table`
justify-content: space-between;
margin-left:8px;
width:100%;
box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08); 
 border-radius: 5px; 

`

export const Gettablehead =styled.thead`
display: flex;
justify-content: space-between;
`
export const Gettr =styled.tr`
display: flex;
justify-content: center;
border: 1px solid #dddddd;
width:100%;
`
export const Getth =styled.th`
margin: auto;
padding:8px;
text-align: center;
`
export const Gettd =styled.td`
margin: auto;
padding:8px;
text-align: center;
`

export const Gettablebody =styled.tbody`
padding:20px;
`



//UpdateDetails Style

export const InputData1 =styled.input`
width:100px;
height: 20px;
display: flex;
margin-top: 10px;
border: none;
`
export const Getform =styled.form`
justify-content: space-between;
margin-left:5px;
width:100%;
`

// inserDetails style

export const Dataheading = styled.label`
font-size:20px ;
font-family: 'Times New Roman', Times, serif;
margin-left: 20px;

`

export const InputForm = styled.form`
display:flex;
justify-content: space-between;
margin-left:5px;
`

export const InputData = styled.input`
width:100px;
height: 20px;
display: flex;
 margin-top: 10px;
`