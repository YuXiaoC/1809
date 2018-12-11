const mysql = require('mysql');
const express = require('express');
let app  = express();
let pool = mysql.creaePool({
    host :'localhost',
    user :'root',
    password:'',
    datebase:''
});
