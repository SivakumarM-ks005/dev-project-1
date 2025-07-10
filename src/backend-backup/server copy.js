const express = require('express');
const mySqlPool = require('./config/db');
const dotenv =require('dotenv');
const morgan= require('morgan');
dotenv.config();
// congig
// rest object
const app = express();
app.use(express.json());
app.use(morgan("dev"));
// middleware 

// `routes`
app.get('/test',(req, res)=>{
    res.status(200).send('<h1>TEST </h1>');
});
// Port 
const PORT =process.env.PORT || 8080;

// conditionally listen
mySqlPool.query("SELECT 1").then(()=>{
    console.log("mysql db connected");
    app.listen(PORT,()=>{
        console.log(`Server is runing ${process.env.PORT}`.bgGreen);
    })
}).catch( (error)=>{
    console.log(error);
});
// listen

// app.listen(PORT,()=>{
//     console.log("Server is runing");
// });