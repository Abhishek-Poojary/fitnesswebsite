const mongoose=require('mongoose')

const ConnectToDataBase=()=>{
    const url='mongodb://localhost:27017/Playfit'
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((data)=>{
        console.log(`MongoDb Server Connected with: ${data.connection.host}` )
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=ConnectToDataBase