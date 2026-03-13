const express =require('express')
const authMiddleware =require("../middlewares/authMiddleware.js");
const { createRestrauntController, getAllResturantController } = require('../controllers/restrauntController.js');


const router =express.Router();
//routes
//create restraunt || post
router.post('/create',authMiddleware,createRestrauntController) 

//get all restraunts
router.get('/getAll',getAllResturantController)


module.exports= router