var http = require('http');
var querystring = require('querystring');
//发送request
var postData = querystring.stringify({
	"arg1":"66386386229"
});
var options = {
	// host: "127.0.0.1",
	host: "220.248.75.36",
	// hostname: "220.248.75.36",
	// path: "/aa",
	path: "/handapp/PGcardAmtServlet",
	port: 8898,
	// method: "get",
	// headers: {
	// 	'Content-Type': 'application/x-www-form-urlencoded',
	//     'Content-Length': Buffer.byteLength(postData)
	// }
};
var request = http.request(options, (res) => {
	// res =  ${res};
	console.log(`STATUS: ${res.statusCode}`);
	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
	    console.log(`BODY: ${chunk}`);
	});

	res.on('end', () => {
	    console.log('No more data in response.');
	});

});
request.on('response',function(){
	console.log("RESPONSE..");
});
request.on('error', (e) => {
	console.log(`problem with request: ${e.message}`);
});

// write data to request body
request.write(postData);
request.end();