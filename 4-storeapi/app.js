const express = require('express')
const app = express();
const notfound= require('./middleware/not-found')
const errmiddleware = require('./middleware/error-handler')
const connectDB= require('./db/connect')
require('dotenv').config();
require('express-async-errors')
const products=require('./route/products')

//middleware
// app.use(express.static())
app.use(express.json())


app.use('/api/v1/products',products)
app.use(notfound)
app.use(errmiddleware)

const port = process.env.PORT || 5000;
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port)
    } 
    catch(error){
        console.log(error);      
    }
}
start();