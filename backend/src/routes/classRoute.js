const express=require("express");
const { createClass, updateClass, getEventDate, getAllClasses } = require("../controllers/classController");
const router=express.Router()



router.route('/event/register').post(createClass);
router.route('/event/update').post(updateClass)
router.route('/event/date').get(getEventDate);
router.route('/event/all').get(getAllClasses);

module.exports=router;