const express = require('express')
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const app = express()
const User= require('./models/user.model')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')
require('dotenv').config()


// connecting to db
connectDB();

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));

app.use(express.urlencoded({extended:true}))

app.use('/v1',require('./routes/user.route'))

app.use(function(req,res){
    res.status(404).json('err: Page not found')
})




app.listen(3005)