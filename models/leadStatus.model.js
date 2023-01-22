const mongoose = require('mongoose')

const Schema = mongoose.Schema

const StatusSchema = new Schema({
    leadId:{
    type: String
   },
   assigneeId:{
    type: String
   },
   status:{
    type: String
   },
   message:{
    type: String
   },
   created_on:{
    type: Date,
    default: Date.now()
   }
}
)

module.exports = mongoose.model('Status', StatusSchema)