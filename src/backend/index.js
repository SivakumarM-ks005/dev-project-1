const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'demo',
  password:'LogPwd@1310'
});

app.listen(3004,()=>{
    console.log('server is runing on port 3004');
})