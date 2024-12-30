const express=require('express')
const router = express.Router()
const {getperson, createperson, updatepeson, deleteperson} =require('../router-controllers/people')

router.get('/',getperson)

router.post('/',createperson)

router.put('/:id',updatepeson)

router.delete('/:id',deleteperson)

module.exports=router