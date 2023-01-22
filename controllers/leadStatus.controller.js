const Lead = require('../models/lead.model')
const Status = require('../models/status.model')

const getAllLeadsStatus = async(req,res)=>{
    try{
        const lead =await Status.find()
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}


const getLeadsStatusById = async(req,res)=>{
    try{
        const lead =await Status.findOne({leadId:req.params.leadId})
        res.json(lead)
      }catch(err){
        console.log(err)
      }
}
 

const createLeadStatus= async(req,res)=>{
  try{
      const status= await Status.create(req.body)
      res.json({
        msg: 'Status Assigned',
        data: lead
      })
    }catch(err){
      console.log(err)
    }
}


 

module.exports ={  
createLeadStatus,
getAllLeadsStatus,
getLeadsStatusById
}