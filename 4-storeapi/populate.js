const connectDB= require('./db/connect')
require('dotenv').config();
const Product = require('./models/product');
const jsonproduct= require('./products.json')


const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        await Product.create(jsonproduct)
        console.log('sucess');
        process.exit(0);
        
    } 
    catch(error){
        console.log('err'); 
        process.exit(1);     
    }
}
start();