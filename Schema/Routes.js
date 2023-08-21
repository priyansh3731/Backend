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

    // Add this function for searching data by name
const searchDataByName = async (req, res) => {
    const awb = req.body.awb
    try {
        const data = await dataModel.findOne({ awb: awb })
        if (data) {
            res.send(data)
        } else {
            res.send({
                message: "Cannot find data with the given name."
            })
        }
    } catch (err) {
        res.send({
            message: err.message,
            status: 0
        })
    }
}

// Add this route for searching data by name



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


dataRoute.route("/data/search").get(searchDataByName)
dataRoute.route("/data").post(createData)
dataRoute.route("/data/search").delete(deleteData)

export default dataRoute