const userModel = require("../models/userModel");

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

    //create User 
    const user= await userModel.create({
        userName,email,password,address,phone
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

module.exports ={registerController}