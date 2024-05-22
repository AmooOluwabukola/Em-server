const express = require('express');
const { registration, login , getUserName, isLoggedIn, forgotPassword, resetPassword } = require('../controllers/authController');
const authMiddleware = require ("../controllers/middleware/auth")
const router = express.Router();

// registration route

router.post('/register', registration);

// login route
router.post ('/login', login)

// get username 
router.get ('/getusername',authMiddleware, getUserName);
// isLoggedIn
router.get ("/isloggedin", isLoggedIn)
// forgot password
router.post('/forgotpassword',forgotPassword);
// reset passsword ftn
router.put('/ForgotPassword/:resetToken',resetPassword)

module.exports = router;