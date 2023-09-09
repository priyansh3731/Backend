import mongoose from "mongoose";
import  dotenv  from "dotenv";
const fileUpload = require("express-fileupload")

app.use(fileUpload({
    useTempFiles:true
}))


const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MonogoDB connected:${connect.connection.host} `)
    }
    catch(err){
        console.log(err)
    }
}

export default connectDB