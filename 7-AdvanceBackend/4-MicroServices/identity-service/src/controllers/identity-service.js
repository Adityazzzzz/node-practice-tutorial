const RefreshToken = require("../models/RefreshToken");
const User = require("../models/User");

const logger = require('../utils/logger')
const {validateRegistration} = require('../utils/validation')

// user registration
const userRegister = async(req,res)=>{
    logger.info('Registration')

    try {
        //validate schema
        const {error} = validateRegistration(req.body)
        if(error){
            logger.warn('Validation Error',error.datails[0].message)
            return res.status(400).json({
                success:false, 
                message:error.datails[0].message,
            })
        }

        const {email,password,username} = req.body 
        let user = await User.findOne({ $or : [{email},{username}]});
        if(user){
            logger.warn('User Already exists')
            return res.status(400).json({
                success:false, 
                message:'User Already exists'
            })
        }


        user = new User({username,email,password});
        await user.save()
        logger.warn('User saved successfully',user._id)






    } 
    catch(error){
        return {status:404}
    }
}