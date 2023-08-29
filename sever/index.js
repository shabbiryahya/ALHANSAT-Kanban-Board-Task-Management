require('dotenv').config();
const express=require("express");
const cors=require("cors");
const path = require('path');


const connectDataBase=require("./model/connectDataBase");
const taskRouter = require('./Router/TaskRouter');
const PORT=process.env.PORT || 3001;
const app = express();
// const filePath = path.join();
//     console.log(filePath);
app.use(cors());
app.use(express.json());
app.use("/api/task",taskRouter)
app.all("*",(req,res,next)=>{

    const filePath = path.join(__dirname,"static",'Error.html');
    // console.log(filePath);
    res.sendFile(filePath)
})


connectDataBase().then(()=>{
    app.listen(PORT, () => {
        console.log(`Listening from http://localhost:${PORT}/`);
      });
    
})


