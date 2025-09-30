const joi = require('joi')

const validateRegistration = (data) => {
    const schema = joi.schema({
        username:joi.string().min(3).max(20).required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).required(),        
    })
    return schema.validate(data)
}

const validateLogin = (data) => {
    const schema = joi.schema({
        email:joi.string().email().required(),
        password:joi.string().min(6).required(),        
    })
    return schema.validate(data)
}

module.exports = {validateRegistration, validateLogin}