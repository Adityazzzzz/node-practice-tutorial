const express = require('express');
const app =express();

app.get('/',(re,res)=>{
    res.status(200).send('Hello');
})
app.get('/about',(re,res)=>{
    res.status(200).send('Hello about');
})

app.all('*',(re,res)=>{
    res.status(404).send('nthg found');
})


app.listen(5000,()=>{
    console.log('go to localhost:5000');
})