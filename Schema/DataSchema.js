import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    awb:{
        type:"String",
        required:true,
        unique:true
    },
    firmname:{
        type:"String",
        required:true
    },
    suborder_id:{
        type:"String",
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
        type:"String",
        required:true
    },
    photo1:{
        type:"String"
    },
    photo2:{
        type:"String"
    },
    video:{
        type:"String"
    }
})

const dataModel = mongoose.model("Data", dataSchema)

export default dataModel