const express=require("express");
const { createUser, loginUser, getUserDetails } = require("../controllers/userController");
const router=express.Router();



router.route("/register").post(createUser)
router.route("/login").post(loginUser)
router.route("/user/:name").get(getUserDetails)


module.exports=router