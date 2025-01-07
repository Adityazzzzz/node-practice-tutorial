const express =require('express')
const router= express.Router()
const {getallproducts,getallproductstatic} =require('../controllers/products')


router.get('/main',getallproducts);
router.get('/static',getallproductstatic);

module.exports= router;