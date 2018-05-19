/*
 * @Author: Shadow
 * @Date:   2017-10-15 20:43:35
 * @Last Modified by:   Shadow
 * @Last Modified time: 2017-10-22 18:01:31
 */

'use strict';
// import Rx from 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

var Rx = require('rxjs/Rx');
var Http = require('http');

var text = document.querySelector('#text'),
    timer = null,
    currentSearch;
// text.addEventListener('keyup', function(e){
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//         // 声明一个当前所搜的状态变量
//         currentSearch='书';

//         var searchText = e.target.value;
//         $.ajax({
//             url: '//www.sogou.com/web?query=' + searchText,
//             success: data => {
//                 // 判断后台返回的标志与我们存的当前搜索变量是否一致
//                 if (data.search === currentSearch) {
//                     // 渲染展示
//                     render(data);
//                 } else {
//                     // ..
//                 }
//             }
//         });
//     },250)
// })
// var $text = $('#text');
var keyups = Rx.Observable.fromEvent(text, 'keyup')
    .pluck('target', 'value')
    .flatMap(e => {
        console.log(e)
        return Rx.Observable.of(e)
    })

// .flatMap(value => Http.get('http://www.qq.com/' + value))
// .filter(function(text) {
//     console.log(text);
//     return text.length > 2
// });
.subscribe(function(e) {
    console.log(e);
});

var dd = Rx.Observable.of(['a', '1', true]);
dd.map(function(item) {
    console.log(item);
})

var oldArr = ['a', 'b', 'c'];
// const newArr = Array.prototype.forEach.call(oldArr, item => {
//     console.log(item);
//     return item == 'a'
// });
const newArr = oldArr.filter(item => {
    console.log(item);
    return item == 'a'
});
console.log(newArr);
console.log(oldArr);



// 建立一个，从右至左，管道式的函数组合 函数
var compose = function(...list) {
    var last = list[list.length - 1];
    var rest = list.slice(0, -1);
    return (...args) => rest.reduceRight((preValue, currentFunc) => {
        console.log('prev', preValue);
        console.log('curf', currentFunc);
        return currentFunc(preValue), last(...args)
    })
}

// 使用方法：
// 加感叹号
var exclaim = (x) => x + '!!!!';
// 变大写
var upperCase = (x) => x.toUpperCase();
// 加其他符号
var other = (x) => x + '@@@';
// 函数组合 ------> 函数从右往左地执行，函数执行过程的可读性非常高
var last = compose(other, upperCase, exclaim);
console.log(last('hello'))
    // 返回: HELLO!!!!@@@

var ob = Rx.Observable.create(observer => {
    console.log(observer)
    observer.next(2);
    observer.complete();
    return () => console.log('disposed');
});
ob.subscribe();
console.log(ob)

console.log(Http.get)
var streamA = Rx.Observable.of(2);
streamA.subscribe(v => console.log(v));

function outer() {
    var msg = 10;
    return function() {
        var inMsg = 100;
        console.log(++msg); //执行闭包后msg会存在
        console.log(++inMsg); //执行闭包后inMsg不会存在

        // return function() {
        //     console.log('tt', msg);
        // };
    }
}
var testOuter = outer();
// var testOuterLast = testOuter();

// outer()(); //11
// outer()(); //11
testOuter(); //11 101
testOuter(); //12 101
// testOuter()(); //13
// testOuterLast();
// testOuterLast();



!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n){function t(e,n){var t=$(e),r=t.parent().find(".error-message");0===r.length&&(r=$('<span class="error-message"></span>'),t.parent().append(r)),r.text(n),r.show()}function r(e,n){$(e).parent().find(".error-message").hide()}var o=function(e){return"http://huziketang.com/api/react-books"+e},a=function(){var e=function(){i(function(e){e||m()}),setTimeout(e,5e3)};e()},i=function(e){var n=c();if(!n||!n.email||!n.readCode)return e(!1);$.ajax({url:o("/checkIfGranted/"+n.email+"/"+n.readCode),type:"GET",success:function(n){e(n.data)},error:function(e){console.log(e)}})},c=function(){try{return JSON.parse(localStorage.getItem("reader"))}catch(e){return null}},u=function(e,n){try{return localStorage.setItem("reader",JSON.stringify({email:e,readCode:n}))}catch(e){return null}},l=(window.alert,$("#mask-template").remove().html()),d=function(){for(var e=f(),n="",t=0;t<e;t++)n+=s("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXC_VBNM1234567890-");return"#"+n},f=function(){return 2+Math.floor(10*Math.random())},s=function(e){return e[Math.floor(Math.random()*e.length)]},p="",m=function(){var e=p;p=d();var n=$(l);n.css({position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.9)",top:0,left:0}),n.attr("id",p.replace("#","")),$(document.body).append(n),e&&$(e).remove(),$("#granted-modal").show()},h=function(){$(window).on("keydown",function(e){e.ctrlKey&&83===e.keyCode&&(e.preventDefault(),window.location.href="http://baidu.com"),e.metaKey&&83===e.keyCode&&(e.preventDefault(),window.location.href="http://baidu.com")})},v=function(){var e=$("#readcode-input-area"),n=$("#try-to-buy");$("#buy-now").on("click",function(){e.hide(),n.show()}),$("#back-to-input").on("click",function(){n.hide(),e.show()}),$("#alipay").on("click",function(){var e=$("#reader-email").val();/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?(r("#reader-email"),$("#back-to-input").click(),$("#email").val(e),$("#read-code").focus(),window.open(o("/alipay/"+e))):t("#reader-email","请输入正确的邮箱地址")})},g=function(){var e=$("#email"),n=$("#read-code");$("#check-granted").on("click",function(){u(e.val(),n.val()),i(function(e){e?($(p).remove(),$("#granted-modal").hide()):t("#email","邮箱或者阅读码不正确")})}),$("#get-read-code-form, #read-code-form").on("submit",function(e){e.preventDefault()})};(function(){var e=window.location.href.match(/lesson(\d+)/);return!!(e&&1*e[1]>=28)})()&&function(){a(),h(),v(),g()}()}]);