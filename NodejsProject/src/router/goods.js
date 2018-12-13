//把模块封装成模块
const express = require('express');
let Router = express.Router();
// app.get('./home',(req,res)=>{});
Router.get('/goodsList',(req,res)=>{
    res.send('商品列表');
 });
Router.get('/:goodsName',(req,res)=>{
    res.send({
        '名称':'某类商品',
        'goodsName':req.params.goodsName
    });
 });

Router.route('/:id')
      .get((req,res)=>{
         res.send({
             path:'查看商品',
             id:req.params.id
         });
      }) 
      .post((req,res)=>{
         res.send({
             path:'修改商品',
             id:req.params.id
         });
      }) 
      .put((req,res)=>{
         res.send({
             path:'获取商品',
             id:req.params.id
         });
      })
      .delete((req,res)=>{
         res.send({
             path:'删除商品',
             id:req.params.id
         });
      })
module.exports = Router;