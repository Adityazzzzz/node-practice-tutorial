const express = require('express');
const app =express();

const data = require('./data.js')



app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newproduct = data.products.map((pro)=>{
        const {id,name,image} = pro;// we have destructured them
        return {id,name,image} ;
    })
    res.json(newproduct)
})
/* We can do this for every particular item , but impossible to do for large data

app.get('/api/products/1',(req,res)=>{
    const singleproduct = data.products.find((pro)=> pro.id ===1)
    res.json(singleproduct)
})
*/


app.get('/api/products/:ID',(req,res)=>{
    const {ID} = req.params; // imp***
    const singleproduct = data.products.find((pro)=> pro.id === Number(ID));
    
    if(!singleproduct){
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleproduct)

})

app.listen(5000,()=>{
    console.log('go to localhost:5000');
})
