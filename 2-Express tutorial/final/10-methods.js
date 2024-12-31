const express = require('express')
const app= express();
const data= require('./data')

app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:false}))//**** imp
app.use(express.json());




app.get('/api/people',(req,res)=>{
    res.status(200).json({success:1, data:people})
})




app.post('/api/people',(req,res)=>{
    const {name}= req.body;
    if(!name){
        return res
            .status(400)
            .json({success:0, msg: "Try Again"})
    }
    res.status(201).json({success:1, data:name})
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




app.put('/api/people/:id', (req,res)=>{
    const {id} =req.params;
    const {name} =req.body;

    const person = data.people.find((pro)=> pro.id===Number(id))
    if(!person){
        return res
            .status(404)
            .json({success:0, msg: "Try Again"})
    }

    const newperson= data.people.map((person)=>{
        if(person.id===Number(id)) person.name=name;
        return person;
    })
    res.status(201).json({success:1, data:newperson})
})





app.delete('/api/people/:id',(req,res)=>{
    const person = data.people.find((pro)=> pro.id===Number(req.params.id))
    if(!person){
        return res
            .status(404)
            .json({success:0, msg: "Try Again"})
    }

    const newperson= data.people.filter((person)=>person.id!==Number(req.params.id)) 
    return res.status(200).json({success:1, data:newperson})
})

app.listen(5000)