import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db.js"
import dataRoute from "./Schema/Routes.js"


const fileUpload = require("express-fileupload")

dotenv.config()
connectDB()

const app = express()
app.use(fileUpload({
    useTempFiles:true
}))
app.use(cors())


app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000

app.get('/', (req,res) => {
    res.send({
        message:"Api is working"
    })
})

app.use(dataRoute)

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})