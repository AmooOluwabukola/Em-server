const express = require("express");
const {createPost,getTimeline,likePost,commentPost,getPostsByUser,getComments}=require ("../controllers/postController")
const router =express.Router() 
const authMiddleWare = require("../controllers/middleware/auth")


// create route
router.post('/create-post',authMiddleWare, createPost);
//timeline route
router.get('/timeline',authMiddleWare,getTimeline);
//like a post
router.post('/like-post/:postId',authMiddleWare,likePost);
//create commnet on a post
router.post('/comment-post/:postId',authMiddleWare,commentPost);
//getting comments for a post
router.get('/comments/:postId',getComments);
// getting all posts by user
router.get('/profile',authMiddleWare,getPostsByUser);

module.exports = router