const express = require("express");
const bodyParser = require("body-parser");
var userModel = require("./models/userModel");
require("./dbConnection");

var app =express();

/*var data = [
    {
        "id":1,
        "username":"x",
        "password":"xpass",
        "coins":20
    },
    {
        "id":2,
        "username":"y",
        "password":"ypass",
        "coins":200
    }
];
*/
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

/*app.get("/data",(req,res)=>{
    console.log("in get data")
    res.send(data);
})*/

app.post("/checkUser",(req,res)=>{
    userModel.findUser(req,(err,response)=>{
        if(err){console.log('Server error :',err)}
        if(response&&response.length==0)
            res.send({error: "no user found"});
        if(response&&response.length>0){
            let user=response[0];
            if(user.password==req.body.password)
                res.send(user);
            else{
                res.send({error: "no user found"});
            }
        }
    })

})

app.post("/addUser",(req,res)=>{
   userModel.findUser(req,(err,response)=>{
       if(err)
        console.log(err);
       if(response&&response.length==0)
       {
           userModel.addUser(req,(e,r)=>{
                if(r)
                    res.send({valid:"yes"});
                if(e)
                    console.log(e);
           })
       }
       if(response&&response.length>0)
       {
            res.send({err:"data already exist"})
       }
   })
})

app.put("/changeCoins/:c",(req,res)=>{
    console.log(req.params.c)
    userModel.findUser(req,(err,response)=>{
        if(err)
        console.log(err);
       if(response)
       {
        if(req.params.c==0)
        {
            req.body.coins=parseInt(req.body.coins)-20;
        }
        else
        {
            req.body.coins=parseInt(req.body.coins)+20;
        }
        userModel.updateCoins(req,(e,r)=>{
            if(e)
                console.log(e);
            if(r){
                console.log(r);
                res.send(req.body);
            }
        })
       }
    })
})

app.listen(8082,()=>{
    console.log("win on skill backend at port 8082");
})