var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var qs=require('querystring');//解析参数的库
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
    $ = require("jquery")(window);
    $("body").append("<div>TEST</div>");
    console.log($("body").html());
});

app.get('/', function(req, res){
	//或提示建议用sendFile，但是那样得提供绝对路径
	res.sendfile('./index.html');
});

app.get('/test', function(req, res){
    var cb = req.query.callback;
    console.log(cb);
    // typeof cb == 'function' && console.log('d');
});

app.post('/login', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	console.log('username = ' + username + ', password = ' + password);
});

app.listen(3000, function(){
	console.log("started on port 3000");
})

// var server = http.createServer(function (req, res) {

// 	if(req.url!=="/favicon.ico"){
//     	res.writeHead(200,{
// 	       	"Content-Type":"application/x-json",
// 	       	"Access-Control-Allow-Origin":"*"
//    		});

//        // res.write(res);
//        	if(req.url=="/aa"){
//        		res.write(JSON.stringify({
//        			"aa": "a1"
//        		}));
//        	}else if(req.url=="/bb"){
//        		res.write(JSON.stringify({
//        			"bb": "bbbbb"
//        		}));
//        	}else{
//        		res.write(JSON.stringify({
//        			"what": "什么东东"
//        		}));
//        	}
//        	console.log(req.body);
//        	res.write("---");

//    	}
//    	req.on("chunk", chunk => {
//    		console.log(chunk);
//    	});
//    	req.on("data", data => {
//    		console.log(data);
//    	});
//    	res.end();
// }).listen(8898, "127.0.0.1", function(){
// 	console.log("开始监听http://127.0.0.1:8898");
// });