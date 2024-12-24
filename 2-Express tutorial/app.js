const express = require('express');
const app =express();
const path =require('path');

app.use(express.static('./public'));// *************imp

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar/index.html'));
})
app.get('*',(req,res)=>{
    res.status(404).send('Res not found');
})






app.listen(5000,()=>{
    console.log('go to localhost:5000');
})