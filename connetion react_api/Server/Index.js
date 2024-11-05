const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./Models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        });
});

app.post('/login',(req,res)=>{
   const {email,password}=req.body;
   EmployeeModel.findOne({email: email})
   .then(user=>{
      if(user){
         if (user.password === password){
            res.json({ status: 'success', message: 'Login successful' })
         }
         else{
            res.json({ status: 'error', message: 'Password is incorrect' })
         }
      }
      else{
         res.json({ status: 'error', message: 'No record exists' })
      }
   })
   .catch(error => {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
   });
})

mongoose.connect("mongodb://localhost:27017/employee")
    .then(() => {
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(error => {
        console.error("Database connection error:", error);
    });
  