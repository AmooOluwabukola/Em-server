const express = require("express");
const {createPost}=require ("../controllers/postController")
const router =express.Router() 
const authMiddleWare = require("../controllers/middleware/auth")


// create route
router.post('/create-post',authMiddleWare, createPost);

module.exports = router