var express = require('express')
const app = express();
var emprouter = require("./routes/emprouter")
app.use("/emp",emprouter);
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("emp")
    });
    app.listen(4432, function(req,res){
        console.log("Server started listening")
    })