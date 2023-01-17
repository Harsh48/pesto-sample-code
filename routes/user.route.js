const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const multer = require('multer');
// const sharp = require('sharp')
const AWS = require('aws-sdk')
const uuid = require('uuid').v4;


const s3 = new AWS.S3({
    accessKeyId:process.env.ACCESS_KEY_ID,
    secretAccessKey:process.env.SECRET_ACCESS_KEY
})


const upload = multer({
    limits:{
        fileSize: 1000000
    },
    fileFilter(req,file, cb){
        if(!file.originalname.match(/\.(jpg | jpeg |png)$/ )){
            return cb(new Error("please upload a valid image"))
        }
        cb(undefined,true)
    }
})

router.post('/image',upload.single('upload'), async(req,res)=>{
    let myFile = req.file.originalname.split(".")
    const fileType = myFile[myFile.length - 1]
    try{
        
        const uploadImage = await s3.upload({
            Bucket: 'demotech343',
            Key: `${uuid()}.${fileType}`,
            Body: req.file.buffer
        }).promise()
        console.log(uploadImage)
        res.json(uploadImage)
    }catch(error){
         console.log(error)
         res.status(400).send(error)
    }
})


router.get('/api/users', userController.getUsers)

router.get('/api/agg', userController.getAggregatedUsers)

router.post('/api/users', userController.createUser)

router.put('/api/users', userController.updateUser)

router.delete('/api/users', userController.deleteUser)

module.exports = router