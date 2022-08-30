const mongoose =require("mongoose")


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Error -name required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true," Error - Email:required"]
    },
    password:{
        type:String,
        select:false,
        required:[true,"Error - Password:required"]
    },    
    role:{
        type:String,
        default:"user"
    },
    history:[
        {
            name:{
                type:String,
            },
            date:{
                type:Date
            }
        }
    ]
})

module.exports=mongoose.model("User",userSchema);