var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

let json = [{
  xx: 117.5800,
  yy: 36.6700
}]

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use( '*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/fail', function(req, res) {
  res.status(500).send('some error makes fail');
});
app.get('/api/success', function(req, res) {
  res.status(200).send({
    code:100,
    msg:'请求成功',
    data:[{
      a:'aaa'
    }]
  });
});

app.post('/api/submit.json', function(req, res) {
  console.log(req.body);
  if (req.body.value) {
    commetLists.push({
      name: 'Shaodw',
      content: decodeURI(req.body.value),
      publishTime: Date.now()
    });

    res.send({
      "ok": true
    });
  } else {
    res.send({
      "ok": false
    });
  }
});

app.get('/api/wordpress', function(req, res) {
  var querystring = require('querystring');
  var data = querystring.stringify({
    age: 22,
    db: 'bbbbb'
  });

  var https = require('https');
  var opt = {
    method: "GET",
    host: "www.daozhao.com",
    port: 443,
    path: "/wp-json/wp/v2/posts?per_page=10",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": data.length
    }
  };
  //发送一个请求
  var req = https.request(opt, function(serverFeedback) {
    //console.log(serverFeedback.statusCode);
    serverFeedback.on('data', function(chunk) {
      //response.end('BODY: ' + chunk);
      res.end('response ' + chunk);
      //console.log('response ', chunk);
    }).on('end', function(chunk) {
      console.log('end');
    });
    return;
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
  console.log('ccc' + data);
  req.end();
})

app.get('*', function(req, res) {
  res.send({
    msg: 'nothing'
  });
});

app.listen(8555, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8555');
});