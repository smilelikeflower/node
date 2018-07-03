// 异常处理
var http = require("http");
var url = require("url");
var rooter = require("./module/rooter");
var exception = require("./module/exception");
http.createServer(function(require,response){
   
    if(require.url !== '/favicon.ico'){
        var pathname = url.parse(require.url).pathname;
        pathname = pathname.replace(/\//,'');

        console.log(pathname);
        try{
            rooter[pathname](require,response);   
            // var data = exception.excepfun(0);//异常捕获，异常处理
            // response.write(data);
            // response.end();
        }catch(error){
            console.log('错误信息1：'+error);
            response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
            response.write("返回错误信息"+error.toString());
            response.end();
        }
        console.log('server执行完毕');
    }
}).listen(8000);
console.log("Server is running at port 8000");