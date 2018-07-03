var mysql = require("mysql");
function OptPool(){
    this.flag = true;//是否连过
    this.pool = mysql.createPool({
        host:'localhost',
        user:'root',
        password:'root',
        database:'node',
        port:'3306'
    });

    this.getPool = function(){
        if(this.flag){
            //监听connection事件
            this.pool.on('connection',function(connection){
                connection.query('SET SESSION auto_increment_increment=1'); //设置session自增长字段的每次递增的量，默认为1。取值范围是1 .. 65535
                this.flag = false;
            });
        }
        return this.pool;
    }
}
module.exports = OptPool;