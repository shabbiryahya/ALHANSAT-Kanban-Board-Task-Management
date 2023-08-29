const express=require("express");
const { addTask } = require("../Controller/Task.Controller");
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



})

taskRouter.post("/updatetask",async(req,res,next)=>{



})

taskRouter.delete("/deletetask",async(req,res,next)=>{


})

module.exports=taskRouter;