(function(){
    var isDev=true;
    var App={
        'getList':'/sell/getList.do',
        'pay':'/sell/pay.do'
    };
//    测试环境
    var url='http://www.a.com';
    if(isDev){
            //生产环境
        url='http://www.b.com';
    }
    for(var key in App){
        App[key]=url+App[key];
    }
    window.App=App;
})();