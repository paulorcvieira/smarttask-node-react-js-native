require("dotenv").config();

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// JSON
app.use(express.json());

//Routes
const TaskRoutes = require('./routes/TaskRoutes');
app.use('/task', TaskRoutes)

//Server
app.listen(process.env.BACKEND_PORT, (error) => {
  if(!error){
    console.log("🏁 Server started: on http://locahost:"+process.env.BACKEND_PORT+"/");
  }else{
    console.log("🚩 Server error: please restart!");
  }
});