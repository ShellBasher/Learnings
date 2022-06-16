const joi = require('joi')

function userValidation() {
    const userValidationSchema = joi.object({
        Pseudonym : joi.string().min(3).max(20).trim(),
        user_id : joi.number(),
        password : joi.string().min(5).max(20),
        insc_date : joi.date()
    })

    return userValidationSchema.validate()
}

module.exports = userValidation