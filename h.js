var hmacsha1 = require('hmacsha1');
var oauthSignature = require('oauth-signature');

var KEY = 'http%3A%2F%2Fwww.daozhao.com%2Foauth1%2Frequest&oauth_consumer_key%3D1aVtN3J3JY8I%26oauth_nonce%3DfeqS2T%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1500045512%26oauth_version%3D1.0';

var DATA = 'vF73FMvwWo5CplFhykrMvwE4w5Mae6nqLmzXT5jEjZ54yE0x&';

var hash = hmacsha1(KEY, DATA);
console.log(hash);



// var url = 'http://www.daozhao.com/oauth1/access';
// var url ='http://www.daozhao.com/oauth1/access?oauth_verifier=upnQO633DPnxHJbVaYlDlXx0';
// var consumerSecret = 'vF73FMvwWo5CplFhykrMvwE4w5Mae6nqLmzXT5jEjZ54yE0x';
// var tokenSecret ='pRo5jVMPMLxWcDTtCDdHHglwkMjleClS2vCHVgVB8iZxvZ3s';

var url ='http://openapi.qzone.qq.com/oauth/qzoneoauth_request_token';
var consumerSecret = 'EBAnx3PFZbwi3sC7';
var tokenSecret ='';


var appkey = "1106216239";
var parameters = {
    oauth_consumer_key: appkey,
    oauth_nonce: Math.round(new Date().getTime()/1000),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: new Date().getTime()+25000,
    oauth_version: "1.0"
};
var options = {
    encodeSignature: true // will encode the signature following the RFC 3986 Spec by default
}




var res = oauthSignature.generate('GET', url, parameters, consumerSecret, tokenSecret, options)
parameters['oauth-signature'] = res;
var p  = [];
for(key in parameters){
   p.push(key + '=' + parameters[key]);
}
var objString = p.join('&');
console.log(objString);

console.log(res);

//
//OAuth oauth_consumer_key="1aVtN3J3JY8I",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1500045512",oauth_nonce="feqS2T",oauth_version="1.0",oauth_signature="hrh1zgi3OeIc%2BPHVTV6FBXM3%2FfI%3D"
//

// OAuth oauth_consumer_key="1aVtN3J3JY8I",oauth_token="ZXEuTf4kXf2sO9QGPQc3CGjE",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1500047541",oauth_nonce="t7kR2r",oauth_version="1.0",oauth_signature="9I9FpcPFwWqiUbAgIVI2WWXlw%2Bs%3D"
//
//OAuth oauth_consumer_key="1aVtN3J3JY8I",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1500047817",oauth_nonce="UaI60b",oauth_version="1.0",oauth_signature="kiNyUb3IkzKSqfywQ4EJKmmHx9c%3D"
//
//OAuth oauth_consumer_key="1aVtN3J3JY8I",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1500047918",oauth_nonce="OLdlcQ",oauth_version="1.0",oauth_signature="738Z5NFVovnxJ5BsLt9Sbj5%2BcIA%3D"
//
//OAuth oauth_consumer_key="1aVtN3J3JY8I",oauth_token="30BwTtXoPnJpyhA8a2K5aWBG",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1500048139",oauth_nonce="9MtlNh",oauth_version="1.0",oauth_signature="62tpEsFGsUFjxkrFTqBXfss4z2I%3D"