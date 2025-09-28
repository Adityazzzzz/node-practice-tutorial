const express = require('express')
const {userRegister} = require('../controllers/identity-service')

const router = express.Router();

router.post('/registeruser',userRegister)

module.exports = router;