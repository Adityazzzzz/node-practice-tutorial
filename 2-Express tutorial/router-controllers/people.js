const data= require('../data')



const getperson = (req,res)=>{
    res.status(200).json({success:1, data:people})
}

const createperson =(req,res)=>{
    const {name}= req.body;
    if(!name){
        return res
            .status(400)
            .json({success:0, msg: "Try Again"})
    }
    res.status(201).json({success:1, data:name})
}

const updatepeson= (req,res)=>{
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
}


const deleteperson=(req,res)=>{
    const person = data.people.find((pro)=> pro.id===Number(req.params.id))
    if(!person){
        return res
            .status(404)
            .json({success:0, msg: "Try Again"})
    }

    const newperson= data.people.filter((person)=>person.id!==Number(req.params.id)) 
    return res.status(200).json({success:1, data:newperson})
}

module.exports={getperson, createperson, updatepeson, deleteperson}