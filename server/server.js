const { PrismaClient }= require( "@prisma/client");
const prisma=new PrismaClient();
const {Pool } = require("pg");
const express = require("express");
const bodyparser = require('body-parser');
const app = express(); 
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());


app.get('/',(req,res)=>{
  res.send('hello world');
})

app.get('/employee', async (req, res) => {
  const PostgreSQL = "SELECT * FROM  Employee";
    const employees = await prisma.Employee.findMany();
 
      // where: { Published: true }
      // include: { register: true }
   
    // })
    res.send(employees)
    // res.json({
    //     success:true,
    //     playload:employees,
        
    // });
  })



app.post('/create',async (req,res )=>{
    const values= { pepoleHubId ,
                employeeCode ,
                employeeName ,
                phoneNumber,
                EmailID ,
                PersonalPhoneNumber,
                PersonalEmailID ,
                Designation ,
                JoiningDate ,
                Manager ,
                HRBP ,
                Unit ,
                Function ,
                SubFunction ,
                EmplymentType ,
                Grade ,
                Location }= req.body
    const PostgreSQL = "INSERT INTO Employee  (pepoleHubId,employeeCode,employeeName,phoneNumber,Email ID,PersonalPhoneNumber,PersonalEmailID,Designation,JoiningDate,Manager,HRBP,Unit,Function,SubFunction,EmplymentType,Grade, Location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)";     
   
    try{
    console.log(req.body);
    const employee = await prisma.Employee.create({
        data: req.body,
      
      
    })
    console.log('creating successfully');
    res.status(200).json(employee)
}
catch (err){
    console.log(err)
    res.status(500).send('error creating employee')
    
}
})


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Employeedb',
    password: 'Chandra@123',
    port: '5432'
});
pool.connect()

pool.query("SELECT NOW()" , (err,res)=>{
    if (err) {
        console.error('Error executing query', err);
      } else {
        console.log('Connected to PostgreSQL database at', res.rows[0].now);
      }
}) ;


app.put('/Employeeupdate/:id', async (req, res) => {
  const PostgreSQL="UPDATE Employee SET `pepoleHubId`=$1,`employeeCode`=$2, `employeeName`=$3, `phoneNumber`=$4, `Email ID`=$5, `PersonalPhoneNumber`=$6, `PersonalEmailID`=$7, `Designation`=$8, `JoiningDate`=$9, `Manager`=$10, `HRBP`=$11, `Unit`=$12, `Function`=$13, `SubFunction`=$14, `EmplymentType`=$15, `Grade`=$16, `Location`=$17 WHERE ID=?";
  const  EmployeeId = req.params.id;
  try{
  const updatedEmployee = await prisma.Employee.update({
    where: { 
      id: EmployeeId,
    },
   data:{
    name:'EmployeeName',
   }
  })
  res.json(updatedEmployee)
} catch (error){
  console.error(error)
  res.status(500).send('Error updating employe')
}
})

app.delete('/user/:id', async (req, res) => {
  const EmployeeId = req.params.id //string
// try{
  const deletedEmployee = await prisma.Employee.delete({
    where: {
      id: String(EmployeeId),
    },
    
  })
  res.json(deletedEmployee)
// } catch (error){
//   console.error(error)
//   res.status(500).send('Error deleting employe')
// }
})





app.listen(5000,
 () =>{
console.log(`Server Started on port 5000`);
});

