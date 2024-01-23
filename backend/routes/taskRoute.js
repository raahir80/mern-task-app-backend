const express =require("express");
const Task =require("../models/taskModel");
const router = express.Router();
const {createTask,getTasks, getTask, deleteTask, updateTask}= require("../controllers/taskController");

// Create a Task
router.post("/api/tasks",createTask);

// Get/Read Tasks
router.get("/api/tasks",getTasks);

// Get Single Task
router.get("/api/tasks/:id",getTask);

router.delete("/api/tasks/:id",deleteTask);

router.put("/api/tasks/:id",updateTask);


module.exports = router