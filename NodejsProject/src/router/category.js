const express = require('express');
let Router = express.Router();
Router.get('/',(req,res)=>{
    res.send('分类列表');
});
Router.get('/:categoryName',(req,res)=>{
    res.send({
        '商品分类':req.url,
        '商品名称：':req.params.categoryName
    });
    
});
module.exports = Router;