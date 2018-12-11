const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream('../region.txt.zip')
  .pipe(zlib.createGunzip())  
  .pipe(fs.createWriteStream('regionGunzip.json'));