const express= require('express')
const router= express.Router()
const {getalljob,createjob,getonejob,updatejob,deletejob}= require('../controllers/jobs')

router.route('/').get(getalljob).post(createjob)
router.route('/:id').get(getonejob).patch(updatejob).delete(deletejob)

module.exports=router