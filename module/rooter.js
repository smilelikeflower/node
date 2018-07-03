var url = require("url");
var querystring = require("querystring");
var caozuofile = require("./caozuofile");
function getRecall(req,res,type){
    if(type == 'text'){
        res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
        function recall(data){
            res.write(data);
            res.end();
        }
        return recall;
    }else{
        function recall(data){
            res.write(data,'binary');
            res.end();
        }
        return recall;
        res.writeHead(200,{'content-type':'images/jpeg'});
    }
    
}
module.exports = {
    login:function(req,res){
         /*get接收参数*/
        // var getData = url.parse(req.url,true).query;
        // if(getData['name'] != '' || getData['name'] != 'undefined'){
        //     console.log(getData['name'],"name");
        //     console.log(getData['pwd'],"password");
        // }
        /*post方式接收参数*/
        var post = "";
        req.on('data',function(chunk){
            post += chunk;
        });
        //动态网页
        req.on('end',function(){
            post = querystring.parse(post);
            console.log(post['name']);
            // recall = getRecall(req,res,'text');
            var arr = ['name','pwd'];
            function recall(data){  
                dataStr = data.toString(); 
                console.log(dataStr);
                for (var i = 0; i < arr.length; i++) {
                    re = new RegExp('{'+arr[i]+'}','g');  // /\{name\}/g
                    dataStr = dataStr.replace(re,post[arr[i]]);
                }
                res.write(dataStr); 
                res.end();
            }

            caozuofile.readFile('./view/login.html',recall);
        });

        
    },
   showimg:function(req,res){
       recall = getRecall(req,res,'images');
        caozuofile.readImg('./static/images/001.png',recall);
    }
}

// function getRecall(req,res){
//     res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
//     function recall(data){
//         res.write(data);
//         res.end();
//     }
//     return recall;
// }
// module.exports = {
//     login:function(req,res){
//         recall = getRecall(req,res);
//         caozuofile.readFile('./view/login.html',recall);
//     },
//    showimg:function(req,res){
//         res.writeHead(200,{'content-type':'images/jpeg'});
//         caozuofile.readImg('./static/images/001.png',res);
//     }
// }