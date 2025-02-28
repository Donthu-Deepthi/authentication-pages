const mongoose = require("mongoose")


const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees",EmployeeSchema)  //here employees indicates that what name we want to create a table or collection in the mongoDB
module.exports = EmployeeModel