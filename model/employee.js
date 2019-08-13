var mongoose = require('mongoose')
var schema = mongoose.Schema;
var empSchema = new schema(
    {
    eid:String,
    Name:{type:String,required:true},
    Salary:Number
    }
)
var empmodel = mongoose.model("employee",empSchema);
module.exports = empmodel;