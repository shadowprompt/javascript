require(['./main'], function(){
    require(["jquery", "IScroll", "one", "two", "three", "four"], function(jquery, IScroll, one, two, three, four) {
        console.log(three.getHello());
        console.log(IScroll);
        IScroll();
        three.sayHi();
        console.log(four);
    });
});