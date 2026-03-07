const mongoose = require('mongoose')

// schema

const userSchema =new mongoose.Schema({
    userName:{
        type:String,
        required:[true,,'User name is required ']
    },
    email:{
        type:String,
        required:[true,'Email is required '],
        unique:true

    },
    password:{
        type:String,
        required:[true,'Password is required ']
    },
    address:{
        type:Array,
        
    },
    phone:{
        type:String,
        required:[true,'Phone number is required ']
    },
    usertype:{
        type:String,
        required:[true,'user type is required '],
        default:'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'
    },
    answer:{
        type:String,
        required:[true,"Answer is Required"]

    }


},{timestamp:true})

// export 

module.exports =mongoose.model('User',userSchema);