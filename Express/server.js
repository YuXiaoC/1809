
//利用express创建静态服务器
const express = require('express');
const mime = require('../js/mime.js');
const app = express();
const bodyParse = require('body-parser');

//利用express创建静态资源服务器
app.use(express.static('./'));
//创建服务器

// app.
app.get('/',(req,res)=>{
    res.send('首页')
});
app.get('/carlist',function(req,res){
    let carlist = [{id:1,name:'note7',price:3432},{id:3,name:'iphone7',price:7896}];
    res.send(carlist);
});
  
let list;
app.post('/list',function(req,res){
    let categroy = req.query.categroy;
    switch(categroy){
        case 'phone' :
            list= [{id:1,name:'note7',price:3432},{id:3,name:'iphone7',price:7896}];
            break;
        case 'computer':
            list = [{id:1,name:'hp',price:3432},{id:3,name:'lenovo',price:7896}];
            break;
        default:
            list = [];
            break;    
    } 
    res.send(list);
});

//定义搜索
app.get('/search',function(req,res){
    console.log(req.query.username); 
    res.send('这是数据');
});

//GET请求方式
//定义动态路由:dfasdfasd地址为变量
app.get('/goodslist/:id',function(req,res){
    //获取所有商品
    let goodslist = [{id:'1',name:'note7',price:3432},{id:'3',name:'iphone7',price:7896}];
    //获取id这个变量
    let {id} = req.params;
    // console.log(id);
    //获取对应的商品
    // let goods = goodslist.filter(item=>item.id==id.slice(1));
    let goods = goodslist.filter(function(item){
        return item.id == id;
    });
    goods = goods[0] ? goods[0] : {};
    // console.log(goods);
    res.send(goods);
})

// POST请求方式
app.post('/login',bodyParse.urlencoded({extended:false}),function(req,res){
    // res.body;
});


app.listen(3652,()=>{
    console.log('链接服务器成功，端口号为3652');
});