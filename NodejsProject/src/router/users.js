//把模块封装成模块
const express = require('express');
let Router = express.Router();
// app.get('./home',(req,res)=>{});
Router.get('/',(req,res)=>{
    res.send('用户列表');
 });
Router.get('/:username',(req,res)=>{
    res.send({
        path:req.url,
        username:req.params.username,
    });
 });


module.exports = Router;