var fs = require("fs");
module.exports = {
    readFile:function(path,recall){
        fs.readFile(path,function(error,data){
            if(error){
                console.log("未能读取该文件："+ error);
                recall("404该页面不存在"+error.toString());
                // throw error;
            }else{
                console.log('读取文件完毕');
                recall(data);
            }
        });
    },
    readImg:function(path,recall){
        fs.readFile(path,'binary',function(error,filedata){
            if(error){
                throw error;
            }else{
                console.log("读取图片完毕");
                recall(filedata);
            }
        });
    },
    // readImg:function(path,res){
    //     fs.readFile(path,'binary',function(error,filedata){
    //         if(error){
    //             throw error;
    //         }else{
    //             res.write(filedata,'binary');
    //             console.log("读取图片完毕");
    //             res.end();
    //         }
    //     });
    // },
}