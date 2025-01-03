const mongoose= require('mongoose')

// we can search key-value pairs of schema , there are many 

const taskSchema = new mongoose.Schema({
    name:{              // this is called validation
        type:String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength:[20, 'name cannot be more that 20 characters']
    },
    completed:{
        type: Boolean,
        default:false,
    },
})

module.exports=mongoose.model('Task',taskSchema)



// for more validation, (points) go to mongoose docs