const Task= require('../models/Task')

//1
const getitems =async (req, res) => {
    try{
        const tasks= await Task.find({}) /************   imp ************/
        res.status(201).json({ tasks });
    } 
    catch(error){
        res.status(500).json({ msg: error})
    }
};


//2
const createitems =async(req, res) => {
    try{
        const task= await Task.create(req.body)  /************   imp ************/
        res.status(201).json({task});
    }
    catch(error){
        res.status(500).json({msg:error})
    }
};


//3
const getsingleitems = async(req, res) => {
    try {
        const {id: taskID} = req.params
        const tasks=await Task.findOne({_id:taskID}) /************   imp ************/

        if(!tasks){
            return res.status(404).json({msg:`no task with ${taskID}`})
        }

        res.status(201).json({ tasks });
    } 
    catch (error) {
        res.status(500).json({msg:error})
    }
};


//4
const updateitems = async(req, res) => {
    try{
        const {id: taskID} = req.params
        const tasks=await Task.findOneAndUpdate( {_id:taskID}, req.body, {new: true, runValidators:true})/******   imp ******/

        if(!tasks){
            return res.status(404).json({msg:`no task with ${taskID}`})
        }

        res.status(200).json({id:taskID, data:req.body})
    } 
    catch (error) {
        res.status(500).json({msg:error})
    }
};


//5
const deleteitems = async(req, res) => {
    try {
        const {id: taskID} = req.params
        const tasks=await Task.findOneAndDelete({_id:taskID}) /************   imp ************/

        if(!tasks){
            return res.status(404).json({msg:`no task with ${taskID}`})
        }
        res.status(201).json({ type:null, sucess:1 });
    } 
    catch (error) {
        res.status(500).json({msg:error})
    }
};

module.exports = { getitems, createitems, getsingleitems, updateitems, deleteitems };
