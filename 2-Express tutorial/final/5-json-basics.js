const express = require('express');
const app =express();

const data = require('./data.js');

app.get('/',(req,res)=>{
    res.json(data.products);
})

app.listen(5000,()=>{
    console.log('go to localhost:5000');
})
