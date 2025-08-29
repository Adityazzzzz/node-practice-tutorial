const User = require('../model/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')


const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name}, token })
}


const login = async (req, res) => {
  const user = await User.findOne({email})
  if (!user) {throw new UnauthenticatedError('Invalid Credentials')}

  const ispasswordCorrect = await user.comparePassword(password)
  if (!ispasswordCorrect) {throw new UnauthenticatedError('Invalid Credentials')}

  const token = user.createJWT()
  res.status(StatusCodes.OK).json({user:{name:user.name}, token })
}



module.exports = {register,login}