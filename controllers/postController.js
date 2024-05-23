const POST = require('../model/postModel');
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

// 23rd/05/2024
// creating functions for post

const createPost = async (req,res)=>{
    const {text} = req.body;
    const image = req.files ? req.files.imagePath : null;
    req.body.user = req.user.userId;

    if(!text && !image){
        res.status(400).json({success:false,message:"You must provide either text or image"});
        return;
    }
    try {
        let imagePath = null;
        if(image){
            const result = await cloudinary.uploader.upload(image.tempFilePath,{
                folder:"EM_posts"
            });
            console.log("cloudinary upload successful",result);
            if(result && result.secure_url){
                imagePath = result.secure_url;
                console.log("url for img:", imagePath);

                // remove the uploaded file from the server
                fs.unlinkSync(image.tempFilePath);
            }else{
                console.log("cloudinary upload failed");
                res.status(500).json({success:false,message:"failed to upload image"})
                return
            }
        }
        const post = new POST({text,imagePath, user:req.user.userId});
            await post.save();
            res.status(201).json({success:true,message:"post created successfully",post})
        
    } catch (error) {
        res.status(500).json(error.message)
    }
};

module.exports = {
    createPost
}