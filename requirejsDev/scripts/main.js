requirejs.config({
    baseUrl: "./scripts",
    paths: {
        "jquery": "common/jquery",
        "iscroll": "common/iscroll-v5.1.3",
        "underscore": "common/underscore-1.8.3",
        "flexible": "common/flexible",
        "tools": "tools"
    },
    name: "main",
    shim: {
        "iscroll": {
            exports: "IScroll"
        },
        "underscore": {
            exports: "_"
        },
        "jquery": {
            exports: "$"
        },
        "tools": {
            exports: "Tools"
        },
        "flexible": {
            exports: "flexible"
        }
    }

})

require(["jquery", "iscroll", "underscore", "one", "two", "three", "loadIscroll", "flexible", "tools"], function($, IScroll, _, one, two, three, loadIscroll, flexible, Tools) {
    console.log(three.getHello());
    loadIscroll("append");
    three.sayHi();
});