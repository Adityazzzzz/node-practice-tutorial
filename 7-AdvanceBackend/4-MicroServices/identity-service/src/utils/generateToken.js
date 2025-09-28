/* 
userSchema.methods.createJWT = function(){
    return jwt.sign({userId:this._id, name:this.name}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})
}
*/

const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const RefreshToken = require('../models/RefreshToken');

const generateTokens = async(user) => {
    //1 
    const accessToken = jwt.sign({
        userId : user._id,
        username : user.username
    },process.env.JWT_SECRET, {expiresIn:'60m'})

    // 2
    const refreshToken = crypto.randomBytes(40).toString('hex');
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 7);

    // 3
    await RefreshToken.create({
        token : refreshToken,
        user : user._id,
        expiresAt   
    })
    return {accessToken,refreshToken}
}

module.exports = generateTokens;
