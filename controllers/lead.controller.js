const Lead = require('../models/lead.model')
const Company = require('../models/company.model')
const User = require('../models/user.model')
const Status = require('../models/leadStatus.model')
const leadsAggretaion = require('../aggregation/lead.aggregation')

const getAllLeads = async(req,res)=>{
    try{
        const lead =await Lead.find({campaignId:req.params.campaignId})
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}

const getAllLeadsByCompany = async(req,res)=>{
    try{
        const lead =await Lead.aggregate(leadsAggretaion(req.params.companyId))
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}


const getAllLeadsBySales = async(req,res)=>{
    try{
        const lead =await Lead.find({userId:req.query.id})
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
      if(!company[0]) return res.json({msg:'Api key is expired'})
      console.log(company)
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


const assignLeads= async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        await Lead.findByIdAndUpdate(req.params.id,{assigneeId:user._id})
        res.json({msg:'Lead successfully assigned to Sales'})
      }catch(err){
        console.log(err)
      }
  }

  const getAllRescheduledLeads = async(req,res)=>{
    try{
        const lead =await Status.find({status:'Reschedule',assigneeId:req.query.id})
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}

const getAllFailedLeads = async(req,res)=>{
    try{
        const lead =await Status.find({status:'Failed',assigneeId,userId:req.query.id})
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}

const getAllSucessLeads = async(req,res)=>{
    try{
        const lead =await Status.find({status:'Sccuess',assigneeId:req.query.id})
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}

module.exports ={  
createLeads,
getAllLeads,
getLeadsById,
assignLeads,
getAllFailedLeads,
getAllSucessLeads,
getAllRescheduledLeads,
getAllLeadsBySales,
getAllLeadsByCompany
}