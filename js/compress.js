//利用流进行文件压缩
const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream('../data/region.json')
  .pipe(zlib.createGzip()) //把读取出来的文本调用压缩模块进行压缩 
  .pipe(fs.createWriteStream('../region.txt.zip'));//把压缩好的流进行保存，保存到目的文件；
