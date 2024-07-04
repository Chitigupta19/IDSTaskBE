const mongoose = require("mongoose")
const MONODB_URL=process.env
exports.connect=()=>{
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then()
    .catch((error)=>{
        console.log('DB connection failed');
        console.log(error);

        process.exit(0)
    })
}