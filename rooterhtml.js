var http = require("http");
var url = require("url");
var rooter = require("./module/rooter");
http.createServer(function(require,response){
   
    if(require.url !== '/favicon.ico'){
        var pathname = url.parse(require.url).pathname;
        pathname = pathname.replace(/\//,'');
        console.log(pathname);
        rooter[pathname](require,response);
    }
}).listen(8000);
console.log("Server is running at port 8000");