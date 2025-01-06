const Product = require('../models/product')

const getallproductstatic= (req,res)=>{
    // throw new Error('testing')
    res.status(201).json({msg:"all static products"})
}
const getallproducts= (req,res)=>{
    res.status(201).json({msg:"all products"})
}

// const createproducts= (req,res)=>{
//     res.send('created product')
// }
// const getoneproducts= (req,res)=>{
//     res.send('one product')
// }
// const updateproducts= (req,res)=>{
//     res.send('update products')
// }
// const deleteproducts= (req,res)=>{
//     res.send('delete products')
// }

module.exports={getallproducts,getallproductstatic}