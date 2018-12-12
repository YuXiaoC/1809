const mysql = require('mysql');
const express = require('express');
let app  = express();
//创建连接池
var  pool = mysql.createPool({
    host :'localhost',
    user :'root',
    password:'',
    port:3306,
    database:'marlin',
    multipleStatements:true//可以实现多查询
});
//创建路由
app.get('/apple',(req,res)=>{
    //编写mysql语句
    // console.log(req.params.fruit);
    let sql = `select * from goodlist `;
    pool.query(sql,(error,rows)=>{
        // console.log(error,rows[0]);
        res.send(rows);
    });
})
app.get('/apple/:fruit',(req,res)=>{console.log(req.params);
    //编写mysql语句
    // console.log(req.params.fruit);
    let sql = `select * from goodlist where name='${req.params.fruit}'`;
    pool.query(sql,(error,rows)=>{
        // console.log(error,rows);
        res.send(rows[0]);
    });
})

// app.get('');可弄一个多表查询---


app.listen(3002,()=>{
    console.log('server is running on 3002');
});

