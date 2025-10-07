const express = require('express')
const { createPost } = require('../controllers/post-controller')

const router = express.Router()

// middleware-> for telling that the user is auth or not