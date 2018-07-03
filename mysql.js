var mysql = require("mysql");
// mysql连接池--命令：npm install -g node-mysql 
//登录mysql主机
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'node',
    port:'3306'
});
//创建一个connection
connection.connect(function(err){
    if(err){
        console.log('[connection connect] '+err);
        return;
    }
    console.log('[connection connect] succeed!');
});
//插入
var adduser_sql = 'insert into user (name,pwd) values(?,?)';
var param = ['小明','123456'];
/*更新*/
// var adduser_sql = 'update user set name=?,pwd=? where id=?';
// var param = ['小青','666',5];
/*删除*/
// var adduser_sql = 'delete from user where id=?';
// var param = [3];
connection.query(adduser_sql,param,function(err,res){
    if(err){
        console.log('[insert err] '+err);
        
        return;
    }
    console.log('insert succeed!');
    
});

//查询
connection.query('select * from user',function(err,res,fields){
// connection.query('select * from user where id=?',[2],function(err,res,fields){
    if(err){
        console.log('[query error] '+err);
        return;
    }
    for (let index = 0; index < res.length; index++) {
        console.log(res[index],'res ['+index+']');
        
    }
    // console.log(res[0],'查询结果');
    console.log(fields,'fields');
});
//关闭一个connection
connection.end(function(err){
    if(err){
        console.log('[connection end] '+err);
        return;
    }
    console.log('[connection end ] succeed!');
});


