module.exports= function userAggretaion(id){
    return [{$match:{_id:ObjectId(id)}},
        {$project:{
          email:1,
          name:1,
          _id: 0
        }},{$sort:{name:1}}]
}