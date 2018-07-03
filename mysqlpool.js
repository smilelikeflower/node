var OptPool = require("./module/optpool");
var optPool = new OptPool();
var pool = optPool.getPool();
//从连接池中获取一个连接
pool.getConnection(function(error,connection){
    //插入
    var adduser_sql = 'insert into user (name,pwd) values(?,?)';
    var param = ['红红','honghong'];
    connection.query(adduser_sql,param,function(error,res){
        if(error){
            console.log(error,'error');
            return;
        }
        console.log(res,'res');
        // connection.release();   //放回连接池 必须放到查询的最后调用
    });

    connection.query('delete from user where name=? && pwd=?',['小青','666'],function(error,res){
        if(error){
            console.log(error,'error');
            return;
        }
        console.log(res,'res---select *');
        // connection.release();   //放回连接池 必须放到查询的最后调用
    });

    connection.query('select * from user',function(error,res){
        if(error){
            console.log(error,'error');
            return;
        }
        console.log(res,'res---select *');
        connection.release();   //放回连接池 必须放到查询的最后调用
    });

});