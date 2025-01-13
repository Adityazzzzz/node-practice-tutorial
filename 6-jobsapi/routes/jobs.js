const express= require('express')
const router= express.Router()
const {getalljob,createjob,getonejob,updatejob,deletejob}= require('../controllers/jobs')

router.route('/').get(getalljob).post(createjob)

router.get('/:id',getonejob)
router.patch('/:id',updatejob)
router.delete('/:id',deletejob)


module.exports=router