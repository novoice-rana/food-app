// get user info
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');


const  getUserController = async ( req,res)=>{
try {
    const user =await userModel.findById({_id:req.user.id}  )
    if(!user){
        return res.status(404).send({
            success:false,
            message:'User not Found '
        })
    }
    // hide password
    user.password =undefined
    res.status(200).send({
        success:true,
        message:'User get Successfully',
        user
    })
    
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in Get User Api',
        error
    })
}

};
// update user
const updateUserController =async  (req,res)=>{
try {
    //find user
    const user= await userModel.findById({_id:req.user.id})
    //validation 
    if(!user){
        return res.status(500).send({
            success:false,
            message:'user not found'
        })
    }
    // update
    const {userName,address,phone}=req.body
    if(userName) user.userName = userName
    if(address) user.address = address
    if(phone) user.phone = phone
    // save user
    await user.save()
    res.status(200).send({
        success:true,
        message:'User Updated Succesfully',
        user
    })
    
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:'Error in Update user api'
    })

    
}
//reset password 

};
const resetPasswordController =async(req,res)=>{
try {
    const {email,newPassword,answer}=req.body
    if(!email||!newPassword||!answer){
        return res.status(500).send({
            success:false,
            message:'Please provide all fields'

        })
    }
    const user=await userModel.findOne({email,answer})
    if(!user){
        return res.status(500).send({
            success:false,
            message:'User not found or invalid answer'

        })
    }
    // hashing 
    var salt= bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword,salt)
    user.password=hashedPassword
    await user.save()
    res.status(200).send({
        success:true,
        message:'Password updated Successfully'
    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in password reset api',
        error
    })

}
}



module.exports ={getUserController,updateUserController,resetPasswordController};