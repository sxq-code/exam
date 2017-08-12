/**
 * Created by Administrator on 2017/8/11.
 */
var b=0;
for( var a = 2; a < process.argv.length;a++){
    b += (+ process.argv[a]);
}
console.log(b);
