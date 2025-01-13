const Job=require('../model/Job')
const {StatusCodes} =require('http-status-codes')
const {BadRequestError,NotFoundError } =require('../errors')

const getalljob =async(req,res)=>{
    const job = await Job.find({createdBy: req.user.userId})
    res.status(StatusCodes.OK).json({job, count:job.length})    
}


const getonejob = async (req,res)=>{
    const {user:{userId}, params:{id:jobId}} = req

    const job = await Job.findOne({_id:jobId, createdBy:userId})
    if(!job){
        throw new NotFoundError(`No job with id: ${jobId}`)
    }
    res.status(StatusCodes.OK).json({job})
    
}


const createjob =async(req,res)=>{
    req.body.createdBy =req.user.userId
    const job= await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job}) 
}


const updatejob =async(req,res)=>{
    const {body:{company, position} ,user:{userId}, params:{id:jobId}} = req
    if(company==='' || position ===''){
        throw new BadRequestError('Company or Position can not be empty')
    }

    const job = await Job.findByIdAndUpdate({_id: jobId, createdBy: userId}, req.body, {new:true, runValidatorstrue})
    if(!job){
        throw new NotFoundError(`No job with id: ${jobId}`)
    }
    res.status(StatusCodes.OK).json({job})
    
}  


const deletejob =async(req,res)=>{
    const {user:{userId}, params:{id:jobId}} = req
    const job = await Job.findOneAndDelete({_id: jobId, createdBy: userId})
    if(!job){
        throw new NotFoundError(`No job with id: ${jobId}`)
    }
    res.status(StatusCodes.OK).json()
}

module.exports= {getalljob,getonejob,createjob,updatejob,deletejob}