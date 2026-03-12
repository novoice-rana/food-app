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
module.exports ={createRestrauntController};