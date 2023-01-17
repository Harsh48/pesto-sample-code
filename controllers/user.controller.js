const ObjectId = require('mongoose').Types.ObjectId
const userAggretaion = require('../aggregation/user.aggregation')
const User = require('../models/user.model')

const getUsers = async(req,res)=>{
    try{
        const user =await User.find()
        res.json(user)
      }catch(err){
        console.log(err)
      }
}

// example of mongodb aggregation

const getAggregatedUsers = async(req,res)=>{
  try{
      const user =await User.aggregate(userAggretaion(req.query.id))
      res.json(user)
    }catch(err){
      console.log(err)
    }
}

const createUser = async(req,res)=>{
    try{
        const user =await User.create(req.body)
        res.json(user)
      }catch(err){
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

module.exports ={ getUsers, createUser, updateUser, deleteUser, getAggregatedUsers}