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
    {$match:{"lead.companyId":id}},
  {$project:{"name":1,"email":1, "title": "$lead.title", "courseCode":"$lead.courseCode", "_id":0, "id": "$_id"
}}]
}