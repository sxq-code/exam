/**
 * Created by Administrator on 2017/8/11.
 */
var http = require('http');

http.Server(function(req,res){
    res.end('hello world');
}).listen(3000);

console.log('Sever runing at http://127.0.0.1:3000');
