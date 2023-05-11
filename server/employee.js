// const Pool = require("pg").Pool;



// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'Chandra@123',
//     port: '5432'
// });
// client
// .connect()
// .then((res) => console.log(res))
// .then(() => console.log("db connected -"))
// .catch(e=>console.log("Db connection failed" , "\n" ,e));

// client
// .query(process.argv[2])
// .then(res =>console.log(res))
// .catch(e=>console.log(e));
// const createEmployee=(req,res)=>{
//     const{name,email} =req.body
//     pool.query('INSERT INFO employee (name,email) VALUES ($1,$2)RETURNING * ',
//     [name,email],
//     (err,result)=>{
//         if(err){
//             console.log(err)
//             throw err
//         }
//         res.status(200).json({
//             msg:'data created succesfully',
//             data:result.rows[0],
//         });
//     });
// }






// app.get ('/' , (req , res) => {
//     const PostgreSQL = "SELECT * FROM  Employee";
//     pool.query(PostgreSQL,(err,result)=>{
//         if(err) return res.json({message:"Error inside server"});
//         return res.json(result);
//     })

// })

// app.post('/Employee',(req,res) => {
//     const  { pepoleHubId ,
//         employeeCode ,
//         employeeName ,
//         phoneNumber,
//         EmailID ,
//         PersonalPhoneNumber,
//         PersonalEmailID ,
//         Designation ,
//         JoiningDate ,
//         Manager ,
//         HRBP ,
//         Unit ,
//         Function ,
//         SubFunction ,
//         EmplymentType ,
//         Grade ,
//         Location }= req.body
//         const PostgreSQL = "INSERT INTO Employee  ('pepoleHubId','employeeCode', 'employeeName', 'phoneNumber', 'Email ID', 'PersonalPhoneNumber', 'PersonalEmailID', 'Designation', 'JoiningDate', 'Manager', 'HRBP', 'Unit', 'Function', 'SubFunction', 'EmplymentType', 'Grade', 'Location') VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)";


// const values = [
//     pepoleHubId,
//     employeeCode,
//     employeeName,
//     phoneNumber,
//     EmailID,
//     PersonalPhoneNumber,
//     PersonalEmailID,
//     Designation,
//     JoiningDate,
//     Manager,
//     HRBP,
//     Unit,
//     Function,
//     SubFunction,
//     EmplymentType,
//     Grade,
//     Location,
//   ];


//      pool.query(PostgreSQL, values,(err,result) =>{
//         if(err) {
//             return res.json({message: "Error inside server"});
//         }else{
//         return res.json(result);
//         }
//      })
// });


// app.get("/read/:id", (req, res) =>{
// const postgres = "SELECT *FROM Employee WHERE ID=$1";
// const id =req.params.id;
// pool.query(postgres,[id],(err,result)=>{
// if(err) {return res.json({Message: "Error inside server"});
// }else{
//     return res.json(result.rows);
// }
// })
// });

// app.put('/update/:id', async (req, res) => {
//     const PostgreSQL="UPDATE Employee SET `'pepoleHubId'`=$1,`employeeCode`=$2, `employeeName`=$3, `phoneNumber`=$4, `Email ID`=$5, `PersonalPhoneNumber`=$6, `PersonalEmailID`=$7, `Designation`=$8, `JoiningDate`=$9, `Manager`=$10, `HRBP`=$11, `Unit`=$12, `Function`=$13, `SubFunction`=$14, `EmplymentType`=$15, `Grade`=$16, `Location`=$17 WHERE ID=?";
//     const { id } = req.params.id;
//     pool.query( PostgreSQL, { pepoleHubId ,
//         employeeCode ,
//         employeeName ,
//         phoneNumber,
//         EmailID ,
//         PersonalPhoneNumber,
//         PersonalEmailID ,
//         Designation ,
//         JoiningDate ,
//         Manager ,
//         HRBP ,
//         Unit ,
//         Function ,
//         SubFunction ,
//         EmplymentType ,
//         Grade ,
//         Location })= req.body
    
//       if(err) return res.json({Message:"Enter inside server"});
//       return res.json(post)
//     })
    
  
//   app.delete('/delete/:id', async (req, res) => {
//     const PostgreSQL ="DELETE FROM Employee WHERE ID = ?";
//     const id = req.params.id;
//     pool.query(PostgreSQL,[id],(err,result)=>{
//       if (err) return res.json({Message:"Error inside server"});
//       return  res.json(result);
//     })
//     })