const Post = require('../models/Post')
const logger = require('../utils/logger')
const {validateCreatePost} =  require("../utils/validation")


async function invalidatePostCache(req,input){
    const cachedKey = `post:${input}`;
    await req.redisClient.del(cachedKey);

    const keys = await req.redisClient.keys("posts:*");
    if(keys.length>0){
        await req.redisClient.del(keys)
    }
}


const createPost = async(req,res)=>{
    try {
        const {content,mediaIds} = req.body;
        const newlycreatedPost = new Post({
            user:req.user.userId,
            content,
            mediaIds: mediaIds||[],
        })
        await newlycreatedPost.save()

        await invalidatePostCache(req, newlycreatedPost._id.toString());

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
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startindex = (page-1)*limit;

        const cacheKey = `posts:${page}:${limit}`
        const cachedPost = await req.redisClient.get(cacheKey)
         
        if(cachedPost){
            return res.json(JSON.parse(cachedPost))
        }

        const posts = await Post.find({})
            .sort({createdAt:-1})
            .skip(startindex)
            .limit(limit)

        const totalNoofPosts = await Post.countDocuments()

        const result = {
            posts,
            currentPage : page,
            totalPages : Math.ceil(totalNoofPosts/limit),
            totalPosts : totalNoofPosts
        }
        
        // save to redis
        await req.redisClient.setex(cacheKey,300,JSON.stringify(result))
        
        res.json(result);
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
        const postId = req.params.id
        const cacheKey = `posts:${postId}`
        const cachedPost = await req.redisClient.get(cacheKey)
         
        if(cachedPost){
            return res.json(JSON.parse(cachedPost))
        }

        const singlePostDetailsbyId = await Post.findById(postId);

        if (!singlePostDetailsbyId) {
            return res.status(404).json({
                message: "Post not found",
                success: false,
            });
        }

        await req.redisClient.setex(cachedPost,3600,JSON.stringify(singlePostDetailsbyId)); 
        res.json(singlePostDetailsbyId);
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
        // only who created can delete
        const post = await Post.findOneAndDelete({
            _id: req.params.id,
            user: req.user.userId,
        });
        if(!post){
            return res.status(404).json({
                message: "Post not found",
                success: false,
            });
        }

        //publish post delete method 
        await publishEvent("post.deleted",{
            postId: post._id.toString(),
            userId: req.user.userId,
            mediaIds: post.mediaIds,
        });
        await invalidatePostCache(req, req.params.id);
        res.json({message: "Post deleted successfully"});
    }
    catch(error){
        logger.error('Error deleting post', error)
        res.status(500).json({
            success:false,
            message:'Error deleting post'
        })
    }
}

module.exports = {createPost,getAllPost,getPost,deletePost}