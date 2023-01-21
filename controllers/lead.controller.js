const Lead = require('../models/lead.model')
const Company = require('../models/company.model')
const User = require('../models/user.model')

const getAllLeads = async(req,res)=>{
    try{
        const lead =await Lead.find()
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}

const getLeadsById = async(req,res)=>{
    try{
        const lead =await Lead.findById(req.params.id)
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}
 

const createLeads= async(req,res)=>{
  try{
      const company = await Company.find({apiKey:req.body.apiKey})
      if(!company) return res.json({msg:'Api key is expired'})
      const user = await User.find({companyId:company[0]._id})
      if(!user) return res.json({msg:'Api key is invalid'})
      const lead = await Lead.create(req.body)
      res.json({
        msg: 'Lead is is sucessfully registered',
        data: lead
      })
    }catch(err){
      console.log(err)
    }
}

 

module.exports ={  
createLeads,
getAllLeads,
getLeadsById
}