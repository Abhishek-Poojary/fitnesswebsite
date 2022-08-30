const express=require("express");
const { createUser, loginUser, getUserDetails, registerUserForEvent } = require("../controllers/userController");
const router=express.Router();



router.route("/register").post(createUser)
router.route("/login").post(loginUser)
router.route("/user/:name").get(getUserDetails)
router.route("/user/event/register").put(registerUserForEvent);

module.exports=router