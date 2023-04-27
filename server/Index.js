var mongoclient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/getadmin", function (req, res) {
    mongoclient.connect(connectionString, function (err, clientObject) {
        if (!err) {
            var dbo = clientObject.db("hradmindb");
            dbo.collection("basiinfo","workinfo").find({}).toArray(function (err, documents) {
                if (!err) {
                    res.send(documents);
                }
            })
        }
    })
});

app.post("/postadmin", function (req, res) {
    mongoclient.connect(connectionString, function (err, clientObject) {
        if (!err) {
            var dbo = clientObject.db("hradmindb");
            var admindetails = {
                PeopleHubId: req.body.PeopleHubId,
                EmployeeCode: req.body. EmployeeCode,
                EmployeeNamee: req.body.EmployeeName,
                PhoneNumber: req.body.PhoneNumber,
                EmailId: req.body. EmailId,
                PersonalPhoneNumber: req.body.PersonalPhoneNumber,
                PersonalEmailId: req.body.PersonalEmailId
            };
      
            dbo.collection("basicinfo").insertOne(admindetails, function (err, result) {
                if (!err) {
                    console.log("Record Inserted");
                }
            })
        }
    })
    })
app.listen(9050);
console.log(`Server Started : http://127.0.0.1:9050`);