const express = require ("express");
const { getBioProfile, followUser, unfollowUser, getSingleUser, getAllUsers, searchUsers, updateUserProfile } =require("../controllers/userControllers");
const router = express.Router();
const authMiddleWare = require("../controllers/middleware/auth")


// search users
router.get("/search" , searchUsers)
// own account
router.get('/' , authMiddleWare, getBioProfile);
// follow user
router.post("/follow/:followersId", authMiddleWare, followUser);
// unfollow
router.post("/unfollow/:followersId", authMiddleWare, unfollowUser)
// single user
router.get("/userprofile/:userId", getSingleUser)
// all users
router.get("/all", getAllUsers)
// updateProfile
router.patch('/update-profile', authMiddleWare,updateUserProfile)


module.exports = router