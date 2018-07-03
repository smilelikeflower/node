var http = require("http");
var events = require("events");
function jtevent(){
    this.eventEmit = new events.EventEmitter();
    this.zhuce = function(req,res){
        req['name'] = 'xiaoming';
        req['pwd'] = '123456';
        this.eventEmit.emit("zhuceSuccess",req['name'],req['pwd']);//添加抛出事件
    },
    this.login = function(req,res){
        res.write("登录成功！"+"用户名："+req['name']+" 密码："+req['pwd']);
    }
}
module.exports = jtevent;



// var events = require("events");
// var http = require("http");

// function UserBean(){
//     this.eventEmit = new events.EventEmitter();
//     this.zhuce = function(req,res){
//         console.log("注册");
//         req['name'] = '红红'; //模拟表单提交数据
//         req['pwd'] = 'honghong';
//         this.eventEmit.emit('zhuceSuccess','红红','honghong'); //抛出事件消息
//     }, 
    
//     this.login = function(req,res){
//         console.log("登录");
//         res.write("用户名:"+req['name']);
//         res.write("密码:"+req['pwd']);
//         res.write("登录成功");
//         console.log("登录成功");
        
//     }
// }

// module.exports = UserBean;
