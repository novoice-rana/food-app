const express =require('express')
const authMiddleware =require("../middlewares/authMiddleware.js");
const { createRestrauntController } = require('../controllers/restrauntController.js');


const router =express.Router();
//routes
//create restraunt || post
router.post('/create',authMiddleware,createRestrauntController)


module.exports= router