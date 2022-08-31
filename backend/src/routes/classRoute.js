const express=require("express");
const { createClass, updateClass, getEventDate, getAllClasses, getClassDetails } = require("../controllers/classController");
const router=express.Router()



router.route('/event/register').post(createClass);
router.route('/event/update').put(updateClass)
router.route('/event/date').get(getEventDate);
router.route('/event/all').get(getAllClasses);
router.route('/event/:name').get(getClassDetails);

module.exports=router;