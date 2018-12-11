const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
  //创建本地服务器
http.createServer(function(req,res){
    let pathName= url.parse(req.url).pathname;
    let realPath = path.join(__dirname,pathName);
    console.log('pathName:',pathName);
    console.log('realPath:',realPath);
    //获取到路径后，根据路径读取文件
     fs.readFile(realPath,function(err,data){
        // console.log('data',data);
        if(err){
            console.log('读取文件失败啦');
        }else{
            res.writeHead(200,{'Content-Type':'image/jpeg'});
            res.end(data);
        }
        
    });
}).listen(3650,function(){
    //服务器开启成功后执行的代码
    console.log('server is running on port 3650');
});
