const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CampaignSchema = new Schema({
   title:{
    type: String
   },
   source:{
    type: String
   },
   description:{
    type: String
   },
   courseCode:{
    type: String
   },
   price:{
    type: Number
   }
}
)

module.exports = mongoose.model('Campaign', CampaignSchema)