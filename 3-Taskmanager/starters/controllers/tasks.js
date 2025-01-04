const Task= require('../models/Task')
const asyncwrapper=require('../middleware/async')


//1
const getitems =asyncwrapper( async (req, res) => {
    const tasks= await Task.find({}) /************   imp ************/
    res.status(201).json({ tasks });
});






//2
// const createitems =asyncwrapper (async(req, res) => {
//     try{
//         const task= await Task.create(req.body)  /************   imp ************/
//         res.status(201).json({task});
//     }
//     catch(error){
//         res.status(500).json({msg:error})
//     }
// });

const createitems =asyncwrapper (async(req, res) => {
    const task= await Task.create(req.body)  /************   imp ************/
    res.status(201).json({task});
});







//3
// const getsingleitems =asyncwrapper( async(req, res) => {
//     try {
//         const {id: taskID} = req.params
//         const tasks=await Task.findOne({_id:taskID})      /************   imp ************/
//         if(!tasks){
//             return res.status(404).json({msg:`no task with ${taskID}`})
//         }
//         res.status(201).json({ tasks });
//     } 
//     catch (error) {
//         res.status(500).json({msg:error})
//     }
// });

const getsingleitems =asyncwrapper( async(req, res) => {
    const {id: taskID} = req.params
    const tasks=await Task.findOne({_id:taskID}) /************   imp ************/

    if(!tasks){
        return res.status(404).json({msg:`no task with ${taskID}`})
    }
    res.status(201).json({ tasks });

});







//4
// const updateitems =asyncwrapper( async(req, res) => {
//     try{
//         const {id: taskID} = req.params
//         const tasks=await Task.findOneAndUpdate( {_id:taskID}, req.body, {new: true, runValidators:true})/******   imp ******/

//         if(!tasks){
//             return res.status(404).json({msg:`no task with ${taskID}`})
//         }

//         res.status(200).json({id:taskID, data:req.body})
//     } 
//     catch (error) {
//         res.status(500).json({msg:error})
//     }
// });
const updateitems =asyncwrapper( async(req, res) => {

    const {id: taskID} = req.params
    const tasks=await Task.findOneAndUpdate( {_id:taskID}, req.body, {new: true, runValidators:true})/******   imp ******/
    if(!tasks){
        return res.status(404).json({msg:`no task with ${taskID}`})
    }
    res.status(200).json({id:taskID, data:req.body})
});







//5
// const deleteitems =asyncwrapper( async(req, res) => {
//     try {
//         const {id: taskID} = req.params
//         const tasks=await Task.findOneAndDelete({_id:taskID}) /************   imp ************/

//         if(!tasks){
//             return res.status(404).json({msg:`no task with ${taskID}`})
//         }
//         res.status(201).json({ type:null, sucess:1 });
//     } 
//     catch (error) {
//         res.status(500).json({msg:error})
//     }
// });
const deleteitems =asyncwrapper( async(req, res) => {

    const {id: taskID} = req.params
    const tasks=await Task.findOneAndDelete({_id:taskID}) /************   imp ************/
    if(!tasks){
        return res.status(404).json({msg:`no task with ${taskID}`})
    }
    res.status(201).json({ type:null, sucess:1 });
  
});

module.exports = { getitems, createitems, getsingleitems, updateitems, deleteitems };
