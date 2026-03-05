const userModel = require("../models/userModel");
const bcrypt= require('bcryptjs')
const JWT= require('jsonwebtoken') 

// Register 
const registerController =async (req,res)=>{
try {
    const {userName,email,password,phone,address}=req.body
    // validation
    if(!userName || !email || !password|| !phone || !address){
        return res.status(500).send({
            success:false,
            message:'Please Provide all Fields '
        });
    }
    //check user 
    const existing = await userModel.findOne({email});
    if(existing){
        return res.status(500).send({ 
        success:false,
        message:'Email Already Exist'});
       
    }
    // hashing 
    var salt= bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    //create User 
    const user= await userModel.create({
        userName,email,password:hashedPassword,address,phone
    });
    res.status(201).send({
        success:true,
        message:'Succesfully Registered ',
        user
    });

} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error In Register Api',
        Error
    })
}
};
//login
const loginController =async(req,res)=>{
    try {
       const {email,password} =req.body
       // validation
       if(!email||!password){
        req.status(500).send({

            success:false,
            message:'Please Provide Email or Password'
        });
       }
       // checkuser
       const user =await userModel.findOne({email:email})
       if(!user){
        return res.status(404).send({
            success:false,
            message:'User not Found  '
        });

       }
//check user PAssword | compare password
const isMatch = await bcrypt.compare(password,user.password);
if(!isMatch){
    return res.status(500).send({
        success:false,
        message:"Invalid Credentials"
    });
}

//token 

const token =JWT.sign({id:user._id},process.env.JWT_SECRET,{
    expiresIn:"7d"
})
user.password=undefined      
// login 
       res.status(200).send({
        success:true,
        message:'Login Successfully ',
        user,
        token
       })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login Api',
            Error

        })
        
    }

};

module.exports ={registerController,loginController}