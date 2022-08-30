const User = require('../models/userModel')
const ErrorHandler=require('../utilities/ErrorHandler')
const Class=require('../models/classModel')

exports.createUser= async(req,res,next)=>{
    const {name,email,password}=req.body;

    const user=await User.create({
        name,email,password
    })

    res.status(200).json({
        success:true,
        name:user.name
    })
}


exports.loginUser=async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email|| !password){
        return next(new ErrorHandler("Please enter your email & password",400));
    }

    const user= await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email & password ",400));
    }

    

    if(password!==user.password){
        return next(new ErrorHandler("Invalid email & password ",400));
    }
    
    res.status(200).json({
        success:true,
        name:user.name
    })

}



exports.getUserDetails=async(req,res,next)=>{
    const user= await User.find({name:req.params.name})

    if(!user){
        return next(new ErrorHandler("Invalid User Id Entered",400))
    }

    res.status(200).json({
        user:user
    })
}


exports.registerUser=async(req,res,next)=>{
    
}