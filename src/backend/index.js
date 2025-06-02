const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConnection = mysql.createConnection({
   host: "localhost",
    port: 3306,
    database: "devmysqldb",
    user: "root",
    password: "LogPwd@1310"
});

dbConnection.connect(err=>{
    if(err){
        console.log(err,"connection failed")
    }else{
console.log('connection successfully')
    }
    
});
app.get('/user-details',(req, res)=>{
    let userList =`SELECT * FROM user_details`;
    dbConnection.query(userList, (err, results)=>{
        if (err){
            console.log("server error")
        }
        if (results.length>0){
            return res.send({
 message: 'server connected successfully',
            data: results
            })   
           
        }
    })
})

app.listen(3004,()=>{
    console.log('server is runing on port 3004');
})