const TASK= require('../models/task')

//1
const getitems =async (req, res) => {
    try{
        const task= await TASK.find({}) /************   imp ************/
        res.status(201).json({task:task});
    } 
    catch(error){
        res.status(500).json({msg:error})
    }
};


//2
const createitems =async(req, res) => {
    try{
        const task= await TASK.create(req.body)  /************   imp ************/
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
        const task=await TASK.findOne({_id:taskID}) /************   imp ************/

        if(!task){
            return res.status(404).json({msg:`no task with ${taskID}`})
        }

        res.status(201).json({ task });
    } 
    catch (error) {
        res.status(500).json({msg:error})
    }
};


//4
const updateitems = async(req, res) => {
    try{
        const {id: taskID} = req.params
        const task=await TASK.findOneAndUpdate( {_id:taskID}, req.body, {new: true, runValidators:true})/******   imp ******/

        if(!task){
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
        const task=await TASK.findOneAndDelete({_id:taskID}) /************   imp ************/

        if(!task){
            return res.status(404).json({msg:`no task with ${taskID}`})
        }
        res.status(201).json({ type:null, sucess:1 });
    } 
    catch (error) {
        res.status(500).json({msg:error})
    }
};

module.exports = { getitems, createitems, getsingleitems, updateitems, deleteitems };
