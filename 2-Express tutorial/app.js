const express = require('express')
const app= express();
const data= require('./data')

app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:false}))//**** imp

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:1, data:data.people})
})
app.post('/login',(req,res)=>{
    const {name}= req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    if(!name){
        return res
            .status(400)
            .json({success:0, msg: 'please provide name'})
    }
    else{
        return res.status(401).send('Wrong input')
    }
})



app.listen(5000)