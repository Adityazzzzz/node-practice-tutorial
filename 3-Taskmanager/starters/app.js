const express = require('express')
const app = express();
const tasks=require('./routes/tasks')
const connectDB= require('./db/connect')
const notFound= require('./middleware/not-found')
const errorhandlingmiddleware =require('./middleware/error-handler')
require('dotenv').config()


//middleware
app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks',tasks);
app.use(notFound);
app.use(errorhandlingmiddleware);

const PORT = 5000; 

const start =async()=>{
    try{
        await connectDB(process.env.MONGO_URL);//********imp   */
        app.listen(PORT);
        
    }catch(error){
        console.log(error);    
    }
}
start();