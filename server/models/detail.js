const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Must Provide Name'],
    },
    email:{
        type:String,
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        required:[true,"Please Provide Password"]
    },
    age:{
        type:Number,
        required:[true,"Must Provide Age"]
    },
    gender:{
        type:String,
        required:[true,"Must Provide Gender"],
    },
    user:{
        type:String,
        required:[true,"User is Required"]
    }
})

module.exports = mongoose.model("Detail",DetailSchema);