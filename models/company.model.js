const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CompanySchema = new Schema({
   name:{
    type: String
   },
   apiKey:{
    type: String
   },
   validity:{
    type: Boolean,
    default: true
   },
   userCount:{
    type: Number
   },
}
)

module.exports = mongoose.model('Company', CompanySchema)