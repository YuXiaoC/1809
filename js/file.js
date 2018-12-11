let app =  require('http');
let fs = require('fs');
// console.log(fs);

app.createServer(function(requst,response){
    // response.writeHead('Content-Type');
}).listen(3650,function(){
    console.log('连接数据库成功！端口号为3650');
});

//读取文件：fs.readFile(path,callback)
//fs.readFile()是异步的方法
fs.readFile('./about.txt',function(err,data){
    if(err){
        console.log('读取文件失败');
    }
    console.log('data',data.toString());
 });

//  写入文件fs:writeFile();只写入，会覆盖原有的内容
fs.writeFile('./about.txt','在你心里呀',function(err){
    if(err){
        // console.log('写入数据失败！');
        throw Error('写入文件失败');//如果使用throw Error，会终止程序
    }
    console.log('写入数据成功！');
});
//写入文件：fs.appendFile();写入文件，追加内容不会覆盖原有的内容
fs.appendFile('./about.txt','我怎么看不见你呢？',err=>{
    if(err){
        throw Error('追加内容失败啦！');
    }
    console.log('追加内容成功啦！');
});