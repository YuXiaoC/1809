
//采用数据流进行文件的复制
const fs = require('fs');
//创建读取流
let data = '';
let readStream = fs.createReadStream('../data/region.json');
readStream.on('data',(chunk)=>{
        // data += chunk;
        console.log(chunk.toString());
});

// //创建写入刘
let writeStream = fs.createWriteStream('./myregion.json');
//用管道流将读取流的内容输送到写入流
readStream.pipe(writeStream);