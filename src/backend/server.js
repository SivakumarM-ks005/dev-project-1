const express = require('express');


// rest object
const app = express();

// middleware 

// `routes`
app.get('/test',(req, res)=>{
    res.status(200).send('<h1>TEST </h1>');
})
// Port 
const PORT =8080;

// listen

app.listen(PORT,()=>{
    console.log("Server is runing");
})