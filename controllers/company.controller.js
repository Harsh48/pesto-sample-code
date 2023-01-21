const Company = require('../models/company.model')
const uuid = require('uuid').v4;
 

 
const getAllCompany = async(req,res)=>{
    try{
        const company =await Company.find({},{name:1,apiKey:1,userCount:1,validity:1,_id:0})
        res.json(company)
      }catch(err){
        console.log(err)
      }
}

const getCompanyById = async(req,res)=>{
    try{
        const company =await Company.findById(req.params.id,{name:1,apiKey:1,userCount:1,validity:1,_id:0})
        res.json(company)
      }catch(err){
        console.log(err)
      }
}


const removeCompany = async(req,res)=>{
    try{
        const company =await Company.findByIdAndUpdate(req.params.id,{validity: false})
        res.json(company)
      }catch(err){
        console.log(err)
      }
}
 

const registerCompany = async(req,res)=>{
  try{
      const result = await Company.create(
        {
        name:req.body.name,
        userCount: req.body.userCount,
        apiKey: uuid()
      })
      res.json({
        msg: 'Company is is sucessfully registered',
        data: result
      })
    }catch(err){
      console.log(err)
    }
}

 

module.exports ={
removeCompany,
getAllCompany,
getCompanyById,
registerCompany
}