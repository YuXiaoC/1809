const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const mime = require('./mime.js');
  //创建本地服务器
http.createServer(function(req,res){
    let pathName= url.parse(req.url).pathname;
    let realPath ;
    //创建路由
    switch(pathName){
        case '/':
            realPath = path.join(__dirname,'../index.html');
            break;
        case '/login':
            realPath = path.join(__dirname,'html/regin.html');
            break;
        case '/reg':
            realPath = path.join(__dirname,'html/reg.html');  
            break;
        case '/userCenter':
            realPath = path.join(__dirname,'html/userCenter.html');  
            break;
        default:
            realPath = path.join(__dirname,pathName);        
    }
    //获取后缀名，用与判断响应头响应数据类型
    let ext = path.extname(realPath).slice(1);
    // console.log('ext',ext);
    //获取绝对路径，用于读取文件内容
    // let realPath = path.join(__dirname,pathName);
    console.log('pathName:',pathName);
    // console.log('realPath:',realPath);
    // 获取到路径后，根据路径读取文件
     fs.readFile(realPath,function(err,data){
        // console.log('data',data);
        res.writeHead(200,{'Content-Type':`${mime[ext]};charset=utf-8`});
        if(err){
            console.log('读取文件失败啦');
        }else{
            res.end(data);
        }
        
    });
}).listen(3650,function(){
    //服务器开启成功后执行的代码
    console.log('server is running on port 3650');
});
