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
        type:"string",
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
    Barcode_id:{
        type:"string",
        required:false
    },
    photo1:{
        type:"string",
        required:false
    },
    photo2:{
        type:"string",
        required:false
    },
    photo3:{
        type:"string",
        required:false
    },
    video:{
        type:"string",
        required:false
    },
    date:{
        type:"date",
        required:false
    }
})

const dataModel = mongoose.model("Data", dataSchema)

export default dataModel