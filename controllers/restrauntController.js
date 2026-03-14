const resturantModel = require("../models/resturantModel");

// create restraunt 
const createRestrauntController =async (req,res )=>{
    try {
        const {title,imageurl,food,time,pickup,delivery,isOpen,logoUrl,rating,ratingCount,code,coords}=req.body
        // validation 
        if(!title || !coords){
            return res.status(500).send({
                success:false,
                message:'Please provide title and addresss'
            })
        }
        const newResturant=new resturantModel({
            title,imageurl,food,time,pickup,delivery,isOpen,logoUrl,rating,ratingCount,code,coords
        })
        await newResturant.save()
        res.status(201).send({

            success:true,
            message:'New resturant Created Successfully '
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in create restraunt api'
        })
        
    }
};

//Get all restraunts 
const getAllResturantController= async (req,res)=>{
    try {
        const resturants= await resturantModel.find({
           
        })
         if(!resturants){
               res.status(400).send({
                success:false,
                message:'No Restraunt Available'
               })
                
            }
        res.status(200).send({
            success:true,
            totalCount:resturants.length,
            resturants
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            message:'Error in get all restraunt api'
        })
        
    }

}
// get resturant by id
const getResturantByIdController=async (req,res)=>{
    try {
        const resturant =await resturantModel.findById(req.params.id)
            if(!resturant){
                return res.status(404).send({
                    success:false,
                    message:'Resturant not Found '
                })
            }
            res.status(200).send({
                success:true,
                resturant
            })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            message:'Error in get all restraunt by id api'
        })
        
        
    }

}

// restrurant delete by id
const deleteResturantByIdController= async(req,res)=>{
    try {
        const resturant= await resturantModel.findByIdAndDelete(req.params.id)
        if(!resturant){
            return res.status(404).send({
                success:false,
                message:'Resturant not Found'
            })
        }
        res.status(200).send({
            succes:true,
            message:'Resturant deleted succssfully',
            resturant

        })
           
        
    } catch (error) {
        console.log(error)
         res.status(500).send({
            sucess:false,
            message:'Error in delete resturant by id api'
        })
    }
}

module.exports ={createRestrauntController,getAllResturantController,getResturantByIdController,deleteResturantByIdController};