const mongoose = require('mongoose')

const connectionString= 'mongodb+srv://Aditya:studentatiiit@mymongodbcluster.r0mak.mongodb.net/?retryWrites=true&w=majority&appName=TASK-MANAGER'

const connectDB= (url)=>{
    return mongoose.connect(connectionString); 
}

module.exports=connectDB