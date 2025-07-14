const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const db = require('./config/db');
const { error } = require('console');

// configure dotenv
// dotenv.config({path:''}) - need to use like this if .env in different folder
dotenv.config();
// rest objects
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
// routes()
app.use('/api/v1/user', require('./routes/userRoutes'));
app.get('/test',(req, res)=>{
    res.status(200).send('<h1>Node js app </h1>')
});
// PORT
const PORT = process.env.PORT || 8000;

// conditionaly listen
db.query('SELECT 1').then(()=>{
    console.log("my sql db connected");
// listen
app.listen(PORT,()=>{
    console.log(`server is working ${process.env.PORT}`);
});
}).catch((error)=>{
    console.log(error);
});

// app.listen(PORT,()=>{
//     console.log(`server is working ${process.env.PORT}`);
// });