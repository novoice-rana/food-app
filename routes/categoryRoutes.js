const express =require('express')
const authMiddleware=require("../middlewares/authMiddleware");
const { createCatController, getAllCatController} = require('../controllers/categoryController');
const router =express.Router();
// create category
router.post('/create',authMiddleware,createCatController)
// get all routes
router.get('/getAll',getAllCatController)


module.exports=router