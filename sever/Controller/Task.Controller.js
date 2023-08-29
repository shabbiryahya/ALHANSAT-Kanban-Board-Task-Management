const Task = require("../model/task.model");

const addTask=async({title,description})=>{

const data=await Task.create(title,description);
return data;


}

module.exports={

 addTask,

}

