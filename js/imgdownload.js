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
            //这里通过修改响应头使得浏览器不识别文件而实现文件的下载
            //要实现下载还可以通过服务器对文件进行压缩处理，使得浏览器不识别从而达到能下载的效果
            res.writeHead(200,{'Content-Type':'zlib/zilb'});
            res.end(data);
        }
        
    });
}).listen(3650,function(){
    //服务器开启成功后执行的代码
    console.log('server is running on port 3650');
});
