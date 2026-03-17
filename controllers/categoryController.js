const categoryModel=require("../models/categoryModel");
const createCatController=async(req,res)=>{
try {
    const {title,imageUrl}=req.body;
    // validation
    if(!title){
        return res.status(500).send({
            success:false,
            message:"please provide caterory title or image"
        });
    }
    const newCategory =new categoryModel({title,imageUrl});
    await newCategory.save();
    res.status(201).send({
        success:true,
        message:"category created",
        newCategory
    })
} catch (error) {
 console.log(error);
 res.status(500).send({
      success: false,
      message: "Error In Create Cat API",
      error,
    });

}
}

const getAllCatController = async ()=>{
    try {
           if (!categories) {
      return res.status(404).send({
        success: false,
        message: "No Categories found",
      });
    }
    res.status(200).send({
      success: true,
      totalCat: categories.length,
      categories,
    });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in get All Cat Api"
        })
        
    }

}
module.exports={createCatController,getAllCatController}