const Task = require("../models/taskModel");



// Create Task
const createTask = async(req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
};

// Get All Tasks
const getTasks = async(req,res)=>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
        
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};


// Get a Single task
const getTask = async(req,res) =>{
    
     try {
            const {id} =req.params;
            const task = await Task.findById(id)
            
        if(!task){
            return res.status(404).json(`No Task with id: ${id} exist`)
            }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

};


// Delete a task
const deleteTask = async(req,res) =>{
    try{
        const {id}= req.params;
        const task = await Task.findByIdAndDelete(id) 
        if(!task){
            return res.status(404).json(`No task with id: ${id} exist`);
        }
        
        res.status(200).send("Task deleted")
    }catch(error){
        res.status(500).json({msg:error.message})

    }

};


// Update a Task
const updateTask = async(req,res) =>{

    try {
            const {id} = req.params.id;
            const task = await Task.findByIdAndUpdate(
                {_id:id}, req.body, {new: true}
            )
            
        // if(!task){
        //     return res.status(404).json(`No task with id ${id} exist`)
        // }
        res.status(200).json(task)
    } catch (error) {
            res.status(500).json({msg:error.message});
    }

};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask

};