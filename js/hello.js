
//利用require引用其他模块，是同步的
let person = require('./person.js');
//引用了person.js文件（模块）在这边能输出（拿到）什么数据
//取决于person.js文件（模块）对外暴露什么数据。
let {getName,setName} = require('./person.js');
console.log(person,getName(),setName);
 