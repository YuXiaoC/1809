let events = require('events');
// 创建eventEmitter对象
var eventEmmitter = new events.EventEmitter();
//绑定事件及事件的处理程序
eventEmmitter.on('connection',function(){
    console.log('链接成功');
    
   
});
//emit触发事件
setTimeout(() => {
    eventEmmitter.emit('connection');
}, 5000);
