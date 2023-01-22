const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LeadSchema = new Schema({
   name:{
    type: String
   },
   email:{
    type: String
   },
   countryCode:{
    type: String,
   },
   campaignId:{
    type: String
   },
   phone:{
    type: Number
   },
   assigneeId: String
}
)

module.exports = mongoose.model('Lead', LeadSchema)