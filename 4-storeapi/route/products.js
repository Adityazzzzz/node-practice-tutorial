const express =require('express')
const router= express.Router()
const {
    getallproducts,getallproductstatic
} =require('../controllers/products')


router.get('/',getallproducts);
router.get('/static',getallproductstatic);

module.exports= router;