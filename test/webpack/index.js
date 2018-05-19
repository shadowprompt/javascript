/*
 * @Author: Shadow
 * @Date:   2018-01-17 21:00:37
 * @Last Modified by:   Shadow
 * @Last Modified time: 2018-01-22 22:58:12
 */

'use strict';

(function(modules) { // webpackBootstrap
    // The module cache
    var installedModules = {};

    // The require function
    function __webpack_require__(moduleId) {

        // Check if module is in cache
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // Create a new module (and put it into the cache)
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        // Execute the module function
        // modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded
        module.l = true;

        // Return the exports of the module
        return module.exports;
    }


    // expose the modules object (__webpack_modules__)
    __webpack_require__.m = modules;

    // expose the module cache
    __webpack_require__.c = installedModules;

    // define getter function for harmony exports
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            });
        }
    };

    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ?
            function getDefault() {
                return module['default'];
            } :
            function getModuleExports() {
                return module;
            };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };

    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };

    // __webpack_public_path__
    __webpack_require__.p = "";

    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = 1);
})
/************************************************************************/
([
    /* 0 */
    (function(module, exports) {

        module.exports = "Hello World";

    }),
    /* 1 */
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(2);


    }),
    /* 2 */
    (function(module, exports, __webpack_require__) {

        var index2 = __webpack_require__(3);
        var util = __webpack_require__(0);

        console.log(index2);
        console.log(util, 'from index.js');


    }),
    /* 3 */
    (function(module, exports, __webpack_require__) {

        var util = __webpack_require__(0);
        console.log(util);
        module.exports = "index 2";

    })
]);


;(function(){

    function test(){
        console.log("this.cc", this.cc);
        console.log('test', test);
        test.t = 'ttt';
    }

    test.call({
        cc: 'cccc'
    })

})();

// (function() {
//     function result(data) {
//         console.log('a', a);
//         console.log('arguments', arguments);
//         console.log("result this->", this);
//         return result;
//     }

//     var a = 0;

//     // fetch('http://www.baidu.com').then().catch(result);
//     fetch('http://localhost:8090/webpack/index.html').then().catch(asyncify(result)(99, 88));
//     a++;

//     function asyncify(fn) {
//         var orig_fn = fn;
//         var intv = setTimeout(function() {
//             intv = null;
//             if (fn) {
//                 fn()
//             };
//         }, 0);
//         fn = null;
//         return function() {
//             //触发太快
//             if (intv) {
//                 console.log("手速快");
//                 console.log("this", this, arguments);
//                 var args = [this].concat([].slice.call(arguments)); // [undefined, 99, 88]
//                 console.log("args", args, orig_fn);
//                 // fn = orig_fn.bind.apply(null, args); //报错 Bind must be called on a function
//                 fn = orig_fn.bind.apply(orig_fn, args); //调用orig_fn.bind()，此时的this是orig_fn，参数数args
//                 // 等价于
//                 // fn = orig_fn.bind(undefined, 99, 88);
//             } else {
//                 console.log("this", this, arguments);
//                 orig_fn.apply(this, arguments);
//             }

//         }
//     }
// })();

// ;(function(){
//     function foo(x){
//         //做一些可能耗时的工作_
//         for(var i=0;i<document.all.length;i++){
//             console.log(document.all[i]);
//         }
//         return new Promise(function(resolve, reject){
//             setTimeout(function(){
//                 var timeNow = new Date().getTime();
//                 if(timeNow%2){
//                     resolve('a','b','c'); //只认一个参数，即a，后面的b、c直接无视，arguments里面就一值--a
//                 }else{
//                     reject();
//                 }
//             }, 0);
//         });
//     }

//     var p = foo(42);
//     bar(p);
//     baz(p);

//     function bar(fp){
//         fp.then(function(){
//             console.log("bar foo执行成功");
//         }, function(){
//             console.log("bar foo执行失败");
//         });
//     }
//     function baz(fp){
//         fp.then(function(){
//             console.log("baz foo执行成功");
//         }, function(){
//             console.log("baz foo执行失败");
//         });
//     }

//     function barR(){
//         console.log("barR成功", arguments); //
//     }
//     function bazR(){
//         console.log("bazR成功");
//     }
//     function oops(){
//         console.log("失败");
//     }
//     var p2 = foo(44);
//     console.log(p == p2);
//     p2.then(barR, oops);
//     p2.then(bazR, oops);


// })();

// (function(){
//     //p是一个thenable，但是并非真正的promise
//     var p = {
//         then: function(cb,errcb){
//             cb(42);
//             errcb('sb');
//         }
//     };
//     //并不是像promise那样只会resolve一次
//     p.then(function(val){
//         console.log(val); //42
//     }, function(err){
//         console.log(err); //sb
//     });
//     // 经过Promise.resolve(p)后像promise那样只会resolve一次
//     Promise.resolve(p)
//     .then(function(val){
//         console.log(val); //42
//     }, function(err){
//         console.log(err); //永远不会执行
//     });

//     var pp = {
//         then: function(cb,errcb){
//             errcb('sb');
//             // cc();
//         }
//     };
//     Promise.resolve(pp).catch(function(err){
//         console.log('err', err);
//     });

// })();

;
(function() {
    function* foo(x) {
        var y = x * (yield 'hello');
        var z = 1 + (yield y);
        return z;
    }

    var it = foo(3);
    var res = it.next();
    console.log(res.value); // hello
    res = it.next(7);
    console.log(res.value); // 21
    res = it.next(5);
    console.log(res.value); // 6
})();

(function() {
    var a = 1;
    var b = 2;

    function* foo() {
        a++;
        yield;
        b = b * a;
        a = (yield b) + 3;
    }

    function* bar() {
        b--;
        yield;
        a = (yield 8) + b;
        b = a * (yield 2);
    }
    // var it = foo();
    // var res = it.next();
    // console.log(res.value); //undefined
    // res = it.next();
    // console.log(res.value); //4
    // res = it.next();
    // console.log(res.value); // undefined

    function step(gen){
        var it= gen();
        var last;
        return function(){
            last = it.next(last).value;
            console.log('last', last);
            console.log('a, b=> ', a + ', ' + b);
        }
    }
    for(key in Object.prototype){
        console.log(key);
    }
    var s1 = step(foo);
    var s2 = step(bar);

    s1();
    s1();
    s1();

    s2();
    s2();
    s2();
    s2();
})();