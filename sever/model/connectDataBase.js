require('dotenv').config();

const mongoose = require('mongoose');

const connectDataBase=async ()=>{

require('dotenv').config();
    const response=await mongoose.connect(process.env.DB_LOCAL);
    
   console.log("Connected to DataBase");

    return response;
}

module.exports=connectDataBase; 