const express=require("express");
const { addTask, getTask, updateTask, deleteTask } = require("../Controller/Task.Controller");
const taskRouter=express.Router();

taskRouter.post("/addtask",async(req,res,next)=>{

    try {

       
       const data=await addTask(req.body);
       res.send(data);

    } catch (error) {

        res.status(400).send({
            error: 'Bad Request',
            description: error.message,
        })
        
    }

const data=req.body;


})

taskRouter.get("/",async(req,res,next)=>{

try {

    const tasks=await getTask();
    res.send(tasks);
    
} catch (error) {

    res.status(400).send({
        error: 'Bad Request',
        description: error.message,
    })
    
}

})

taskRouter.post("/updatetask/:id",async(req,res,next)=>{

    try {
        const id=req.params.id;
        const updatedTask=await updateTask(id,req.body);
        res.send(updatedTask);
        
    } catch (error) {

        res.status(400).send({
            error: 'Bad Request',
            description: error.message,
        })
        
    }


})

taskRouter.delete("/deletetask/:id",async(req,res,next)=>{


    try {
        const id=req.params.id;
        const deletedTask=await deleteTask(id);
        res.send(deletedTask);
        
    } catch (error) {

        res.status(400).send({
            error: 'Bad Request',
            description: error.message,
        })
        
    }

})

module.exports=taskRouter;