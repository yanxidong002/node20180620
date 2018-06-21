var http = require('http');
// request 请求    response 响应
function server(request,response){
    console.log(request.method);//获取请求方法
    console.log(request.url);//获取请求地址
    console.log(request.headers);//获取请求头

    response.statusCode=404;//设置响应状态码；
    response.setHeader('name','yandong');//设置响应头，名值对形式
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置响应类型，编码为utf-8
    response.write(new Date().toString());
    response.end()
}
//每当有请求来的时候调用server函数对客户端进行响应
var server = http.createServer(server);
server.listen(9999,'localhost');