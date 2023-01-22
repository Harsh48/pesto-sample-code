const express = require('express')
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const app = express()
const User= require('./models/user.model')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 3005


// connecting to db
connectDB();

const corsOpts = {
    origin: "*",
  
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  
    allowedHeaders: ["Content-Type", "x-access-token"],
  };
  
  app.use(cors(corsOpts));

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/v1',require('./routes/user.route'))
app.use('/v1',require('./routes/campaign.route'))
app.use('/v1',require('./routes/lead.route'))
app.use('/v1',require('./routes/company.route'))

app.use(function(req,res){
    res.status(404).json('err: Page not found')
})




app.listen(PORT,()=>{
    console.log('app is running on port '+ PORT)
})