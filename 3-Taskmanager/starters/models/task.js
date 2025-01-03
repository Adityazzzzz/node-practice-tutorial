const mongoose= require('mongoose')

// we can search key-value pairs of schema , there are many 

const taskSchema = new mongoose.Schema({
    name:String,
    complete:Boolean,
})

module.exports=mongoose.model('Task',taskSchema)