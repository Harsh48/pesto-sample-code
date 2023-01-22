const Campaign = require('../models/campaign.model')
 
const getAllCampaign = async(req,res)=>{
    try{
        const campaign =await Campaign.find({companyId:req.params.companyId})
        res.json(campaign)
      }catch(err){
        console.log(err)
      }
}

const getCampaignById = async(req,res)=>{
    try{
        const campaign =await Campaign.findById(req.params.id)
        res.json(campaign)
      }catch(err){
        console.log(err)
      }
}
 

const createCampaign= async(req,res)=>{
  try{
      const result = await Campaign.create(req.body)
      res.json({
        msg: 'Campaign is is sucessfully registered',
        data: result
      })
    }catch(err){
      console.log(err)
    }
}

 

module.exports ={  
getAllCampaign,
getCampaignById,
createCampaign
}