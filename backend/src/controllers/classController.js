const Class=require('../models/classModel');
const ErrorHandler = require('../utilities/ErrorHandler');


exports.createClass= async(req,res,next)=>{
    const {name,description,intake,date}=req.body;

    await Class.create({
        name,description,intake,date
    })

    res.status(200).json({
        message:"Class added"
    })
}


exports.updateClass=async(req,res,next)=>{

    const{name,date}=req.body;

    const classes=await Class.findOne({name});

    if(!classes){
        return next(new ErrorHandler("Invalid event Name",400));
    }
    classes.date=new Date(date);
    classes.taken=0;
    await classes.save();

    res.status(200).json({
        message:"Class updated"
    })
 
}


exports.getEventDate=async(req,res,next)=>{
    const classes=await Class.findOne({name:req.query.name})

    if(!classes)
    return next(new ErrorHandler("Invalid event Name",400));

    res.status(200).json({
        date:classes.date
    });

}

exports.getAllClasses=async(req,res,next)=>{

    const classes=await Class.find();


    if(!classes){
        return next(new ErrorHandler("No Class Found"));
    }

    res.status(200).json({
        data:classes
    })
}

exports.getClassDetails=async(req,res,next)=>{

    const classes=await Class.findOne({name:req.params.name});

    if(!classes){
        return next(new ErrorHandler("No Class Found"));
    }

    res.status(200).json({
        data:classes
    })
}
