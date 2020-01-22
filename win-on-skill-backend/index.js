const express = require("express");
const bodyParser = require("body-parser");
var app =express();

var data = [
    {
        "id":1,
        "username":"x",
        "password":"xpass",
        "coins":"20"
    },
    {
        "id":2,
        "username":"y",
        "password":"ypass",
        "coins":"200"
    }
];

app.use(bodyParser.json());

app.use("*",(req,res,next)=>{
    console.log("middleware is called");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","*");
    res.setHeader("Access-Control-Allow-Headers",
        "Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
    next();
})

app.get("",function(req,res){
    res.send("win on skill data");
})

app.get("/data",(req,res)=>{
    console.log("in get data")
    res.send(data);
})

app.listen(8082,()=>{
    console.log("win on skill backend at port 8082");
})