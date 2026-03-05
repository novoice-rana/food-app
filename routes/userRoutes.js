const express =require('express')
const { getUserController } = require('../controllers/userController')
const authMiddleware =require("../middlewares/authMiddleware.js");


const router =express.Router()
//routes
//GET USER
router.post('/getUser',authMiddleware,getUserController);

module.exports= router