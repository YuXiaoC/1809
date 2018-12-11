const qs = require('querystring');
let str = 'firstname=laoxie&url=http%3A%2F%2Flaoxie.com&lastname=xie&passowrd=123456';
let obj = qs.parse(str);
console.log('obj:',obj.firstname);
let string = qs.stringify(obj);
console.log('string:',string);