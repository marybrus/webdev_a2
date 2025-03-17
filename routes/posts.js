const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const verifyToken = require('../verifyToken')
const verifyUser = require('../verifyUser')

//Post (create data), must be verified to post
router.post("/",verifyToken, async(req, res)=>{
    const userId = req.user._id;
    const postData = new Post({
        title:req.body.user,
        description:req.body.title,
        likes:req.body.text,
        createdBy:userId
    })
    try{
        const postToSave = await postData.save()
        res.send(postToSave)
    }catch(err){
        res.send({message:err})
    }
})

// Get 1 - read all, publically available
router.get('/', async (req,res) =>{
    try{
        const getPosts = await Post.find() 
        res.send(getPosts)
    }catch(err){
        res.send({message:err})
}
})

// Get 2 - get 1, Publicly available
router.get('/:postId', async(req,res)=>{
    try{
        const postById = await Post.findById(req.params.postId)
        res.send(postById)
    }catch(err){
        res.send({message:err})
    }
})

// Patch - update data, Only the post creator can update
router.patch('/:postId', verifyUser, async(req,res) =>{
    
    try{
        const updatePostById = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{
                title:req.body.user,
                description:req.body.title,
                likes:req.body.text,
                createdBy:req.body.hashtag
            }
        })
        res.send(updatePostById)
    }catch(err){
        res.send({message:err})
    }
})

// DELETE (Delete), Only the post creator can delete
router.delete('/:postId', verifyUser, async(req,res)=>{
    try{
        const deletePostById = await Post.deleteOne({_id:req.params.postId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    }
})
module.exports = router