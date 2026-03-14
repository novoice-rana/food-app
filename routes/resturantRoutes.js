const express =require('express')
const authMiddleware =require("../middlewares/authMiddleware.js");
const { createRestrauntController, getAllResturantController, getResturantByIdController, deleteResturantByIdController } = require('../controllers/restrauntController.js');


const router =express.Router();
//routes
//create restraunt || post
router.post('/create',authMiddleware,createRestrauntController) 

//get all restraunts
router.get('/getAll',getAllResturantController)
// get resturant by id
router.get('/get/:id',getResturantByIdController)
// delete resturant by id
router.delete('/delete/:id',authMiddleware,deleteResturantByIdController)


module.exports= router