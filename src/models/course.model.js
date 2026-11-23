const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    //_id
    title:{
        type:String,
        required:true,
        lowercase:true,
        unique:true 
    },
    description:{
        type:String,
        required:true,
        lowercase:true,
        unique:false 
    },
    category:{
        type:String,
        required:true,
        lowercase:true,
        unique:true 
    },
    startDate:{
        type:Date,
        required:true,
        lowercase:true,
        unique:false 
    },
    endDate:{
        type:Date,
        required:true,
        lowercase:true,
        unique:false 
    },
    location:{
        type:String,
        required:true,
        lowercase:true,
        unique:false 
    },
    createdAt:{
        type:Date,
        required:true,
        lowercase:true,
        unique:false 
    },
    updatedAt:{
        type:Date,
        required:true,
        lowercase:true,
        unique:false //No podemos repetir el nombre
    }

})

const Course = mongoose.model("course",courseSchema)
module.exports = Course