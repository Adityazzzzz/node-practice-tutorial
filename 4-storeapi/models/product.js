const mongoose = require('mongoose')

const productschema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,`Product name is required`]
    },
    price:{
        type:Number,
        required:[true,`Product name is required`]
    },
    feature:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company: {
        type: String,
        enum: {
          values: ['ikea', 'liddy', 'caressa', 'marcos'],
        }   
    } 

})
module.exports= mongoose.model('Product',productschema)