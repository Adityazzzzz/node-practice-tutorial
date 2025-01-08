const CustomAPIError=require('../errors/custom-error')
const jwt = require('jsonwebtoken')


const login=async (req,res)=>{
  const {username, password}=req.body;
  if(!username || !password){
    throw new CustomAPIError('Please provide email and password',400)
  }
  console.log(username, password);

  const id= new Date().getDate()
  const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'}) // we can pass infinite value in jwt.sign  

  res.status(200).json({msg:'fake-login/register/signup-route',token})
}



const dashboard = async(req,res)=>{
  
  const authHeader = req.headers.authorization
  if(!authHeader|| !authHeader.startsWith('Bearer ')){
    throw new CustomAPIError('No token provider',401)
  }
  // console.log(req.headers);
  const token = authHeader.split(' ')[1]

  try {
    const decoded =jwt.verify(token,process.env.JWT_SECRET)
    const luckynumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello ${decoded.username}`, secret:`Here is your authorize data, your lucky number is ${luckynumber}`} )   
  } 
  catch (error) {
    throw new CustomAPIError('Not authorized',401)
  }

}




module.exports={login, dashboard}