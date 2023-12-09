const express = require("express");

const { register, login, sendOTP, forgotPassword, subscribe } = require("../controllers/auth");
const { verifyOTP } = require("../controllers/verifyOTP");


const router = express.Router();

// register
router.post("/register",register)

// sendOTP
router.post("/sendOTP",sendOTP)

// verify otp
router.post("/verify", verifyOTP);

// forgotPassowrd
router.post("/forgotPassowrd", forgotPassword);

// login
router.post("/login",login)


router.post('/subscribe',subscribe);

module.exports =  router;