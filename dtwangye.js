//参数
var http = require("http");
var url = require("url");
var router = require("./module/rooter");
http.createServer(function(require,response){
    if(require.url !== '/favicon.ico'){
        try{
            var pathname = url.parse(require.url).pathname;
            pathname = pathname.replace(/\//,'');
            router[pathname](require,response);
        }catch(error){
            response.write(error.toString());
            response.end();
        }
    }
}).listen(8000);
console.log('sever is running at 8000');