const express = require('express')
const { createPost,getAllPost,getPost,deletePost } = require('../controllers/post-controller')
const {authenticateRequest} = require('../middleware/authmiddleware')

const router = express.Router()

// middleware-> for telling that the user is auth or not
router.use(authenticateRequest)

router.post('/create-post',createPost)
router.get('/all-posts',getAllPost)
router.get('/:id',getPost)
router.delete('/:id',deletePost)

module.exports = router;
