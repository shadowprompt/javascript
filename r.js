
var appkey = "1aVtN3J3JY8I";
var appsecret = "vF73FMvwWo5CplFhykrMvwE4w5Mae6nqLmzXT5jEjZ54yE0x";
var queryStr;
var token;
// var oauth_nonce = new Date().getTime();
var parameters= {
    oauth_consumer_key: appkey,
    oauth_nonce: new Date().getTime(),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.round(new Date().getTime()/1000),
    oauth_version: "1.0"
};
var param = {};

    var req_url = 'http://www.daozhao.com/oauth1/request';
    if(access){
        req_url = 'http://www.daozhao.com/oauth1/access';
    }

    var kvdatas = [];
    _.each(_.keys(parameters).sort(), function(key) { //注意,这里要对参数进行排序
        kvdatas.push(key + '=' + parameters[key]);
    });

    var req_string = kvdatas.join('&');
    var the2 = encodeURIComponent(req_url);
    var the3 = encodeURIComponent(req_string);
    console.log(the2);
    console.log(the3);
    var theKey1 = 'POST&' + the2  + '&' + the3;
    console.log(theKey1);
    var tokenSecret = localStorage.getItem('oauth_token_secret') ? localStorage.getItem('oauth_token_secret') :'';
    var theKey2 = appsecret + '&' + tokenSecret;
    console.log(theKey2);

    if(type ==2){
        var options = {
            encodeSignature: true // will encode the signature following the RFC 3986 Spec by default
        }
        var oauth_signature = oauthSignature.generate('POST', req_url, parameters, appsecret, tokenSecret, options)
    }else{
        var oauth_signature= CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(theKey1, theKey2));
    }

    console.log(oauth_signature);

    if(JSON.stringify(param) != '{}'){
        console.log(param);
        for(var key in param){
            kvdatas.push(key + '=' + param[key]);
        }
    }
    var queryStr = kvdatas.join(',') + ',oauth_signature=' + oauth_signature;

    return queryStr;
}

function string2Obj(str){
    var arr = str.split('&');
    for(var i=0;i<arr.length;i++){
        var temp = arr[i].split('=');
        arr[i] = {
             [temp[0].trim()]: temp[1]
        }
    }
    return arr;
}

function requestToken(queryStr, cb){
    console.log(queryStr);
    $.ajax({
        url: 'http://www.daozhao.com/oauth1/request',
        method:"POST",
        cache: false,
        beforeSend: function (xhr) {
            /* Authorization header */
            xhr.setRequestHeader("Authorization", "OAuth " + queryStr);
        },
        success: function(data){
            console.log(data);
            var oauth_token_secret = data.split('=')[2].split('&')[0];
            localStorage.setItem('oauth_token_secret', oauth_token_secret);
            token = string2Obj(data);
            var a = document.createElement('a');
            // a.target = '_blank';
            a.href = 'http://www.daozhao.com/oauth1/authorize?' + data.trim() + '&oauth_callback=http://www.daozhao.com/o/request.html';
            var text = document.createTextNode('进行授权');
            a.append(text);
            document.body.append(a);
        },
        error: function(){
            console.log("失败");
        }
    })
};

function accessToken(queryStr, cb){
    console.log(queryStr);
    $.ajax({
        url: 'http://www.daozhao.com/oauth1/access',
        method:"POST",
        cache: false,
        beforeSend: function (xhr) {
            /* Authorization header */
            xhr.setRequestHeader("Authorization", "OAuth " + queryStr);
        },
        success: function(data){
            console.log(data);
        },
        error: function(){
            console.log("失败");
        }
    })
};

function init(){
    loadData();
}

init();




