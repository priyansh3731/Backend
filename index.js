import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db.js"
import dataRoute from "./Schema/Routes.js"


dotenv.config()
connectDB()

const cloudinary = require("cloudinary").v2
          
cloudinary.config({ 
  cloud_name: 'dabaj1pou', 
  api_key: '566886352864217', 
  api_secret: 'wIxwUBkeghz1KrVbYLI497Ivs7A' 
});

const app = express()
app.use(express.json())
const corsOptions = {
    origin: '*', // Allow requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and authentication headers
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));

  

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