const ObjectId = require('mongoose').Types.ObjectId
const userAggretaion = require('../aggregation/user.aggregation')
const User = require('../models/user.model')
const AWS = require('aws-sdk')
const uuid = require('uuid').v4;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




const s3 = new AWS.S3({
    accessKeyId:process.env.ACCESS_KEY_ID,
    secretAccessKey:process.env.SECRET_ACCESS_KEY
})

const getUsers = async(req,res)=>{
    try{
        const user =await User.find()
        res.json(user)
      }catch(err){
        console.log(err)
      }
}

// example of mongodb aggregation

 

const createUser = async(req,res)=>{
    try{
        const user =await User.create(req.body)
        res.json(user)
      }catch(err){
        console.log(err)
      }
}
// check already user exists
// hash the password

const register = async(req,res)=>{
  console.log(req.body)
  try{
      const user = await User.findOne({email:req.body.email})
      if(user) {
        return res.json({
          msg:"User Already Exist"
        })
      }
      const password = await bcrypt.hash(req.body.password,10)
      await User.create(
        {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password,
        countryCode: req.body.countryCode,
        phone: req.body.phone,
        role: req.body.role,
        apiKey: uuid()
      })
      res.json({
        msg: 'user is sucessfully registered'
      })
    }catch(err){
      console.log(err)
    }
}

 
const login = async(req,res)=>{
  const {email, password} = req.body
  try{
    const user = await User.findOne({email})
    if(user){
      const isMatch=await bcrypt.compare(password,user.password)
      if(isMatch){
        res.json({
         user:{
          id: user._id,
          email: user.email,
          role: user.role
         },
         access_token: jwt.sign({id:req.body.id,email},process.env.JWT_SECRET)
        })
      }else{
        res.json('password does not match')
      }
    }else{
      res.json('User does not exist')
    }
  }catch(e){
    console.log(err)
  }

}

const updateUser = async(req,res)=>{
        try{
          const user = await User.updateOne({email:req.body.email},{name:req.body.name}) 
          res.json(user)
        }catch(err){
          console.log(err)
        }
}

const deleteUser = (req,res)=>{
        User.deleteOne({_id:req.body.id}).then((result)=>{
          res.json(result)
        })
}


module.exports ={ getUsers, 
  createUser, 
  updateUser, 
  deleteUser,
  register,
  login
}