/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require("fs");

fs.readdir("/Users/Administrator/Desktop/exam/exam6",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});