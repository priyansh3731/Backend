import express  from "express";
import dataModel from "./DataSchema.js";
import cors from "cors"

// //DATA ROUTER FOR ROUTING
const dataRoute = express.Router()
const app = express();


const corsOptions = {
    origin: '*', // Allow requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and authentication headers
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));


//FUNCTION FOR CREATING DATA
const createData = async(req,res) => {
    const { awb,firmname,suborder_id,returnType,sku,category,qty,photo1,photo2,video } = req.body
    try{
        let data = new dataModel({awb,firmname,suborder_id,returnType,sku,category,qty,photo1,photo2,video})
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

//data for editing user
const editData = async (req, res) => {
    try {
        const dataId = req.params.id;
        const updates = req.body; // This should contain the updated user data

        const updatedData = await dataModel.findByIdAndUpdate(dataId, updates, { new: true });

        if (updatedData) {
            res.json({
                message: "Data updated successfully",
                data: updatedData
            });
        } else {
            res.status(404).json({
                message: "Data not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: 0
        });
    }
};


const AllData = async (req, res) => {
    try {
        const data = await dataModel.find({})
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

dataRoute.route("/data").get(AllData)
dataRoute.route("/data/:id").put(editData);
dataRoute.route("/data/search").post(searchDataByName)
dataRoute.route("/data").post(createData)
dataRoute.route("/data/search").delete(deleteData)

export default dataRoute