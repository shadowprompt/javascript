//代理模式

//1、通过img之类的标签通过src属性可以向其它服务器发送请求，但是此类请求是get请求
var Count = (function() {
    //缓存图片
    var img = new Image();
    return function(param) {
        var str = 'http://www.count.com/a.gif?';
        for (var i in param) {
            str += i + '=' + param[i];
            //发送统计请求
            img.src = str;
        }
    }
})();

//测试用例，统计num
Count({ num: 10 });

//2、通过script标签（JSONP）
function jsonpCallBack(res, req) {
    console.log(res, req);
}

//3、代理模板