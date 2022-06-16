const mongoose = require('mongoose')
const unique_validator = require('mongoose-unique-validator')

const user_schema = mongoose.Schema({
    Pseudonym : {type : String, required : true, unique : true},
    user_id : {type : Number, required : true, unique : true},
    password : {type : String, required : true},
    insc_date : {type : Date, default : Date.now}
})

mongoose.plugin(unique_validator)

module.exports = mongoose.model('User', user_schema)
