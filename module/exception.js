module.exports = {
    excepfun:function(flag){
        if(flag == 0){
            throw '我就是那个例外'+flag;
        }else{
            return 'success';
        }
    }
}