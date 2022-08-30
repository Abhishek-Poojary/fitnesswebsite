const express=require('express')
const DatabaseConnection=require("./utilities/connection")
const handleError=require('./middleware/handleError')
const userRoute =require('./routes/userRoute')
const classRoute=require('./routes/classRoute')

var cors = require('cors')
DatabaseConnection();
const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/v1/",userRoute)
app.use("/api/v1/",classRoute)


app.use(handleError)

const server=app.listen(4000,()=>{
    console.log(`server listening on port http://localhost:4000`)
})



process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to Unhandled Promise Rejection`);

    server.close(
        ()=>{
            process.exit(1);
        }
    );
})