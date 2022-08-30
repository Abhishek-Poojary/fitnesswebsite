const mongoose=require("mongoose");


const classSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Error -name required"]
    },
    description:{
        type:String,
        required:[true,"Error - description required"]
    },
    intake:{
        type:Number,
        required:true
    },
    taken:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        required:[true,"error - Event Date required"]
    }
})


module.exports= mongoose.model("Class",classSchema)