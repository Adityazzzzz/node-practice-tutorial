const express = require('express')
const { resgiterUser, loginUser, refreshTokenUser, logoutUser} = require('../controllers/identity-service')

const router = express.Router();

router.post('/registeruser',userRegister)
router.post('/loginuser',loginUser)
router.post('/refresh-token',refreshTokenUser)
router.post('/logout',logoutUser)

module.exports = router;