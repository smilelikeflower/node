/*异步流程控制async*/
// 项目根目录执行命令，安装async包：npm install async --save-dev

// var http = require("http");
// var url = require("url");
// var router = require("./module/rooter");
// http.createServer(function(require,response){
//     if(require.url !== '/favicon.ico'){
//         try{
//             var pathname = url.parse(require.url).pathname;
//             pathname = pathname.replace(/\//,'');
//             router[pathname](require,response);
//         }catch(error){
//             response.write(error.toString());
//             response.end();
//         }
//     }
// }).listen(8000);
// console.log('sever is running at 8000');


// one();
// two();

// function exec(){
//     async.series({
//         one:function(done){    
//             i = 0;
//             setInterval(function(){
//                 console.log('aaa='+new Date());
//                 console.log(i);
                
//                 i++;
//                 if(i > 3){
//                     clearInterval(this); 
//                     // done('出错了','1完毕');
//                     done(null,'1完毕');
//                 }
//             },1000);
//             console.log("one执行完毕");
//         },
//         two:function(done){
           
//             j = 0;
//             setInterval(function(){
//                 console.log('bbb='+new Date());
//                 console.log(j);
                
//                 j++;
//                 if(j > 3){
//                     clearInterval(this); 
//                     done(null,'2完毕'); 
//                 }
//             },1000);
//             console.log("two执行完毕");
//         }
//     },function(error,res){      //done：回调函数
//         console.log(error,"error")
//         console.log(res,"res")
//     });
// }
// exec();
// console.log('主程序执行完毕'); 
/*async.series串行无关联,执行有先后*/
/*async.parallel并行无关联，执行同时*/
/*async.waterfall串行有关联，执行有先后*/
var async = require("async");
function one(recall){
    i = 0;
    setInterval(function(){
        console.log('aaa='+new Date());
        console.log(i);
        
        i++;
        if(i > 3){
            clearInterval(this);
            recall(null,'one执行！！');
        }
    },1000);
    console.log("one执行完毕");
    
}
function two(recall){
    j = 0;
    setInterval(function(){
        console.log('bbb='+new Date());
        console.log(j);
        
        j++;
        if(j > 3){
            clearInterval(this);
            recall(null,'two执行！！');
            
        }
    },1000);
    console.log("two执行完毕");
}
function yibu(){
    // async.series({
    //     one:function(recall){
    //         one(recall);
    //     },
    //     two:function(recall){
    //         two(recall);
    //     }
    // },function(error,res){
    //     console.log(error);
    //     console.log(res);
        
    // });
    async.waterfall([//瀑布流的类型为数组
        function one(recall){
            // one(recall);
            var i=0;
            setInterval(function(){
                console.log(i,'iii');
                if(i==3){
                    clearInterval(this);
                    recall(null,'1执行完毕');
                }
                i++
            },1000);
            console.log('one完毕');
            
        },
        function two(preVal,recall){
            // two(preVal,recall)
            
            var j=0;
            setInterval(function(){
                console.log(preVal+"++++"+ new Date());
                if(j==3){
                    clearInterval(this);
                    console.log(preVal,'preVal');
                    
                    recall(null,preVal+',2执行完毕');
                }
                j++
            },1000);
            console.log('two完毕');
            
        },
        function three(preVal,recall) {
            setTimeout(function(){
                console.log('上一个函数的值==='+preVal);
                recall(null,'3执行完毕');
            },0);
            console.log("three完毕");
            
        }
    ],function(error,res){
        console.log(error,'error');
        console.log(res,'res');
    });
}
yibu();
console.log('主程序执行完毕');
