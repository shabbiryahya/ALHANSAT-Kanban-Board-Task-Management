const Task = require("../model/task.model");

const addTask=async({title,description})=>{

    if(title==="" || description==="")
    {

        throw Error("Input can't be empty 😔");
    }

const data=await Task.create({title,description});
return data;


}

const getTask=async()=>{

  const tasks=await Task.find({});
  return tasks;

}


const updateTask=async(_id,body)=>{

const{title,description}=body;

const task=await Task.findById(_id);
{
    if(!task)throw new Error('No such task found');

}

if(title==="" || description==="")
    {

        throw Error("Input can't be empty 😔");
    }

await Task.updateOne({_id},{$set:{title,description}});

const updatedTask=await Task.findById(_id);
return updatedTask;

}


const deleteTask=async(_id)=>{
 
 const task=await Task.findById(_id);
{
    if(!task)throw new Error('No such task found');

}
 const {title,description}=task;
 const filteredObj={title,description};

  await Task.deleteOne({_id});
  return {
    filteredObj ,
    message:"Deleted Successfully",
  };

  

}

module.exports={

 addTask,
 getTask,
 updateTask,
 deleteTask,


}

