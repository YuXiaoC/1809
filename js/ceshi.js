const fs = require('fs');
const http = require('http');
http.createServer((Request,Response)=>{

}).listen(3005,()=>{

});
//读取文件;fs.readFile(path,callback)
//写入文件;fs.writeFile(path,callback)--会覆盖原有的数据
//读取文件;fs.appendFile(path,callback)---不会
//异步
fs.readFile('about.text',(err,data)=>{
    if(err){
        console.log('读取文件失败了');
    }
});
