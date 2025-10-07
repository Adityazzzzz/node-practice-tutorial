const Post = require('../models/Post')
const logger = require('../utils/logger')

const createPost = async(req,res)=>{
    try {
        const {content,mediaIds} = req.body;
        const newlycreatedPost = new Post({
            user:req.user.userId,
            content,
            mediaIds: mediaIds||[],
        })
        await newlycreatedPost.save()
        logger.info('post created successfully',newlycreatedPost)
        res.status(201).json({
            success: true,
            message: 'Post created successfully'
        })
    }
    
    catch(error){
        logger.error('Error creating post', error)
        res.status(500).json({
            success:false,
            message:'Error creating post'
        })
    }
}

const getAllPost = async(req,res)=>{
    try {
        
    }
    catch(error){
        logger.error('Error fetching post', error)
        res.status(500).json({
            success:false,
            message:'Error fetching post'
        })
    }
}

const getPost = async(req,res)=>{
    try {
        
    }
    catch(error){
        logger.error('Error fetching post', error)
        res.status(500).json({
            success:false,
            message:'Error fetching post'
        })
    }
}

const deletePost = async(req,res)=>{
    try {
        
    }
    catch(error){
        logger.error('Error deleting post', error)
        res.status(500).json({
            success:false,
            message:'Error deleting post'
        })
    }
}


module.exports = {createPost}