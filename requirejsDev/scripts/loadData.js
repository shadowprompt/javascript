define(['jquery'], function($) {
    var msgLists = $('.msg-lists');
    //渲染数据
    return function loadMsg(style, cb) {

        var rend = function(cb) {
            var htemp = $("#msgListsTemplate").html();
            // msgLists.html(ht);
            // msgLists.append(ht);
            if (style == "insert") {
                var data = {
                    "msg": [{
                        "name": "张三1",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三2",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三3",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }]
                };
                var ht = _.template(htemp)({
                    result: data.msg
                });
                msgLists.prepend(ht);
                console.log("prepend");
            } else {
                data = {
                    "msg": [{
                        "name": "张三6",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三7",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三8",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三6",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三7",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三8",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三6",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三7",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }, {
                        "name": "张三8",
                        "body": "dfadfdshfsak放假设计放狠爱浮动顺丰快递闪付的",
                        "date": "2017/02/13"
                    }]
                };
                var ht = _.template(htemp)({
                    result: data.msg
                });
                msgLists.append(ht);
            };
            setTimeout(function() {
                typeof cb == "function" && cb();
            }, 200);
        }

        rend(cb);
    }
})