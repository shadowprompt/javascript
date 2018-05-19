var request=require('request');
var crypto = require('crypto');
var urlencode = require('urlencode');
var querystring = require('querystring');
var _ = require('underscore');

function request_token(req_url,appkey,secret,callback) {
    var oauth_nonce = new Date().getTime();
    var parameters={
        oauth_consumer_key:appkey,
        oauth_nonce:oauth_nonce,
        oauth_signature_method:"HMAC-SHA1",
        oauth_timestamp:Math.round(oauth_nonce/1000),
        oauth_version:"1.0"
    };

    var kvdatas = [];
    _.each(_.keys(parameters).sort(), function(key) { //注意,这里要对参数进行排序
        kvdatas.push(key + '=' + parameters[key]);
    });

    var query_string = kvdatas.join('&');
    var bash_string = urlencode('GET') + '&' + urlencode(req_url) + '&' + urlencode(query_string);
    var oauth_signature = querystring.escape(crypto.createHmac('sha1', secret + '&').update(bash_string).digest('base64'));

    request.get(req_url+'?'+query_string+'&oauth_signature='+oauth_signature, function (error, response, body) {
        if(body){
            var rtnObj=querystring.parse(body);  //将a=b&c=d 的参数串格式化成object
            if(rtnObj){
                callback(null,rtnObj);
            }
            callback(null,null);
        }
    });
}

var request_token_url='http://www.daozhao.com/oauth1/request';

var appkey='1aVtN3J3JY8I';
var app_secret='vF73FMvwWo5CplFhykrMvwE4w5Mae6nqLmzXT5jEjZ54yE0x';
request_token(request_token_url,appkey,app_secret,function(err,retObject){
    console.log('----------',retObject);
    //上面打印出了retObject ,接着请求第二,第三次,最后拿到有权访问api的 access_token
});