const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:5,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,
        minLength:5,
        maxLength:255,
    },
    password:{
        type:String,
        required:true,
        minLength:5,
        maxLength:1024
    
    }

});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({
        _id:this._id,
       
    }, config.get('jwtPrivateKey'));
    return token;
}


const User = mongoose.model('User',userSchema);

const validateUser = (user) =>{
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    }
}

exports.User =User;
exports.validate = validateUser;