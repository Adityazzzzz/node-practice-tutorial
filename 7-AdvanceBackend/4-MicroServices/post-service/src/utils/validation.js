const joi = require('joi')

const validateCreatePost = (data) => {
    const schema = joi.schema({
        content:joi.string().min(3).max(5000).required(),     
    })
    return schema.validate(data)
}

module.exports = {validateCreatePost}