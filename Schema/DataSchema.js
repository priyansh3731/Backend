import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    awb:{
        type:"number",
        required:true,
        unique:true
    },
    firmname:{
        type:"string",
        required:true
    },
    suborder_id:{
        type:"number",
        required:true

    },
    returnType:{
        type:"string",
        required:true
    },
    sku:{
        type:"string",
        required:true
    },
    category:{
        type:"string",
        required:true
    },
    qty:{
        type:"number",
        required:true
    },
    photo1:{
        type:"Binary",
        required:false
    },
    photo2:{
        type:"Binary",
        required:false
    },
    video:{
        type:"Binary",
        required:false
    }
})

const dataModel = mongoose.model("Data", dataSchema)

export default dataModel