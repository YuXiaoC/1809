const express = require('express');
// const 
// const config = require('./config.json');
let {port,host,root} = require('./config.json');
//引入路由
const Router = require('./router');
let app =  express();
//利用express唯一中间键express.static()实现静态服务器
app.use(express.static(root));


//配置路由
app.use(Router);
//监听端口
app.listen(port,()=>{
    console.log(`Server is running on http://${host}:${port}`)
});
