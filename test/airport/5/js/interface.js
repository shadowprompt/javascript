(function(){
    var isDev = true;

    var App = {
        'getList' : '/sell/getList.do',
        'pay' : '/sell/pay.do',
    };

    //测试环境
    var url = 'http://wwww.a.com';

    if(isDev){
        //生产环境
        url = 'http://wwww.bbb.com';
    }

    for(var key in App){
        App[key] = url + App[key];
    }

    window.App = App;
})();