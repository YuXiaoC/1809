let fs =  require('fs');
let readerStream = fs.createReadStream('../about.txt');
// console.log(readerStream);
readerStream.setEncoding('UTF8');
let data ='';
readerStream.on('data',function(chunk){
    //chunk为数据块（不完整的数据）
    data += chunk;//将块级元素整合起来
})
readerStream.on('end',function(){
    //数据读取完毕，执行这里的代码
    console.log(data);
});

//创建可写流
let writeStream = fs.createWriteStream('../about.txt');
writeStream.write('我们不一样；');
writeStream.write('我们哪里不一样；');
writeStream.write('其实都一样；');
//标记文件末尾
writeStream.end();
