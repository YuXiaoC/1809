// const socketServer =  require('ws').Server;//调用ws模块，并使用它的Server方法（是一个构造函数）
// // console.log(socketServer);
// let ws  = new socketServer({//实例一个socketServer对象从而实现服务器的创建
//     port:3002
// });

const http = require('http');
const express = require('express');
const ws = require('ws');
// console.log(express);
let app = express();
// app.use(app.static('./'));
let server = http.Server(app);//搭建了一个基于http与express的服务器
let socketServer = ws.Server;
let ws2 = new socketServer({
    server,//（ES6）对象属性的简写，把变量名作为属性名，把变量值作为属性值
    port:1212//eat：function(){}-----eat(){}方法的简写
});
/**
 * ws
 *      *clients(Array):所有客户端对象
 *          *client:客户端对象
                *send（）发送消息给客户端
        *事件
            *connection 用户连接成功时触发
            *message    接受到用户消息是触发
            *close      用户断开连接是触发        
 */

//监听客户端连接
ws2.on('connection',function(client){
    client.on('message',function(msg){
        console.log('客户端消息:',msg);
        ws2.broadcast(msg);
   });
});

//自定义方法broadcast(广播的意思)，用与广播消息
//遍历所有用户对象，分别发送消息
ws2.broadcast = function broadcast(msg){
    ws2.clients.forEach(function(client){
        client.send(msg);
    });
}