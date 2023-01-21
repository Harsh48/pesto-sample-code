const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
   firstname:{
    type: String
   },
   lastname:{
     type: String 
   },
   email:{
     type: String
   },
   password:{
     type: String 
   },
   countryCode:{
     type: String
   },
   phone:{
     type: Number
   },
   role:{
      type: String
   },
   companyId:{
    type:String
   }
}
)

module.exports = mongoose.model('User', UserSchema)