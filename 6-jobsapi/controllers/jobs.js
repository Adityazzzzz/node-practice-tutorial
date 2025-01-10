const getalljob =async(req,res)=>{
    res.send('get all job')
}
const createjob =async(req,res)=>{
    res.send('create job')
}
const getonejob =async(req,res)=>{
    res.send('get one job')
}
const updatejob =async(req,res)=>{
    res.send('update job')
}
const deletejob =async(req,res)=>{
    res.send('delete job')
}

module.exports= {getalljob,createjob,getonejob,updatejob,deletejob}