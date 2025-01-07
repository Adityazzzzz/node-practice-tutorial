const Product = require('../models/product')


const getallproductstatic= async(req,res)=>{
    const search ='ab';
    const products= await Product.find({
        name:{ $regex: search, $options: 'i'},
    });
    res.status(200).json({products})
}


const getallproducts = async (req, res) => {
    const {featured,company ,name } =req.query;
    const queryobj ={};

    if (featured) {
        queryobj.featured = featured === 'true'? true: false;
    }
    if(company){
        queryobj.company= company
    }
    if(name){
        queryobj.name={ $regex:name, $options: 'i'}
    }
    console.log(queryobj)
    const products = await Product.find(queryobj);
    res.status(200).json({ products });
};
module.exports={getallproductstatic,getallproducts}


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
