module.exports= function leadsAggretaion(id){
    return [{
      "$addFields": {
        "campaignId" :  { "$toObjectId": "$campaignId" }
           }},
      {$lookup:
      {
        from: 'campaigns',
        localField:'campaignId',
        foreignField:'_id' ,
        as: 'lead'
      }},
      {$unwind:{ path: "$lead" }},
    {$match:{"lead.companyId":id}}]
}