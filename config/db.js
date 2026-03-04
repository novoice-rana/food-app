const mongoose = require('mongoose');
// function mongodb database connection 

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected To DataBase ${mongoose.connection.host}`)
        
    } catch (error) {
        console.log('Db Error ',error)
    }
}
module.exports =connectDb
