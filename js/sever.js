//原生模块：nodejs自带的模块，无需安装，直接使用
 const http = require('http');
 const url = require('url');
//  console.log(http);
/**
 * 创建服务器
 * http.createServer(function(请求参数,响应参数){
 })
 请求request
 响应response
 端口：
 */
  let app = http.createServer(function(request,response){
    //设置响应头，用于告诉浏览器响应内容的类型
     response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
     let params = url.parse(request.url,true).query;
     console.log('query:',params);
    switch(request.url){
        case '/home':
            response.end('首页');
            break;
        case '/list':
            response.end('列表页');
            break;
        case '/cart':
            response.end('购物车');
            break;
        default:
            response.end('你访问的页面不存在');
            break;
    }
    //多个响应就多个response.write();
    // response.write('hello server');    
    // response.write(' <p>hello XiaoChao</p>');    
    // //标记响应结束
    // response.end('<h4>加载结束</h4>');
 });

 //配置监听端口
 //listen()
 app.listen(3650,function(){
    //回调函数，服务器启动成功后执行回调函数的代码
    console.log('服务器启动成功，端口号为3650');
 });