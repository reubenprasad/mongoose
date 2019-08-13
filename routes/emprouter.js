var express = require('express')
var mongoose = require('mongoose')
var url = "mongodb://localhost/emps"
var emp = require('../model/employee')
var bodyparser = require('body-parser')
const router = express.Router();
router.use(bodyparser.urlencoded({extended:true}))
mongoose.connect(url,function(err){
    if(err) 
    throw err;
    else
    console.log("database connected")
})
router.get("/nemp",function(req,res){
    res.render("nemp")
    });
router.post("/add",function(req,res){
    var e1 = new emp();
    e1.eid = req.body.eid;
    e1.Name = req.body.ename;
    e1.Salary=req.body.esal;
    e1.save(function(err){
        if(err) throw err;
        else
        res.send("data added...")
    })
    });
router.get("/vemp",function(req,res){
    alert();
    emp.find({},function(err,result){
        if(err) 
        throw err;
        else
        {console.log(result);
        res.render("vemp",{emp:result})
        }
    })
    });
module.exports = router;