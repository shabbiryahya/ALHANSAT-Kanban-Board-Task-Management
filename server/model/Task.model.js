const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
        title:{
        type:String,
        required:[true,"Please enter a Title"]
         },
        description:{
            type:String,
            required:[true,'please add Description']
        },
        staus:{
            type: String,
            enum: ['To Do', 'Doing', 'Done'],
            default: 'To Do',
        }
},{
    timestamps : true,
    versionKey:false
})

const Task=mongoose.model('Task',taskSchema,"task");

module.exports = Task;