import express  from "express";
import dataModel from "./DataSchema.js";

//DATA ROUTER FOR ROUTING
const dataRoute = express.Router()

//FUNCTION FOR CREATING DATA
const createData = async(req,res) => {
    const { awb,firmname,suborder_id,returnType,sku,category,qty } = req.body
    try{
        let data = new dataModel({awb,firmname,suborder_id,returnType,sku,category,qty})
        await data.save()
        res.send({
            message:"data is created",
            status:1
        })
    }
    catch(err){
        res.send({
            message:err.message,
            status:0
        })
    }
}
//FUNCTION FOR GETTING THE DATA

const getData =  async(req, res) => {

        const data = await dataModel.findById(req.params.id)
        if(data){
            res.send(data)
        }
        else{
            res.send({
                message:"Cannot find data"
            })
        }
    }

const deleteData = async(req, res) => {
    const data = await dataModel.findById(req.params.id)

    if(data){
        await dataModel.deleteOne({_id:data._id})
        res.json({
            message:"data deleted"
        })
    }
    else{
        res.status(400).json({
            message:"Data not found or cannot be deleted"
        })
    }
}

dataRoute.route("/data/:id").get(getData)
dataRoute.route("/data").post(createData)
dataRoute.route("/data/:id").delete(deleteData)

export default dataRoute