var ws = require("nodejs-websocket");
console.log("开始建立连接。。。");
var server=ws.createServer(function(conn){
	conn.on("text",function(str){
		console.log(str);
		conn.sendText(str);
	});
	conn.on("close", function(){
		console.log("关闭连接");
	});
	conn.on("error", function(){
		console.log("异常关闭");
	});
}).listen(8091);
console.log("Websocket 建立完毕");