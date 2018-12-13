//把模块封装成模块
const express = require('express');
//引入单独路由模块
const  usersRouter = require('./users');
const  goodsRouter = require('./goods');
const  categoryRouter = require('./category');
let Router = express.Router();
// app.get('./home',(req,res)=>{});
Router.get('/home',(req,res)=>{
    res.send('Home');
 });
//关于用户的路由
Router.use('/users',usersRouter);
//关于商品列表路由
Router.use('/goods',goodsRouter);

Router.use('/category',categoryRouter);
module.exports = Router;