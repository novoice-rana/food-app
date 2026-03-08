const express =require('express')
const { getUserController, updateUserController, resetPasswordController, deleteProfileController } = require('../controllers/userController')
const authMiddleware =require("../middlewares/authMiddleware.js");


const router =express.Router()
//routes
//GET USER
router.get('/getUser',authMiddleware,getUserController);
// uppdate routes
router.put('/updateUser',authMiddleware,updateUserController);
// reset passwords
router.post('/resetPassword',authMiddleware,resetPasswordController);
// delete user
router.delete('/deleteUser/:id',authMiddleware,deleteProfileController)
module.exports= router