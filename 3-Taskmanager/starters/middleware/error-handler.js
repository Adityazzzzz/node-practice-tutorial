const {CustomAPIError} =require('../errors/custom-error')

const errorhandlingmiddleware= (err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.code).json({message : err.msg})
    }
    return res.status(500).json({msg:`something went wrong, try again later`})
}

module.exports= errorhandlingmiddleware