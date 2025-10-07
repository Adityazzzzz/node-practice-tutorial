const express = require('express')
const { createPost } = require('../controllers/post-controller')
const {authenticateRequest} = require('../middleware/authmiddleware')

const router = express.Router()

// middleware-> for telling that the user is auth or not
router.use(authenticateRequest)

router.post('/create-post',createPost)

module.exports = router;
