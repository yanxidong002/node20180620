var http = require('http');
var fs = require('fs');
// request 请求    response 响应
function serve(request,response){
    console.log(request.method);//获取请求方法
    console.log(request.url);//获取请求地址
    //console.log(request.headers);//获取请求头

    response.statusCode=200;//设置响应状态码；
    response.setHeader('name','yandong');//设置响应头，名值对形式
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置响应类型，编码为utf-8

    fs.readFile('index.html',function(erro,data){//读取文件内容并且将读到的内容写入响应体
        //erro是指当访问出错时报告的错误信息，data是指访问成功后，成功页面的信息内容
        response.write(data);
        console.log(data);
        response.end();
    })

}
//每当有请求来的时候调用server函数对客户端进行响应
var server = http.createServer(serve);
server.listen(9999,'localhost');