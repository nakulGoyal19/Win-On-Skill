const mongoose = require('mongoose')
//const {bcrypt,salt} = require('./../config/bcrypt-config')

const userSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String,
        require: true 
    },
    coins: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    games:{
        gamesPlayed:{
            type: String
        },
        gamesWon:{
            type: String
        },
        gamesLost:{
            type: String
        }
    }
})

const userModel = mongoose.model('user',userSchema);

userModel.addUser = (req,callback)=>{
    
    var user = req.body;
    
    console.log(user);
    userModel.create(user,callback)
}


userModel.findUser = (req,callback)=>{
    console.log(`query = {username : ${req.body.username}}`)
    userModel.find({username: req.body.username},callback)
}

userModel.updateCoins = (req,callback)=>{
    userModel.findOneAndUpdate({username:req.body.username},req.body,callback);
}
    
module.exports = userModel;
