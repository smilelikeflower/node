var http = require("http");
var events = require("events");
var jtevent = require("./module/userbean");

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    if(req.url !== '/favicon.ico'){
        var user = new jtevent();
        user.eventEmit.once("zhuceSuccess",function(name,pwd){
            console.log("注册成功！");
            res.write("注册成功！"+"用户名："+name+" 密码："+pwd);
            user.login(req,res);
            res.end();
        });
        user.zhuce(req,res);
    }
}).listen(8000);
console.log("8000");


// var http = require("http");
// var events = require("events");
// var UserBean = require("./module/userbean");
// http.createServer(function(require,response){
//     response.writeHead(200,{'content-type':'text/html;chartset=utf-8'});
//     if(require.url !== '/favicon.ico'){
//         var user = new UserBean();
//         //为指定事件注册一个一次性监听器（监听指定事件的抛出事件）
//         user.eventEmit.once('zhuceSuccess',function(name,pwd){
//             response.write("注册成功！");
//             console.log("注册成功！");
            
//             console.log("接收的名字："+name);
//             console.log("接收的密码："+pwd);
//             user.login(require,response);
//             response.end("ok");
//         });
//         user.zhuce(require,response);
//     }
// }).listen(8000);
// console.log("server is running at port 8000");

