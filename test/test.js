/*
 * @Author: Shadow
 * @Date:   2017-0perPage-11 23:23:16
 * @Last Modified by:   Shadow
 * @Last Modified time: 2017-0perPage-13 18:28:perPage7
 */

'use strict';

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.getName = function() {
//     return this.name;
// }

// var objectFactory = function() {
//     var obj = new Object(),
//         Constructor = [].shift.call(arguments); //取得外部传入的构造器，此处是Person

//     obj.__proto__ = Constructor.prototype; //指向正确的原型
//     var ret = Constructor.apply(obj, arguments); //取得外部传入的构造器给obj设置属性
//     return typeof ret === 'Object' ? ret : obj;
// };

// var a = objectFactory(Person, 'steve');
// document.getElementById = (function(func) {
//     console.log(arguments);
//     return function() {
//         console.log(arguments);

//         return func.apply(document, arguments);
//     }
// })(document.getElementById);

// document.getElementById('div1'); //window下的此方法默认绑定this为document

// var getId = document.getElementById; //如果作为普通方法调用，需要绑定响应的this
// console.log(getId.bind(document)('div1'));

// Function.prototype.cc = function() {
//     var self = this, // 保存原函数
//         context = [].shift.call(arguments), // 需要绑定的 this 上下文
//         args = [].slice.call(arguments); // 剩余的参数转成数组
//     return function() { // 返回一个新的函数
//         return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
//         // 执行新的函数的时候，会把之前传入的 context 当作新函数体内的 this
//         // 并且组合两次分别传入的参数，作为新函数的参数
//     }
// };
// var obj = {
//     name: 'sven'
// };
// var func = function(a, b, c, d) {
//     console.log(this.name); // 输出： sven
//     console.log([a, b, c, d]); // 输出： [ 1, 2, 3, 4 ]
// }.cc(obj, 1, 2);
// func(3, 4);

// // sessionStorage.removeItem('test');
// var render = function(data) {
//     if (data.length > 0) {
//         for (var i = 0; i < data.length; i++) {
//             console.log(data[i].id);
//         }
//     } else {
//         console.log("暂无数据");
//     }
// };

// var perPage = 5;

// var fetchData = function(page) {
//     var resultObj;
//     if (!sessionStorage.getItem('test')) { //从未加载
//         var localData = JSON.parse(localStorage.getItem('test'));
//         console.log("首次加载");
//         //数量超过一页
//         if (localData.count > perPage) {
//             resultObj = {
//                 count: perPage,
//                 lists: localData.lists
//             }
//         } else {
//             resultObj = {
//                 count: localData.count,
//                 lists: localData.lists
//             }
//         }
//         sessionStorage.setItem('test', JSON.stringify(resultObj));
//         render(resultObj.lists);
//     } else {
//         console.log("已存在sessionStorage");
//         var sessData = JSON.parse(sessionStorage.getItem('test'));
//         // var dataMinus = localData.count - sessData.count;
//         //根据已加载的数目计算应该加载哪一页 14/5 = 3
//         if (page) {
//             var localData = JSON.parse(localStorage.getItem('test'));
//             console.log("传递进来的页数是 " + page);
//             if (localData.count > sessData.count) {
//                 if (localData.count > page * perPage) {
//                     console.log("大于");
//                     resultObj = {
//                         'count': page * perPage,
//                         'lists': localData.lists.slice(sessData.count % perPage)
//                     }
//                 } else {
//                     console.log("小于");
//                     var start = sessData.count % perPage;
//                     var end = (localData.count % perPage == 0) ? perPage　 : localData.count % perPage;
//                     console.log("start= " + start + ', end= ' + end);
//                     resultObj = {
//                         'count': localData.count,
//                         'lists': localData.lists.slice(start, end)
//                     }
//                 }
//                 sessionStorage.setItem('test', JSON.stringify(resultObj));
//                 render(resultObj.lists);
//             } else {
//                 console.log("无需请求");
//                 render([]);
//             }
//         } else {
//             //当刚好整除时，页面要是商值+1，否则就是 余数的Match.ceil
//             var shang = (sessData.count % perPage == 0) ? sessData.count / perPage + 1 : Math.ceil(sessData.count / perPage);
//             console.log("准备请求第 " + shang + " 页");
//             fetchData(shang);
//         }
//     }
// }

// var cache = {};
// var mult = function() {
//     var args = Array.prototype.join.call(arguments, ',');
//     console.log(args);
//     if (cache[args]) {
//         console.log(cache[args]);
//         return cache[args];
//     }
//     var a = 1;
//     for (var i = 0, l = arguments.length; i < l; i++) {
//         a = a * arguments[i];
//     }
//     console.log(cache);
//     return cache[args] = a;
// };
// console.log(mult(1, 2, 3)); // 输出： 6
// console.log(mult(1, 2, 3));
// //柯里化
// var cost = (function() {
//     var args = [];
//     return function() {
//         if (arguments.length === 0) { //当不传参数时把之前传的参数加起来
//             var money = 0;
//             for (var i = 0, l = args.length; i < l; i++) {
//                 money += args[i];
//             }
//             return money;
//         } else { //有参数时实际上是把参数存起来
//             [].push.apply(args, arguments);
//         }
//     }
// })();
// cost(100); // 未真正求值
// cost(200); // 未真正求值
// cost(300); // 未真正求值
// console.log(cost());

// Function.prototype.uncurrying = function() {
//     var self = this;
//     return function() {
//         var obj = Array.prototype.shift.call(arguments);
//         return self.apply(obj, arguments);
//     };
// };


// var call = Function.prototype.call.uncurrying();
// var fn = function(name) {
//     console.log(name);
// };
// call(fn, window, 'sven'); // 输出： sven

// var apply = Function.prototype.apply.uncurrying();
// var fn = function(name) {
//     console.log(this.name); // 输出： "sven"
//     console.log(arguments); // 输出: [1, 2, 3]
// };
// apply(fn, {
//     name: 'sven'
// }, [1, 2, 3]);

// var throttle = function(fn, interval) {
//     var __self = fn, // 保存需要被延迟执行的函数引用
//         timer, // 定时器
//         firstTime = true; // 是否是第一次调用
//     return function() {
//         var args = arguments,
//             __me = this;
//         if (firstTime) { // 如果是第一次调用，不需延迟执行
//             __self.apply(__me, args);
//             return firstTime = false;
//         }
//         if (timer) { // 如果定时器还在，说明前一次延迟执行还没有完成
//             return false;
//         }
//         timer = setTimeout(function() { // 延迟一段时间执行
//             clearTimeout(timer);
//             timer = null;
//             __self.apply(__me, args);
//         }, interval || 500);
//     };
// };
// window.onresize = throttle(function() {
//     console.log(1);
// }, 500);



// (function() {
//     //zepto没有scrollTo动画，所以在这里扩展了一个scrollTo函数；
//     $.fn.scrollTo = function(options) {
//         var defaults = {
//             toT: 90, //滚动目标位置
//             durTime: 500, //过渡动画时间
//             delay: 30, //定时器时间
//             callback: null //回调函数
//         };
//         var opts = $.extend({}, defaults, options),
//             timer = null,
//             _this = this,
//             curTop = _this.scrollTop(), //滚动条当前的位置
//             subTop = opts.toT - curTop, //滚动条目标位置和当前位置的差值
//             index = 0,
//             dur = Math.round(opts.durTime / opts.delay),
//             smoothScroll = function(t) {
//                 console.log(_this);
//                 window.cc = _this;
//                 index++;
//                 var per = Math.round(subTop / dur);
//                 if (index >= dur) {
//                     _this.scrollTop(t);
//                     window.clearInterval(timer);
//                     if (opts.callback && typeof opts.callback == 'function') {
//                         opts.callback();
//                     }
//                     return;
//                 } else {
//                     _this.scrollTop(curTop + index * per);
//                 }
//             };
//         timer = window.setInterval(function() {
//             smoothScroll(opts.toT);
//         }, opts.delay);

//         return _this;
//     };

//     $('.search-letters a').each(function(index, item) {

//         $(this).click(function() {
//             var att = $(this).attr('name');
//             console.log(att);
//             var curOffsetTop = $(".address_booK_letter a[name=" + att + "]")[0].offsetTop;
//             console.log(curOffsetTop);
//             $(".address_book_body").scrollTo({
//                 toT: curOffsetTop,
//                 durTime: 100
//             });
//         });
//     });
// })();

// var myEach = function(elements, callback) {
//     var i, key
//     if ($.isArray(elements)) {
//         for (i = 0; i < elements.length; i++)
//             if (callback.call(elements[i], i, elements[i]) === false) return elements
//     } else {
//         for (key in elements) {
//             if (callback.call(elements[key], key, elements[key]) === false) return elements
//         }
//     }

//     return elements
// }
// myEach({
//     a: 'aa',
//     b: 'bb'
// }, function(arg1, arg2, arg3) {
//     console.log(arg1);
//     console.log(arg2);
// });

// // var mycar = {make: "Honda", model: "Accord", year: 1998};
// // if ( "make" in mycar ) console.log('true');
// //   else console.log('false');  // 显示true

// // $(document).ready(function() {
// //     $("#btn").click(function() {
// //         var vname = $("#name").val();
// //         var vemail = $("#email").val();
// //         if (vname == '' && vemail == '') {
// //             alert("Please fill out the form");
// //         } else if (vname == '' && vemail !== '') {
// //             alert('Name field is required')
// //         } else if (vemail == '' && vname !== '') {
// //             alert('Email field is required')
// //         } else {
// //             $.post("jquery_post.php", //Required URL of the page on server
// //                 { // Data Sending With Request To Server
// //                     name: vname,
// //                     email: vemail
// //                 },
// //                 function(response, status) { // Required Callback Function
// //                     alert("*----Received Data----*\n\nResponse : " + response + "\n\nStatus : " + status); //"response" receives - whatever written in echo of above PHP script.
// //                     $("#form")[0].reset();
// //                 });
// //         }
// //     });
// // });
// //
// var inputStr ='1+8*3',
//         inputArr =[],
//         outputArr=[],
//         outStack=[];

// function getPro(op){
//     switch(op){
//         case '+':
//             return 1;
//         case '-':
//             return 1;
//         case '*':
//             return 2;
//         case '/':
//             return 2;
//         default:
//             return 0;
//     }
// }

// function isNum(num){
//     if(/\d/.test(num)) return true;
// }

// function isOperator(opr){
//     if( /[\+\-\*\/]/.test(opr) ) return true;
// }

// function doit(){


//     inputArr = inputStr.split('');

//     for(var i=0;i<inputArr.length;i++){
//         if( isNum(inputArr[i]) ){
//             outputArr.push(inputArr[i]);
//         }else if( isOperator(inputArr[i]) ){
//             while ( outStack.length>0 && getPro(inputArr[i])<= getPro(outStack[outStack.length-1]) ){
//                 outputArr.push( outStack[outStack.length] );
//                 outStack.split(outStack.length-1,1);
//             }
//             outStack.push(inputArr[i]);
//         }else if(inputArr[i] == '('){
//             outStack.push(inputArr[i]);

//         }else if(inputArr[i] == ')'){
//             outStack.push(inputArr[i]);

//         }
//     }
//     for(var j=outStack.length-1;j>=0;j--){
//         outputArr.push(outStack[j]);
//     }
// }

// doit();

// console.log('inputArr', inputArr);
// console.log('outputArr', outputArr);
// console.log('outStack', outStack);


// var loopData = [{
//     count: 1,
//     href: 1,
//     child: [{
//         count: 2,
//         href: 2
//     }, {
//         count: 3,
//         href: 3
//     }, {
//         count: 4,
//         href: 4,
//         child: [{
//             count: 5,
//             href: 5
//         }]
//     }]
// }, {
//     count: 6,
//     href: 6
// }, {
//     count: 7,
//     href: 7
// }];

// var loopRes = [];
// function loopFn(arr){
//     for(var i=0;i<arr.length;i++){
//         loopRes.push({
//             href:arr[i].href
//         });
//         if( arr[i].child){
//             loopFn(arr[i].child);
//         }
//     }
// }
// loopFn(loopData);
// console.log(loopRes);

// function testContext(arg1, arg2){
//     var arg = 'ccc';
//     var arg1 = 'b';
//     var aa ='aa';
//     function test(){
//         console.log(test);
//     }

//     var test = 'test';
// }

// testContext('aa', 'bbb')


// var testArr = ['a'];

// var testb = {};

// Object.defineProperty(testb,'a',{
//     configurable: true,
//     enumerable:true,
//     get: function(){
//         console.log('getter');
//         return testArr;
//     },
//     set: function(arg){
//         console.log('setter');
//         testArr.push(arg);
//     }
// })



// // !(function() {
// //     var debug = false,
// //         isTest = false;

// //     var dom = {
// //         contentWrap: $('#slider'),
// //         toastWrap: $('.toast'),
// //         headerWrap: $('.header-container')
// //     };
// //     //滑动
// //     function slide(index) {
// //         mui('#slider').slider().gotoItem(index);
// //     }
// //     //分割答案
// //     function qaSplit(str) {
// //         return str.split(':');
// //     }
// //     //校验
// //     function checkAnswer() {
// //         var pageIndex = [];
// //         var result = {};
// //         var slideItems = dom.contentWrap.find('.mui-slider-item');
// //         $.each(slideItems, function(index, item) {
// //             var index = $(item).attr('data-index');
// //             var flag = $(item).attr('data-flag');
// //             var choiceAnswer = $(item).find('.choice_item.active').find('.choiceAnswer').html();
// //             var essayAnswer = $(item).find('textarea').val();
// //             if (flag == '001') {
// //                 if (!choiceAnswer) {
// //                     pageIndex.push(index - 1);
// //                 }
// //             } else if (flag == '002') {
// //                 if (!choiceAnswer) {
// //                     pageIndex.push(index - 1);
// //                 } else if (choiceAnswer && ($(item).find('.choice_item.active').index() == $(item).find('.choice_item').length - 1) && !(essayAnswer.trim())) {
// //                     pageIndex.push(index - 1);
// //                 }
// //             } else if (flag == '003') {
// //                 if (!essayAnswer.trim()) {
// //                     pageIndex.push(index - 1);
// //                 }
// //             }
// //         });
// //         if (pageIndex.length > 0) {
// //             result.flag = false;
// //             result.itemList = pageIndex;
// //         } else {
// //             result.flag = true;
// //         }

// //         return result;
// //     }
// //     //获取答案
// //     function getAnswer() {
// //         var result = [];
// //         var slideItems = dom.contentWrap.find('.mui-slider-item');

// //         $.each(slideItems, function(index, item) {
// //             result.push.call(result, {
// //                 'qaNum': index + 1,
// //                 'choiceAnswer': $(item).find('.choice_item.active').find('.choiceAnswer').html(),
// //                 'essayAnswer': $(item).find('textarea').val() && $(item).find('textarea').val().trim() && Tools.helpHandler.xssCheck($(item).find('textarea').val().trim()),
// //             });
// //         });
// //         return result;
// //     }

// //     //获取下一个跳转页index
// //     function goIndex(currentIndex) {
// //         var slideItems = $('.mui-slider-item');
// //         for (var i = currentIndex; i < slideItems.length - 1; i++) {
// //             if ($(slideItems[i]).attr('data-statu') == 'false') {
// //                 return i;
// //             }
// //         }
// //         return slideItems.length - 1;
// //     }
// //     // 返回按钮的点击事件
// //     function bindBack() {
// //         dom.headerWrap.on('tap', '.header-left', function() {
// //             setTimeout(function() {
// //                 aladdin.navigator.back(); //返回首页
// //             }, 200);
// //         });
// //     }
// //     /**
// //      * 001-全选择
// //      * 002-有选择有编辑
// //      * 003-编辑
// //      */
// //     function bindEvents() {
// //         dom.contentWrap.on('tap', '.choice_item', function(e) {
// //             var target = e.currentTarget;
// //             var index = $(target).parents('.mui-slider-item').attr('data-index') - 1;
// //             var flag = $(target).parents('.mui-slider-item').attr('data-flag');
// //             // 判断 三大类 --- 是否是其他
// //             if (flag == '001') {
// //                 $(target).parents('.mui-slider-item').find('.choice_item ').removeClass('active');
// //                 $(target).addClass('active');

// //                 $(target).parents('.mui-slider-item').attr("data-statu", "true");
// //                 slide(goIndex(index));

// //             } else if (flag == '002') {
// //                 $(target).parents('.mui-slider-item').find('.choice_item ').removeClass('active');
// //                 $(target).addClass('active');
// //                 if ($(target).index() == $(target).parents('.mui-slider-item').find('.choice_item').length - 1) {
// //                     $(target).parents('.mui-slider-item').find('.suggest').show();
// //                     $(target).parents('.mui-slider-item').find('.next_btn').show();
// //                     $(target).parents('.mui-slider-item').attr("data-statu", "false");
// //                     // setHeight(); //重新计算高度
// //                 } else {
// //                     $(target).parents('.mui-slider-item').find('textarea').val('');
// //                     $(target).parents('.mui-slider-item').find('.suggest').hide();
// //                     $(target).parents('.mui-slider-item').find('.next_btn').hide();
// //                     $(target).parents('.mui-slider-item').attr("data-statu", "true");
// //                     slide(goIndex(index));
// //                 }
// //             }
// //         });
// //         dom.contentWrap.on('tap', '.next_btn', function(e) {
// //             var target = e.currentTarget;
// //             var index = $(target).parents('.mui-slider-item').attr('data-index') - 1;
// //             var flag = $(target).parents('.mui-slider-item').attr('data-flag');
// //             var checkValue = $(target).parents('.mui-slider-item').find('.choice_item.active').find('span').html() && $(target).parents('.mui-slider-item').find('.choice_item.active').find('span').html().trim();
// //             var markValue = $(target).parents('.mui-slider-item').find('textarea').val() && $(target).parents('.mui-slider-item').find('textarea').val().trim();
// //             if (flag == '002') {
// //                 if (($(target).parents('.mui-slider-item').find('.choice_item.active').index() == $(target).parents('.mui-slider-item').find('.choice_item').length - 1) && (markValue != '')) {

// //                     $(target).parents('.mui-slider-item').attr("data-statu", "true");
// //                     slide(goIndex(index));
// //                 } else if (checkValue && ($(target).parents('.mui-slider-item').find('.choice_item.active').index() != $(target).parents('.mui-slider-item').find('.choice_item').length - 1)) {

// //                     $(target).parents('.mui-slider-item').attr("data-statu", "true");
// //                     slide(goIndex(index));

// //                 } else {
// //                     $(target).parents('.mui-slider-item').attr("data-statu", "false");
// //                 }

// //             } else {
// //                 if (markValue) {

// //                     $(target).parents('.mui-slider-item').attr("data-statu", "true");
// //                     slide(goIndex(index));
// //                 } else {
// //                     $(target).parents('.mui-slider-item').attr("data-statu", "false");
// //                 }
// //             }

// //         });
// //         dom.contentWrap.on('tap', '.submit', function() {
// //             AladdinTools.hideSoftInput(function() {
// //                 if (!(checkAnswer().flag)) {
// //                     AladdinTools.toastShow("请填写完整");
// //                     slide(parseInt(checkAnswer().itemList[0]));
// //                     return;
// //                 } else {
// //                     Tools.Loading.show();
// //                     AladdinTools.request('post', AppInter.submitQuesSurvey, { "answerList": JSON.stringify(getAnswer()) }, function(res) { //成功
// //                         Tools.Loading.hide();

// //                         $('.toast').show();

// //                     }, function(err, res) { //失败
// //                         Tools.Loading.hide();
// //                         if (err && err.code == "0") {
// //                             AladdinTools.toastShow("网络延迟");
// //                             return;
// //                         }
// //                         res && res.responseMsg ? AladdinTools.toastShow(res.responseMsg) : AladdinTools.toastShow("提交失败！");
// //                         res && res.position && slide(res.position);
// //                     }, function(err, res) { //始终执行
// //                         Tools.Loading.hide();
// //                     }, function() { //无网络
// //                         Tools.Loading.hide();
// //                         AladdinTools.toastShow("请检查您的网络！");
// //                     }, false);
// //                 }
// //             });

// //         });
// //         dom.toastWrap.on('click', '.del', function(e) {
// //             var target = e.currentTarget;
// //             $(target).parents('.toast').hide();

// //             setTimeout(function() {
// //                 aladdin.navigator.back(); //返回首页
// //             }, 200);
// //         });
// //         // dom.contentWrap.find('textarea').on('input', function(e) {
// //         //     var target = e.currentTarget;
// //         //     if ($(target).val().trim().length > 10) {
// //         //         AladdinTools.toastShow('请输入不超过300字符');
// //         //     }
// //         // });
// //     }

// //     function load(cb) {
// //         var render = function(res, total) {
// //             dom.contentWrap.html(_.template($('#tpl_survey').html(), { result: res, total: total, splitFn: qaSplit }));
// //         };
// //         if (isTest) {
// //             var data = { "responseCode": "001", "responseMsg": "", "total": "17", "qaList": [{ "flag": "002", "options": "客户经理:团队负责人:分部负责人:总部人员:其他", "qaNum": 1, "question": "您在汽融助手中的角色？" }, { "flag": "001", "options": "每个工作日:每周:当有特殊任务时候:使用较少", "qaNum": 2, "question": "您使用汽融助手的手机的频次？" }, { "flag": "002", "options": "远程面签:退补件:贷款查询:贷款申请:线索处理:出账申请:轨迹追踪:考勤:培训:远程面签监控:其他", "qaNum": 3, "question": "您最满意的功能模块是？" }, { "flag": "002", "options": "汽融助手方便高效:使用其他渠道不方便，使用手机较多:只有汽融助手有该功能:其他", "qaNum": 4, "question": "促使您较多使用汽融助手协助完成工作而不使用其他渠道的原因是？" }, { "flag": "001", "options": "非常满意:满意:不满意:很不满意", "qaNum": 5, "question": "您对汽融助手的页面设计和可操作性满意吗？" }, { "flag": "001", "options": "充分了解:知道一些常用服务:每次都抱着试试看能不能找到这个服务的心情使用:完全不知道", "qaNum": 6, "question": "您能明确知道汽融助手App提供哪些服务吗？" }, { "flag": "001", "options": "非常愿意:一般:不愿意", "qaNum": 7, "question": "假如您身边有还未使用汽融助手的同事，您愿意向他推荐吗？" }, { "flag": "001", "options": "能很快自主掌握使用要领:经培训后能流畅使用:培训后需要长时间摸索尝试:长时间使用后仍然时有出错", "qaNum": 8, "question": "在初次使用新功能时，您总能很快掌握使用要领吗？" }, { "flag": "001", "options": "引领潮流:一般，没有太大感觉:落后", "qaNum": 9, "question": "就您对汽车金融行业的了解，您认为汽融助手App能跟得上行业步伐吗？" }, { "flag": "001", "options": "需要填写的项目较少，操作便捷:需要填写的项目适中:需要填写的项目较多但还是能接受:需要填写的项目很多，操作不便:需要填写的项目太多，我认为有更好的输入方式", "qaNum": 10, "question": "请您对汽融助手需要填写信息的功能进行评价。" }, { "flag": "001", "options": "逻辑清晰，符合业务，交互体验好:逻辑较清晰，符合业务:逻辑复杂，勉强可以接受:逻辑太复杂，明显感觉一些不必要的跳转或交互", "qaNum": 11, "question": "您觉得当前汽融助手操作逻辑是否真实反映业务状态？" }, { "flag": "002", "options": "非常满意:满意:不满意:很不满意:最大的问题及建议是", "qaNum": 12, "question": "您对远程面签模块设计和操作性满意吗？" }, { "flag": "002", "options": "非常满意:满意:不满意:很不满意:最大的问题及建议是", "qaNum": 13, "question": "您对出账模块设计和操作性满意吗？" }, { "flag": "002", "options": "非常满意:满意:不满意:很不满意:最大的问题及建议是", "qaNum": 14, "question": "您对退补件模块设计和操作性满意吗？" }, { "flag": "002", "options": "非常满意:满意:不满意:很不满意:最大的问题及建议是", "qaNum": 15, "question": "您对线索模块设计和操作性满意吗？" }, { "flag": "003", "qaNum": 16, "question": "您还期望汽融助手App再加入什么样的功能，帮助您完成工作？" }, { "flag": "003", "qaNum": 17, "question": "请您对汽融助手提出意见，或向我们推荐您看好的类似产品？" }] };
// //             render(data.qaList, data.total);
// //             typeof cb == 'function' && cb();
// //         } else {
// //             AladdinTools.request('post', AppInter.getQADetail, {}, function(res) { //成功
// //                 Tools.Loading.hide();
// //                 debug && console.log('获取数据->' + JSON.stringify(res));
// //                 render(res.qaList, res.total);
// //             }, function(err, res) { //失败
// //                 Tools.Loading.hide();
// //                 if (err && err.code == "0") {
// //                     AladdinTools.toastShow("网络延迟");
// //                     return;
// //                 }
// //                 res && res.responseMsg ? AladdinTools.toastShow(res.responseMsg) : AladdinTools.toastShow("提交失败！");
// //             }, function(err, res) { //始终执行
// //                 Tools.Loading.hide();
// //                 typeof cb == 'function' && cb();
// //             }, function() { //无网络
// //                 Tools.Loading.hide();
// //                 AladdinTools.toastShow("请检查您的网络！");
// //             }, false);
// //         }

// //     }
// //     //问卷调查
// //     function getSurvey(cb) {
// //         Tools.Loading.show();
// //         AladdinTools.request('post', AppInter.hasSubmitQuesSurvey, {}, function(res) { //成功
// //             Tools.Loading.hide();
// //             if (res.hasSubmitQuesSurvey == 'Y') {
// //                 AladdinTools.toastShow("您已完成所有问卷，暂无需进行问卷调查。", 2000);
// //                 setTimeout(function() {
// //                     aladdin.navigator.back(); //返回首页
// //                 }, 200);
// //             } else {
// //                 typeof cb == 'function' && cb();
// //             }
// //         }, function(err, res) { //失败
// //             Tools.Loading.hide();
// //             if (err && err.code == "0") {
// //                 AladdinTools.toastShow("网络延迟");
// //                 return;
// //             }
// //             res && res.responseMsg ? AladdinTools.toastShow(res.responseMsg) : AladdinTools.toastShow("查询问卷失败");
// //         }, function(err, res) { //始终执行
// //             Tools.Loading.hide();
// //         }, function() { //无网络
// //             Tools.Loading.hide();
// //             AladdinTools.toastShow("请检查您的网络！");
// //         }, false);

// //     }

// //     function setHeight() {
// //         $(".page_content").css('height', (function() {
// //             var bodyH = parseInt(document.documentElement.clientHeight, 10);
// //             return (bodyH - $(".header-container").height() - 10);
// //         })());
// //     }

// //     function init() {

// //         setHeight();

// //         try {
// //             // getSurvey(function() {
// //             load(function() {
// //                 mui.init({
// //                     swipeBack: false
// //                 });
// //                 (function($) {
// //                     $('.mui-scroll-wrapper').scroll({
// //                         indicators: true //是否显示滚动条
// //                     });
// //                 })(mui);
// //                 bindEvents();
// //             });
// //             // });
// //         } finally {
// //             bindBack();
// //         }

// //     }

// //     init();


// // })();

// //==========================
// function ABicycle() {};
// ABicycle.prototype = {
//     wash: function() {
//         console.log("wash");
//     },
//     ride: function() {
//         console.log("ride");
//     },
//     getPrice: function() {
//         return 999;
//     }
// };


// function bicycleBell(bicycle) {
//     var price = bicycle.getPrice();
//     bicycle.__proto__.bell = function() {
//         console.log("ding! ding! ding!");
//     };
//     ABicycle.prototype.ride = function() {
//         console.log("ride2");
//     };

//     bicycle.getPrice = function() {
//         return price + 100;
//     };
//     return bicycle;
// };

// var bicycleA = new ABicycle();
// bicycleA = bicycleBell(bicycleA);
// console.log(bicycleA); //两个getPrice()
// console.log(bicycleA.getPrice()); //1099
// console.log(bicycleA.__proto__.getPrice()); //999
// var bicycleB = new ABicycle();
// console.log(bicycleB.getPrice()); //999

// // function BicycleBell( bicycle ){
// //     this.bicycle = bicycle;
// // }
// // console.log(BicycleBell);
// // BicycleBell.prototype = {
// //     getPrice : function(){
// //         console.log(this);
// //         // return this.bicycle.getPrice() + 100;
// //     }
// // }

// // var Bicyclea = new ABicycle();
// // console.log(Bicyclea);
// // Bicyclea = new BicycleBell( Bicyclea );
// // console.log(Bicyclea); //两个getPrice()
// // console.log(Bicyclea.__proto__.getPrice()); //1099
// // console.log(Bicyclea);
// // console.log(Bicyclea.bicycle.__proto__.getPrice()); //999

// function extend(subClass, superClass) {
//     var F = function() {};
//     F.prototype = superClass.prototype;
//     subClass.prototype = new F();
//     subClass.prototype.constructor = subClass;
//     subClass.superclass = superClass.prototype;
//     if (superClass.prototype.constructor === Object.prototype.constructor) {
//         superClass.prototype.constructor = superClass;
//     }
// };



// function BicycleDecorator(bicycle) {
//     this.bicycle = bicycle;
// }
// BicycleDecorator.prototype = {
//     wash: function() {
//         return this.bicycle.wash();
//     },
//     ride: function() {
//         return this.bicycle.ride();
//     },
//     getPrice: function() {
//         return this.bicycle.ride();
//     }
// }

// var BicycleBell = function(bicycle) {
//     console.log(this);
//     console.log(BicycleBell.superclass);
//     BicycleBell.superclass.constructor.call(this, bicycle);
// }
// extend(BicycleBell, BicycleDecorator);

// BicycleBell.prototype.bell = function() {
//     console.log("ding! ding!");
// }
// BicycleBell.prototype.getPrice = function() {
//     return this.bicycle.getPrice() + 100;
// }
// var bicycleA2 = new ABicycle();
// console.log(bicycleA2.__proto__.getPrice(bicycleA2));
// bicycleA2 = new BicycleBell(bicycleA2);
// console.log(bicycleA2.getPrice());


// //现代的模块机制
// (function() {
//     var MyModules = (function() {
//         var modules = {};

//         function define(name, deps, impl) {
//             for (var i = 0; i < deps.length; i++) {
//                 deps[i] = modules[deps[i]];
//             }
//             modules[name] = impl.apply(impl, deps);
//         }

//         function get(name) {
//             return modules[name];
//         }

//         return {
//             define: define,
//             get: get
//         }
//     })();

//     MyModules.define("bar", [], function() {
//         function hello(who) {
//             return "Let me introduce: " + who;
//         }
//         return {
//             hello: hello
//         };
//     });
//     MyModules.define("foo", ["bar"], function(_bar) {
//         var hungry = "hippo";

//         function awesome() {
//             console.log(_bar.hello(hungry).toUpperCase());
//         }
//         return {
//             awesome: awesome
//         };
//     });
//     var bar = MyModules.get("bar");
//     var foo = MyModules.get("foo");
//     console.log(bar.hello("hippo")); // Let me introduce: hippo
//     foo.awesome(); // LET ME INTRODUCE: HIPPO

//     // import { sqrt } from './module';


// })();

// // [产品,　颜色，数量] 统计相同颜色的产品的数量
// (function() {
//     var setArr = [
//         ['banana', 'green', 2],
//         ['apple', 'yellow', 3],
//         ['apple', 'yellow', 6],
//         ['apple', 'green', 1],
//         ['banana', 'green', 1]
//     ];
//     (function() {
//         var newSet = new Set();
//         var resultArr = [];
//         var resultObj = {};
//         for (var i = 0; i < setArr.length; i++) {
//             var key = setArr[i][0] + ',' + setArr[i][1];
//             var value = setArr[i][2];
//             if (!newSet.has(key)) {
//                 resultObj[key] = value;
//                 newSet.add(key)
//             } else {
//                 resultObj[key] = resultObj[key] + value;
//             };
//         }
//         console.log(resultObj);

//         for (var t in resultObj) {
//             var r = [];
//             var tem = t.split(',');
//             r.push(tem[0]);
//             r.push(tem[1]);
//             r.push(resultObj[t]);
//             resultArr.push(r);
//         }
//         console.log(resultArr);
//     })();

//     var resultObj = {
//         [setArr[0][0] + ',' + setArr[0][1]]: setArr[0][2]
//     }
//     for (var i = 1; i < setArr.length; i++) {
//         var key = setArr[i][0] + ',' + setArr[i][1];
//         if (resultObj.hasOwnProperty(key)) {
//             resultObj[key] = resultObj[key] + setArr[i][2];
//         } else {
//             resultObj[key] = setArr[i][2];
//         }
//     }
//     console.log(resultObj);

// })();


// //
// (function() {
//     function cal() {
//         var n = 4399;
//         var i = {
//             "num": 1
//         };

//         function add() {
//             n++;
//             i.num++;
//             console.log(n);
//         }
//         return {
//             n: n,
//             i: i,
//             add: add
//         }
//     }
//     var res1 = cal();
//     var res2 = cal();
//     console.log(res1);
//     console.log(res2);
//     console.log(res1 == res2) // false，返回的{n: n,i: i,add: add }是新实例，相当于值拷贝。里面的内容的拷贝方式与常规的一样：n为常规类型，是值拷贝；i是对象，是引用拷贝

//     res1.add(); //4400
//     res2.add(); //4400
//     console.log(res1.n); //4399 //n是进行的值拷贝
//     res2.add(); //4401

//     console.log(res1.i.num); //2
//     res2.add(); //4402
//     res2.add(); //4403
//     console.log(res2.i.num); //5 // i是进行的引用拷贝
//     console.log(res2.n); //4399 //n是进行的值拷贝
//     console.log(res1.i.num); //2 // i是进行的引用拷贝
//     console.log(res1.n); //4399 //n是进行的值拷贝


//     var module = (function cal() {
//         var n = 4399;
//         var i = {
//             "num": 1
//         };

//         function add() {
//             n++;
//             i.num++;
//             console.log(n);
//         }
//         return {
//             n: n,
//             i: i,
//             add: add
//         }
//     })();
//     console.log(module.n);
//     console.log(module.i.num);
//     module.add();
//     module.add();
//     console.log(module.n);
//     console.log(module.i.num);


// })();


// (function(win) {
//     win.num = 100;

//     function fn() {
//         var num = num + 1; //改成var num=win.num+1;才是正确的，此时才是外面的全局变量num
//         return num;
//     }
//     console.log(fn()); // NaN
// })(window);


// (function() {
//     function log(text) {
//         var t = '';
//         for (var item in arguments) {
//             t += arguments[item] + ',';
//         }

//         document.write(t.substring(0, t.length - 1) + '<br />');
//     }

//     var obj = {
//         val: 0
//     }
//     var num = 0;
//     for (var i = 0; i < 10; i++) {
//         obj.val++;
//         num++;
//         setTimeout(function(obj, num) {
//             // console.log(obj); //此处依然是值拷贝 //Object {num: 1}  Object {num: 2} ...
//             return function() {
//                 log(obj.val); //此处输出十个10
//                 log(num)
//             }
//         }(obj, num)(obj), 300);
//     }
// })();

// (function() {
//     function foo() {
//         console.log(a);
//     }

//     function bar() {
//         var a = 3;
//         foo();

//         (function foo2() {
//             console.log(a);
//         })();
//     }
//     var a = 2;
//     bar();

// })();

// (function() {
//     function compose() {
//         var funcs = [];
//         var k = 0;
//         for (var i = arguments.length - 1; i >= 0; i--) {
//             funcs[k++] = arguments[i];
//         }
//         return function(a) {
//             var result = a;
//             for (var i = 0; i < funcs.length - 1; i++) { //循环从0到length-2，等于第一个函数split不执行
//                 result = funcs[i](result);
//             }
//             return result;
//         }
//     }

//     function composeRight() {
//         var args = Array.prototype.slice.apply(arguments)
//         return function(arg){
//             var result;
//             result = args.reduceRight(function(composed, f){  //在arr.reduceRight完成后才赋值给result
//                 return f(composed)
//             }, arg);
//             return result;
//         }
//     }

//     function addOne(a) {
//         return a + 1
//     }

//     function multiTwo(a) {
//         return a * 2
//     }

//     function divThree(a) {
//         return a / 3
//     }

//     function toString(a) {
//         return a + ''
//     }

//     function split(a) {
//         return a.split('')
//     }
//      // split(toString(addOne(multiTwo(divThree(666))))) // => ["4", "4", "5"]

//     var testForCompose = compose(split, toString, addOne, multiTwo, divThree);
//     console.log("compose: ", testForCompose(666));
//     var testForCompose2 = composeRight( toString, addOne, multiTwo, divThree); //相比上面少了一个split函数，因为上面那个并未调用split函数
//     console.log("compose2: ", testForCompose2(666));
// })();


// var mapState = normalizeNamespace(function(namespace, states) {
//     var res = {};
//     normalizeMap(states).forEach(function(ref) {
//         var key = ref.key;
//         var val = ref.val;
//         res[key] = function mappedState() {
//             var state = this.$store.state;
//             var getters = this.$store.getters;
//             if (namespace) {
//                 var module = getModuleByNamespace(this.$store, 'mapState', namespace);
//                 if (!module) {
//                     return
//                 }
//                 state = module.context.state;
//                 getters = module.context.getters;
//             }
//             return typeof val === 'function' ?
//                 val.call(this, state, getters) :
//                 state[val]
//         };
//         // mark vuex getter for devtools
//         res[key].vuex = true;
//     });
//     return res
// });

// function normalizeMap(map) {
//     return Array.isArray(map) ?
//         map.map(function(key) { return ({ key: key, val: key }); }) :
//         Object.keys(map).map(function(key) { return ({ key: key, val: map[key] }); })
// }

// function normalizeNamespace(fn) {
//     return function(namespace, map) {
//         if (typeof namespace !== 'string') {
//             map = namespace;
//             namespace = '';
//         } else if (namespace.charAt(namespace.length - 1) !== '/') {
//             namespace += '/';
//         }
//         return fn(namespace, map)
//     }
// }

// console.log(mapState(["count"]));

// var aaObj = Object.create(null);
// try {
//     var bb = Object.defineProperty(aaObj, 'a', {
//         enumerable: false,
//         configurable: true,
//         writable: true
//     });
//     Object.defineProperty(aaObj, 'bb', {
//         get:function(){
//             console.log("get aaObj.bb");
//             return [6];
//         },
//         set: function(val){
//             console.log("set aaObj.bb");
//         }
//     });

//     console.log(aaObj.bb);
//     aaObj.bb.push('8777')
//     console.log('bb', bb);
// }catch(e){

// }


// var inputStr = '1+8*(3+3)/2-4/(5+9)';
// var inputArr = [];
// var outputArr = [];
// var outputStack = [];

// function isNum(op){
//     if(/[0-9]/.test(op)) return true;
// }

// function getPro(op){
//     switch(op){
//         case '+':
//             return 1;
//         case '-':
//             return 1;
//         case '*':
//             return 2;
//         case '/':
//             return 2;
//     }
// }

// function getPro2(op){
//     switch(op){
//         case '+':
//             return 1;
//         case '-':
//             return 1;
//         case '*':
//             return 2;
//         case '/':
//             return 2;
//         case '(':
//             return 3;
//         case ')':
//             return 4;
//     }
// }

// function isLowerPro(op1, op2){
//     return getPro(op1) <= getPro(op2);
// }

// function isOperator(op){
//     if(/[\+\-\*\/]/.test(op)) return true;
// }

// function changeToSuffix(){
//     inputArr = inputArr.length>0 ?inputArr :inputStr.split('');
//     for(var i=0;i<inputArr.length;i++){
//         var item = inputArr[i]
//         if(isNum(item)){
//             outputArr.push(item);
//         }else if(isOperator(item)){
//             while( outputStack.length>0 && isLowerPro(item, outputStack[outputStack.length-1])){
//                 console.log("first while 优先级低");
//                 outputArr.push(outputStack.pop());
//             }
//             outputStack.push(item);
//         }else if(item=='('){
//             outputStack.push(item);
//         }else if(item==')'){
//             while(outputStack.length>0 && outputStack[outputStack.length-1] !='('){
//                 console.log("second while ( ");
//                 outputArr.push(outputStack.pop())
//             }
//             if(outputStack[outputStack.length-1] =='('){
//                 outputStack.pop();
//             }else{
//                 throw new Error('怎么会没有(呢，不合法啊')
//             }
//         }
//     }
//     if (outputStack[outputStack.length-1] =='(') {
//         console.log("表达式里面有不匹配的括号");
//     }else{
//         console.log("将栈内剩余放入输出队列");
//         while(outputStack.length>0){
//             console.log("third while");
//             outputArr.push(outputStack.pop());
//         }
//     }

//     // while(inputArr.length>0){
//     //     var cur = inputArr.shift();
//     //     if(isNum(cur)){
//     //         outputArr.push(cur);
//     //     }else if(cur ==')'){
//     //         var po = outputStack.pop();
//     //         while(outputStack.length>0 && po != '('){
//     //             outputArr.push(po);
//     //             po = outputStack.pop();
//     //         }
//     //         if(po !='('){
//     //             throw new Error('怎么会没有(呢，不合法啊');
//     //         }
//     //     }else if(cur=='('){
//     //         outputStack.push(cur);
//     //     }else{
//     //         while(outputStack.length>0 && isLowerPro(cur, outputStack.slice(-1)[0])){
//     //             outputArr.push(outputStack.pop());
//     //         }
//     //         outputStack.push(cur);
//     //     }
//     // }
//     // if ( outputStack.slice(-1)[0] =='(') {
//     //     console.log("表达式里面有不匹配的括号");
//     // }else{
//     //     console.log("将栈内剩余放入输出队列");
//     //     while(outputStack.length>0){
//     //         console.log("third while");
//     //         outputArr.push(outputStack.pop());
//     //     }
//     // }

//     return outputArr;
//     //["1", "8", "3", "3", "+", "*", "2", "/", "+", "5", "4", "5", "9", "+", "/", "-"]
//     //["1", "8", "3", "3", "+", "*", "2", "/", "+", "5", "4", "5", "9", "+", "/", "-"]

// }

// changeToSuffix();

// function handleOperator(str1, op, str2){//后面的操作前面的
//     switch(op){
//         case '+':
//             return +str2 + +str1;
//         case '-':
//             return +str2 - +str1;
//         case '*':
//             return (+str2) * (+str1);
//         case '/':
//             return (+str2) / (+str1);
//         default:
//             return;
//     }
// }

// function cal(arr) {
//     var outputArr = [];
//     var outputStack = [];
//     while (arr.length > 0) {
//         var cur = arr.shift();
//         if (!isOperator(cur)) {
//             outputStack.push(cur);
//         } else {
//             if (outputStack.length < 2) {
//                 throw new Error('出错');
//             }
//             var sec = outputStack.pop();
//             var fir = outputStack.pop();
//             outputStack.push(handleOperator(sec, cur, fir));
//         }
//     }
//     console.log("result", outputStack);
//     if (outputStack.length != 1) {
//         throw new Error('表达式错误');
//     } else {
//         return outputStack[0];
//     }

// }

// console.log("inputStr", inputStr);
// console.log("inputArr", inputArr);
// console.log("outputArr", outputArr);
// console.log("outputStack", outputStack);

// // console.log(cal([1,8,3,3,'+','*','/',2,'+','-',5,5,9,'+']));
// // console.log(cal(changeToSuffix()));

// (function() {
//     var restArr = [];

//     function kkk(len) {
//         if (len == 0) {
//             return 0;
//         } else if (len == 1) {
//             return 1 + kkk(0);
//         } else {
//             return kkk(len - 2) + kkk(len - 1);
//         }
//     }

//     for (var i = 0; i < 6; i++) {
//         restArr.push(kkk(i));
//     }
//     console.log('restArr', restArr);
// })();


// (function() {
//     var restArr = [];

//     function kkk(index) {
//         if (index < 0) return;
//         if (index < 10) return index + '';
//         var last = (index - parseInt(index / 10) * 10) + ''; //取得这个整数的最后一位
//         return last + kkk(parseInt(index / 10));
//     }

//     console.log("restArr", kkk(123456789));

//     var str = "D:a1111\\9000b\\900c.html";
//     console.log(str);
//     console.log('分割',str.split(/\\/))
// })();

// ;(function(){
//     var thisArg = {};
//     function targetFunc(arg1,arg2,arg3){
//         console.log(this ==thisArg);
//     }

//     var bbFunc = targetFunc.bind(thisArg,1,2);
//     bbFunc();
//     console.log(targetFunc.name); //targetFunc
//     console.log(bbFunc.name); // 'bound ' + targetFunc.name
//     console.log(targetFunc.length); //3
//     console.log(bbFunc.length); // 3 - [1,2].length，最低为0
// })();


// (function(){
//     var shoeObj = {}; // 定义发布者
//     shoeObj.list = []; // 缓存列表 存放订阅者回调函数

//     // 增加订阅者
//     shoeObj.listen = function(fn) {
//         shoeObj.list.push(fn);  // 订阅消息添加到缓存列表
//     }

//     // 发布消息
//     shoeObj.trigger = function(){
//         for(var i = 0,fn; fn = this.list[i++];) {
//             fn.apply(this,arguments);
//         }
//     }
//     // 小红订阅如下消息
//     shoeObj.listen(function(color,size){
//         console.log("颜色是："+color);
//         console.log("尺码是："+size);
//     });

//     // 小花订阅如下消息
//     shoeObj.listen(function(color,size){
//         console.log("再次打印颜色是："+color);
//         console.log("再次打印尺码是："+size);
//     });
//     shoeObj.trigger("红色",40);
//     shoeObj.trigger("黑色",42);
// })();

// function createXHR() {

//     //检测原生XHR对象是否存在，如果存在刚返回它的新实例；
//     //如果不存在，则检测ActiveX对象;
//     //如果两个都不存在，就抛出一个错误。

//     if (typeof XMLHttpRequest != "undefined") {
//         return new XMLHttpRequest();
//     } else if (typeof ActiveXObject != "undefined") {
//         //适合IE7之前的版本
//         if (typeof arguments.callee.activeXString != "string") {
//             var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML.XMLHttp"];
//             var i, len;
//             for (i = 0, len = versions.length; i < len; i++) {
//                 try {
//                     var xhr = new ActiveXObject(versions[i]);
//                     arguments.callee.activeXString = versions[i];
//                     return xhr;
//                 } catch (ex) {
//                     //跳过
//                 }
//             }
//         }

//         return new ActiveXObject(arguments.callee.activeXString);
//     } else {
//         throw new Error("No XHR object available.");
//     };
// }

// function createXHROptimized() {

//     if (typeof XMLHttpRequest != "undefined") {
//         createXHROptimized = function() {
//             return new XMLHttpRequest();
//         }

//     } else if (typeof ActiveXObject != "undefined") {
//         createXHROptimized = function() {
//             //适合IE7之前的版本
//             if (typeof arguments.callee.activeXString != "string") {
//                 var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML.XMLHttp"];
//                 var i, len;
//                 for (i = 0, len = versions.length; i < len; i++) {
//                     try {
//                         new ActiveXObject(versions[i]);
//                         arguments.callee.activeXString = versions[i];
//                         break;
//                     } catch (ex) {
//                         //跳过
//                     }
//                 }
//             }
//             return new ActiveXObject(arguments.callee.activeXString);
//         }
//     } else {
//         createXHROptimized = function() {
//             throw new Error("No XHR object available.");
//         };
//     }
//     return createXHROptimized();
// }

// var createXHROptimized2 = (function() {

//     if (typeof XMLHttpRequest != "undefined") {
//         return function() {
//             return new XMLHttpRequest();
//         }

//     } else if (typeof ActiveXObject != "undefined") {
//         return function() {
//             //适合IE7之前的版本
//             if (typeof arguments.callee.activeXString != "string") {
//                 var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML.XMLHttp"];
//                 var i, len;
//                 for (i = 0, len = versions.length; i < len; i++) {
//                     try {
//                         new ActiveXObject(versions[i]);
//                         arguments.callee.activeXString = versions[i];
//                         break;
//                     } catch (ex) {
//                         //跳过
//                     }
//                 }
//             }
//             return new ActiveXObject(arguments.callee.activeXString);
//         }
//     } else {
//         return function() {
//             throw new Error("No XHR object available.");
//         };
//     }
// })();

// function createStreamingClient(url, progress, finished){
//     var xhr = new XMLHttpRequest(), received = 0;
//     xhr.open("get", url, true);
//     xhr.onreadystatechange =  function(){
//         var result;
//         if(xhr.readyState == 3){
//             //只取得最新数据并调整计数器
//             result = xhr.responseText.substring(received);
//             received += result.length;
//             //调用progress回调函数
//             progress(result);
//         }else if(xhr.readyState == 4){
//             finished(xhr.responseText);
//         }
//     };
//     xhr.send(null);
//     return xhr;
// }

// !(function(){
//     //创建XHR对象
//     // var xhr = createXHR();
//     // xhr.onreadystatechange =  function(){
//     //     if(xhr.readyState == 4){
//     //         if((xhr.status >=200 && xhr.status < 300 ) || xhr.status == 304 ){
//     //             console.log(xhr.responseText);
//     //         }else{
//     //             console.log("Request was unsuccessful : " + xhr.status);
//     //         }
//     //     }
//     // }

//     // xhr.open("get","http://www.daozhao.com",true);
//     // xhr.send(null);
// })();

// function handelRes(res){
//     console.log('your ip address is' + res.ip + ', which is in ' + res.city + ' ,' + res.region_name);
// }

// ;(function(){
//     var img = new Image();
//     img.onload = function(){
//         console.log(arguments);
//         console.log('done');
//     };
//     img.onerror = function(){
//         console.log('error');
//     };

//     img.src = "http://www.baidu.com/img/baidu_jgylogo3.gif";

//     var theScript = document.createElement('script');
//     theScript.src="http://freegeoip.net/json/?callback=handelRes";
//     document.body.append(theScript);
// })();

// //长连接 Comet
// ;(function(){

//     // http流
//     // var client = createStreamingClient('http://localhost:8070/testHttpStream.php', function(data){
//     //     console.log('http流Received: ' + data + ' ');
//     // }, function(data){
//     //     console.log('Done!');
//     // });

//     //SSE
//     // var source = new EventSource("http://localhost:8070/testSSE.php");
//     // source.onmessage = function(event) {
//     //     console.log('SSE ' + event.data);
//     // };
//     //只有在服务器发送的消息中包含一个值为"ping"的event字段的时候才会触发对应的处理函数
//     // source.addEventListener("ping", function(e) {
//     //   var obj = JSON.parse(e.data);
//     //   console.log("SSE ping at " + obj.time);
//     // }, false);

//     //Websocket
//     // var socket = new WebSocket('ws://localhost:8077/testWebSocket.php');
//     // socket.onopen = function(){
//     //     console.log("websocket 建立连接成功");
//     //     socket.send("ws msg");
//     // };
//     // socket.onerror = function(){
//     //     console.log("websocket 建立连接失败");
//     // };
//     // socket.onclose = function(){
//     //     console.log("websocket 连接关闭");
//     // };
//     // socket.onmessage = function(e){
//     //     console.log("websocket message:" + e.data);
//     // };

// })();

// ;
// (function() {
//     function Person(name, age) { //作用域安全的构造函数
//         if (this instanceof Person) {
//             this.name = name;
//             this.age = age;
//         } else {
//             return new Person(name, age);
//         }
//     }

//     function Student(grade) {
//         Person.call(this, '李四', 5); //对作用域安全的构造函数无效
//         this.grade = grade;
//         this.age = 9;
//     }
//     Student.prototype = new Person();
//     Student.prototype.constructor = Student;
//     var stu = new Student("二年级");
//     console.log("stu", stu);
// })();

// ;
// (function() {
//     function myBind(fn, context) {
//         return function() {
//             return fn.apply(context, arguments);
//         }
//     }

//     var handel = {
//         msg: 'Message',
//         click: function() {
//             console.log('--msg--', this.msg);
//             return this.msg;
//         }
//     };

//     document.getElementsByClassName('btnAsyn')[0].addEventListener('click', function(event) {
//         myBind(handel.click, handel)();
//     });
// })();
// (function(){
//     //挂在window上
//     window.eventArea = document.getElementsByClassName('eventArea')[0];
//     var obj = {
//         attr: 1,
//         handleEvent: function(event) {
//             // ...
//             console.log("event type=> ", event.type);
//             console.log('event fired', this.attr);
//             console.log(event.currentTarget);
//         }
//     }

//     eventArea.addEventListener('click', obj, false);
//     eventArea.addEventListener('touchmove', obj, false);
//     document.addEventListener('click', obj, false);
//     eventArea.oncopy = obj.handleEvent;
// })();

// (function() {
//     var TOUCH_EVENT = 1;
//     var MOUSE_EVENT = 2;
//     var eventType = {
//         touchstart: TOUCH_EVENT,
//         touchmove: TOUCH_EVENT,
//         touchend: TOUCH_EVENT,

//         mousedown: MOUSE_EVENT,
//         mousemove: MOUSE_EVENT,
//         mouseup: MOUSE_EVENT
//     };
//     var elementStyle = document.createElement('div').style;
//     var slicedToArray = function() {
//         function sliceIterator(arr, i) {
//             var _arr = [];
//             var _n = true;
//             var _d = false;
//             var _e = undefined;

//             try {
//                 for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
//                     _arr.push(_s.value);

//                     if (i && _arr.length === i) break;
//                 }
//             } catch (err) {
//                 _d = true;
//                 _e = err;
//             } finally {
//                 try {
//                     if (!_n && _i["return"]) _i["return"]();
//                 } finally {
//                     if (_d) throw _e;
//                 }
//             }

//             return _arr;
//         }

//         return function(arr, i) {
//             if (Array.isArray(arr)) {
//                 return arr;
//             } else if (Symbol.iterator in Object(arr)) {
//                 return sliceIterator(arr, i);
//             } else {
//                 throw new TypeError("Invalid attempt to destructure non-iterable instance");
//             }
//         };
//     }();
//     var vendor = function() {
//         var transformNames = {
//             webkit: 'webkitTransform',
//             Moz: 'MozTransform',
//             O: 'OTransform',
//             ms: 'msTransform',
//             standard: 'transform'
//         };

//         for (var key in transformNames) {
//             if (elementStyle[transformNames[key]] !== undefined) {
//                 return key;
//             }
//         }

//         return false;
//     }();
//     var ease = {
//         // easeOutQuint
//         swipe: {
//             style: 'cubic-bezier(0.23, 1, 0.32, 1)',
//             fn: function fn(t) {
//                 return 1 + --t * t * t * t * t;
//             }
//         },
//         // easeOutQuard
//         swipeBounce: {
//             style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//             fn: function fn(t) {
//                 return t * (2 - t);
//             }
//         },
//         // easeOutQuart
//         bounce: {
//             style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
//             fn: function fn(t) {
//                 return 1 - --t * t * t * t;
//             }
//         }
//     };

//     function getNow() {
//         return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
//     }

//     function prefixStyle(style) {
//         if (vendor === false) {
//             return false;
//         }

//         if (vendor === 'standard') {
//             return style;
//         }

//         return vendor + style.charAt(0).toUpperCase() + style.substr(1);
//     }

//     var transform = prefixStyle('transform');
//     var style = {
//         transform: transform,
//         transitionTimingFunction: prefixStyle('transitionTimingFunction'),
//         transitionDuration: prefixStyle('transitionDuration'),
//         transitionProperty: prefixStyle('transitionProperty'),
//         transitionDelay: prefixStyle('transitionDelay'),
//         transformOrigin: prefixStyle('transformOrigin'),
//         transitionEnd: prefixStyle('transitionEnd')
//     };

//     function addEvent(el, type, fn, capture) {
//         el.addEventListener(type, fn, {
//             passive: false,
//             capture: !!capture
//         });
//     }

//     function BScroll(el) {
//         this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
//         this.scroller = this.wrapper.children[0];
//         this.enabled = true;
//         this.options = {
//             disableMouse: false
//         };
//         this.x = 0;
//         this.y = 0;
//         this._events = {};
//         this.scrollerStyle = this.scroller.style;
//     }
//     BScroll.prototype.enable = function() {
//         this.enabled = true;
//     };

//     BScroll.prototype.disable = function() {
//         this.enabled = false;
//     };
//     BScroll.prototype.stop = function() {
//         if (this.options.useTransition && this.isInTransition) {
//             this.isInTransition = false;
//             var pos = this.getComputedPosition();
//             this._translate(pos.x, pos.y);
//             if (this.options.wheel) {
//                 this.target = this.items[Math.round(-pos.y / this.itemHeight)];
//             } else {
//                 this.trigger('scrollEnd', {
//                     x: this.x,
//                     y: this.y
//                 });
//             }
//             this.stopFromTransition = true;
//         } else if (!this.options.useTransition && this.isAnimating) {
//             this.isAnimating = false;
//             this.trigger('scrollEnd', {
//                 x: this.x,
//                 y: this.y
//             });
//             this.stopFromTransition = true;
//         }
//     };

//     BScroll.prototype.destroy = function() {
//         this._removeDOMEvents();
//         // remove custom events
//         this._events = {};

//         if (this.options.scrollbar) {
//             this._removeScrollBars();
//         }

//         this.destroyed = true;
//         this.trigger('destroy');
//     };
//     BScroll.prototype._start = function(e) {
//         var _eventType = eventType[e.type];
//         if (_eventType !== TOUCH_EVENT) {
//             if (e.button !== 0) {
//                 return;
//             }
//         }
//         if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
//             return;
//         }
//         this.initiated = _eventType;

//         if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
//             e.preventDefault();
//         }

//         this.moved = false;
//         this.distX = 0;
//         this.distY = 0;
//         this.directionX = 0;
//         this.directionY = 0;
//         this.movingDirectionX = 0;
//         this.movingDirectionY = 0;
//         this.directionLocked = 0;

//         this._transitionTime();
//         this.startTime = getNow();

//         if (this.options.wheel) {
//             this.target = e.target;
//         }

//         this.stop();

//         var point = e.touches ? e.touches[0] : e;

//         this.startX = this.x;
//         this.startY = this.y;
//         this.absStartX = this.x;
//         this.absStartY = this.y;
//         this.pointX = point.pageX;
//         this.pointY = point.pageY;

//         this.trigger('beforeScrollStart');
//     };

//     BScroll.prototype._move = function(e) {
//         console.log("move");
//         if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
//             return;
//         }

//         if (this.options.preventDefault) {
//             e.preventDefault();
//         }

//         var point = e.touches ? e.touches[0] : e;
//         var deltaX = point.pageX - this.pointX;
//         var deltaY = point.pageY - this.pointY;

//         this.pointX = point.pageX;
//         this.pointY = point.pageY;

//         this.distX += deltaX;
//         this.distY += deltaY;

//         var absDistX = Math.abs(this.distX);
//         var absDistY = Math.abs(this.distY);

//         var timestamp = getNow();

//         // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
//         if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
//             return;
//         }

//         // If you are scrolling in one direction lock the other
//         if (!this.directionLocked && !this.options.freeScroll) {
//             if (absDistX > absDistY + this.options.directionLockThreshold) {
//                 this.directionLocked = 'h'; // lock horizontally
//             } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
//                 this.directionLocked = 'v'; // lock vertically
//             } else {
//                 this.directionLocked = 'n'; // no lock
//             }
//         }

//         if (this.directionLocked === 'h') {
//             if (this.options.eventPassthrough === 'vertical') {
//                 e.preventDefault();
//             } else if (this.options.eventPassthrough === 'horizontal') {
//                 this.initiated = false;
//                 return;
//             }
//             deltaY = 0;
//         } else if (this.directionLocked === 'v') {
//             if (this.options.eventPassthrough === 'horizontal') {
//                 e.preventDefault();
//             } else if (this.options.eventPassthrough === 'vertical') {
//                 this.initiated = false;
//                 return;
//             }
//             deltaX = 0;
//         }

//         deltaX = this.hasHorizontalScroll ? deltaX : 0;
//         deltaY = this.hasVerticalScroll ? deltaY : 0;
//         this.movingDirectionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
//         this.movingDirectionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

//         var newX = this.x + deltaX;
//         var newY = this.y + deltaY;

//         // Slow down or stop if outside of the boundaries
//         if (newX > 0 || newX < this.maxScrollX) {
//             if (this.options.bounce) {
//                 newX = this.x + deltaX / 3;
//             } else {
//                 newX = newX > 0 ? 0 : this.maxScrollX;
//             }
//         }
//         if (newY > 0 || newY < this.maxScrollY) {
//             if (this.options.bounce) {
//                 newY = this.y + deltaY / 3;
//             } else {
//                 newY = newY > 0 ? 0 : this.maxScrollY;
//             }
//         }

//         if (!this.moved) {
//             this.moved = true;
//             this.trigger('scrollStart');
//         }

//         this._translate(newX, newY);

//         if (timestamp - this.startTime > this.options.momentumLimitTime) {
//             this.startTime = timestamp;
//             this.startX = this.x;
//             this.startY = this.y;

//             if (this.options.probeType === 1) {
//                 this.trigger('scroll', {
//                     x: this.x,
//                     y: this.y
//                 });
//             }
//         }

//         if (this.options.probeType > 1) {
//             this.trigger('scroll', {
//                 x: this.x,
//                 y: this.y
//             });
//         }

//         var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
//         var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

//         var pX = this.pointX - scrollLeft;
//         var pY = this.pointY - scrollTop;

//         if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
//             this._end(e);
//         }
//     };

//     BScroll.prototype._end = function(e) {
//         if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
//             return;
//         }
//         this.initiated = false;

//         if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
//             e.preventDefault();
//         }

//         this.trigger('touchEnd', {
//             x: this.x,
//             y: this.y
//         });

//         var preventClick = this.stopFromTransition;
//         this.stopFromTransition = false;

//         // if configure pull down refresh, check it first
//         if (this.options.pullDownRefresh && this._checkPullDown()) {
//             return;
//         }

//         // reset if we are outside of the boundaries
//         if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
//             return;
//         }
//         this.isInTransition = false;
//         // ensures that the last position is rounded
//         var newX = Math.round(this.x);
//         var newY = Math.round(this.y);

//         // we scrolled less than 15 pixels
//         if (!this.moved) {
//             if (this.options.wheel) {
//                 if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
//                     var index = Math.abs(Math.round(newY / this.itemHeight));
//                     var _offset = Math.round((this.pointY + offset(this.target).top - this.itemHeight / 2) / this.itemHeight);
//                     this.target = this.items[index + _offset];
//                 }
//                 this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
//             } else {
//                 if (!preventClick) {
//                     if (this.options.tap) {
//                         tap(e, this.options.tap);
//                     }

//                     if (this.options.click) {
//                         click(e);
//                     }
//                 }
//             }
//             this.trigger('scrollCancel');
//             return;
//         }

//         this.scrollTo(newX, newY);

//         var deltaX = newX - this.absStartX;
//         var deltaY = newY - this.absStartY;
//         this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
//         this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

//         this.endTime = getNow();

//         var duration = this.endTime - this.startTime;
//         var absDistX = Math.abs(newX - this.startX);
//         var absDistY = Math.abs(newY - this.startY);

//         // flick
//         if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
//             this.trigger('flick');
//             return;
//         }

//         var time = 0;
//         // start momentum animation if needed
//         if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
//             var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : {
//                 destination: newX,
//                 duration: 0
//             };
//             var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : {
//                 destination: newY,
//                 duration: 0
//             };
//             newX = momentumX.destination;
//             newY = momentumY.destination;
//             time = Math.max(momentumX.duration, momentumY.duration);
//             this.isInTransition = true;
//         } else {
//             if (this.options.wheel) {
//                 newY = Math.round(newY / this.itemHeight) * this.itemHeight;
//                 time = this.options.wheel.adjustTime || 400;
//             }
//         }

//         var easing = ease.swipe;
//         if (this.options.snap) {
//             var snap = this._nearestSnap(newX, newY);
//             this.currentPage = snap;
//             time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
//             newX = snap.x;
//             newY = snap.y;

//             this.directionX = 0;
//             this.directionY = 0;
//             easing = ease.bounce;
//         }

//         if (newX !== this.x || newY !== this.y) {
//             // change easing function when scroller goes out of the boundaries
//             if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
//                 easing = ease.swipeBounce;
//             }
//             this.scrollTo(newX, newY, time, easing);
//             return;
//         }

//         if (this.options.wheel) {
//             this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
//         }
//         this.trigger('scrollEnd', {
//             x: this.x,
//             y: this.y
//         });
//     };



//     BScroll.prototype._transitionTime = function() {
//         var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

//         this.scrollerStyle[style.transitionDuration] = time + 'ms';

//         if (this.options.wheel) {
//             for (var i = 0; i < this.items.length; i++) {
//                 this.items[i].style[style.transitionDuration] = time + 'ms';
//             }
//         }

//         if (this.indicators) {
//             for (var _i = 0; _i < this.indicators.length; _i++) {
//                 this.indicators[_i].transitionTime(time);
//             }
//         }
//     };
//     BScroll.prototype._addDOMEvents = function() {
//         var eventOperation = addEvent;
//         this._handleDOMEvents(eventOperation);
//     };
//     BScroll.prototype._handleDOMEvents = function(eventOperation) {
//         let target = this.options.bindToWrapper ? this.wrapper : window
//             // ...

//         eventOperation(this.wrapper, 'touchstart', this);
//         eventOperation(target, 'touchmove', this);
//         eventOperation(target, 'touchcancel', this);
//         eventOperation(target, 'touchend', this);
//     }
//     BScroll.prototype.on = function(type, fn) {
//         var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

//         if (!this._events[type]) {
//             this._events[type] = [];
//         }

//         this._events[type].push([fn, context]);
//     };

//     BScroll.prototype.once = function(type, fn) {
//         var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

//         var fired = false;

//         function magic() {
//             this.off(type, magic);

//             if (!fired) {
//                 fired = true;
//                 fn.apply(context, arguments);
//             }
//         }
//         // 将参数中的回调函数挂载在magic对象的fn属性上,为了执行off方法的时候，暴露对应的函数方法
//         magic.fn = fn;

//         this.on(type, magic);
//     };

//     BScroll.prototype.off = function(type, fn) {
//         var _events = this._events[type];
//         if (!_events) {
//             return;
//         }

//         var count = _events.length;
//         while (count--) {
//             // 移除通过on或者once绑定的回调函数
//             if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
//                 _events[count][0] = undefined;
//             }
//         }
//     };

//     BScroll.prototype.trigger = function(type) {
//         var events = this._events[type];
//         if (!events) {
//             return;
//         }

//         var len = events.length;
//         var eventsCopy = [].concat(toConsumableArray(events));
//         for (var i = 0; i < len; i++) {
//             var event = eventsCopy[i];

//             var _event = slicedToArray(event, 2),
//                 fn = _event[0],
//                 context = _event[1];

//             if (fn) {
//                 fn.apply(context, [].slice.call(arguments, 1));
//             }
//         }
//     };
//     BScroll.prototype._initSnap = function() {
//         var _this = this;

//         this.currentPage = {};
//         var snap = this.options.snap;

//         if (snap.loop) {
//             var children = this.scroller.children;
//             if (children.length > 0) {
//                 prepend(children[children.length - 1].cloneNode(true), this.scroller);
//                 this.scroller.appendChild(children[1].cloneNode(true));
//             }
//         }

//         var el = snap.el;
//         if (typeof el === 'string') {
//             el = this.scroller.querySelectorAll(el);
//         }

//         this.on('refresh', function() {
//             _this.pages = [];

//             if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
//                 return;
//             }

//             var stepX = snap.stepX || _this.wrapperWidth;
//             var stepY = snap.stepY || _this.wrapperHeight;

//             var x = 0;
//             var y = void 0;
//             var cx = void 0;
//             var cy = void 0;
//             var i = 0;
//             var l = void 0;
//             var m = 0;
//             var n = void 0;
//             var rect = void 0;
//             if (!el) {
//                 cx = Math.round(stepX / 2);
//                 cy = Math.round(stepY / 2);

//                 while (x > -_this.scrollerWidth) {
//                     _this.pages[i] = [];
//                     l = 0;
//                     y = 0;

//                     while (y > -_this.scrollerHeight) {
//                         _this.pages[i][l] = {
//                             x: Math.max(x, _this.maxScrollX),
//                             y: Math.max(y, _this.maxScrollY),
//                             width: stepX,
//                             height: stepY,
//                             cx: x - cx,
//                             cy: y - cy
//                         };

//                         y -= stepY;
//                         l++;
//                     }

//                     x -= stepX;
//                     i++;
//                 }
//             } else {
//                 l = el.length;
//                 n = -1;

//                 for (; i < l; i++) {
//                     rect = getRect(el[i]);
//                     if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
//                         m = 0;
//                         n++;
//                     }

//                     if (!_this.pages[m]) {
//                         _this.pages[m] = [];
//                     }

//                     x = Math.max(-rect.left, _this.maxScrollX);
//                     y = Math.max(-rect.top, _this.maxScrollY);
//                     cx = x - Math.round(rect.width / 2);
//                     cy = y - Math.round(rect.height / 2);

//                     _this.pages[m][n] = {
//                         x: x,
//                         y: y,
//                         width: rect.width,
//                         height: rect.height,
//                         cx: cx,
//                         cy: cy
//                     };

//                     if (x > _this.maxScrollX) {
//                         m++;
//                     }
//                 }
//             }

//             var initPage = snap.loop ? 1 : 0;
//             _this.goToPage(_this.currentPage.pageX || initPage, _this.currentPage.pageY || 0, 0);

//             // Update snap threshold if needed
//             var snapThreshold = snap.threshold;
//             if (snapThreshold % 1 === 0) {
//                 _this.snapThresholdX = snapThreshold;
//                 _this.snapThresholdY = snapThreshold;
//             } else {
//                 _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
//                 _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
//             }
//         });

//         this.on('scrollEnd', function() {
//             if (snap.loop) {
//                 if (_this.currentPage.pageX === 0) {
//                     _this.goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
//                 }
//                 if (_this.currentPage.pageX === _this.pages.length - 1) {
//                     _this.goToPage(1, _this.currentPage.pageY, 0);
//                 }
//             }
//         });

//         if (snap.listenFlick !== false) {
//             this.on('flick', function() {
//                 var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

//                 _this.goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
//             });
//         }
//     };
//     BScroll.prototype._nearestSnap = function(x, y) {
//         if (!this.pages.length) {
//             return {
//                 x: 0,
//                 y: 0,
//                 pageX: 0,
//                 pageY: 0
//             };
//         }

//         var i = 0;
//         // Check if we exceeded the snap threshold
//         if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
//             return this.currentPage;
//         }

//         if (x > 0) {
//             x = 0;
//         } else if (x < this.maxScrollX) {
//             x = this.maxScrollX;
//         }

//         if (y > 0) {
//             y = 0;
//         } else if (y < this.maxScrollY) {
//             y = this.maxScrollY;
//         }

//         var l = this.pages.length;
//         for (; i < l; i++) {
//             if (x >= this.pages[i][0].cx) {
//                 x = this.pages[i][0].x;
//                 break;
//             }
//         }

//         l = this.pages[i].length;

//         var m = 0;
//         for (; m < l; m++) {
//             if (y >= this.pages[0][m].cy) {
//                 y = this.pages[0][m].y;
//                 break;
//             }
//         }

//         if (i === this.currentPage.pageX) {
//             i += this.directionX;

//             if (i < 0) {
//                 i = 0;
//             } else if (i >= this.pages.length) {
//                 i = this.pages.length - 1;
//             }

//             x = this.pages[i][0].x;
//         }

//         if (m === this.currentPage.pageY) {
//             m += this.directionY;

//             if (m < 0) {
//                 m = 0;
//             } else if (m >= this.pages[0].length) {
//                 m = this.pages[0].length - 1;
//             }

//             y = this.pages[0][m].y;
//         }

//         return {
//             x: x,
//             y: y,
//             pageX: i,
//             pageY: m
//         };
//     };

//     BScroll.prototype.scrollBy = function(x, y) {
//         var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
//         var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

//         x = this.x + x;
//         y = this.y + y;

//         this.scrollTo(x, y, time, easing);
//     };

//     BScroll.prototype.scrollTo = function(x, y) {
//         var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
//         var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

//         this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

//         if (!time || this.options.useTransition) {
//             this._transitionProperty();
//             this._transitionTimingFunction(easing.style);
//             this._transitionTime(time);
//             this._translate(x, y);

//             if (time && this.options.probeType === 3) {
//                 this._startProbe();
//             }

//             if (this.options.wheel) {
//                 if (y > 0) {
//                     this.selectedIndex = 0;
//                 } else if (y < this.maxScrollY) {
//                     this.selectedIndex = this.items.length - 1;
//                 } else {
//                     this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
//                 }
//             }
//         } else {
//             this._animate(x, y, time, easing.fn);
//         }
//     };

//     BScroll.prototype.scrollToElement = function(el, time, offsetX, offsetY, easing) {
//         if (!el) {
//             return;
//         }
//         el = el.nodeType ? el : this.scroller.querySelector(el);

//         if (this.options.wheel && el.className !== this.options.wheel.wheelItemClass) {
//             return;
//         }

//         var pos = offset(el);
//         pos.left -= this.wrapperOffset.left;
//         pos.top -= this.wrapperOffset.top;

//         // if offsetX/Y are true we center the element to the screen
//         if (offsetX === true) {
//             offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
//         }
//         if (offsetY === true) {
//             offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
//         }

//         pos.left -= offsetX || 0;
//         pos.top -= offsetY || 0;
//         pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
//         pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

//         if (this.options.wheel) {
//             pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
//         }

//         this.scrollTo(pos.left, pos.top, time, easing);
//     };

//     BScroll.prototype.resetPosition = function() {
//         var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
//         var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

//         var x = this.x;
//         if (!this.hasHorizontalScroll || x > 0) {
//             x = 0;
//         } else if (x < this.maxScrollX) {
//             x = this.maxScrollX;
//         }

//         var y = this.y;
//         if (!this.hasVerticalScroll || y > 0) {
//             y = 0;
//         } else if (y < this.maxScrollY) {
//             y = this.maxScrollY;
//         }

//         if (x === this.x && y === this.y) {
//             return false;
//         }

//         this.scrollTo(x, y, time, easeing);

//         return true;
//     };

//     BScroll.prototype.getComputedPosition = function() {
//         var matrix = window.getComputedStyle(this.scroller, null);
//         var x = void 0;
//         var y = void 0;

//         if (this.options.useTransform) {
//             matrix = matrix[style.transform].split(')')[0].split(', ');
//             x = +(matrix[12] || matrix[4]);
//             y = +(matrix[13] || matrix[5]);
//         } else {
//             x = +matrix.left.replace(/[^-\d.]/g, '');
//             y = +matrix.top.replace(/[^-\d.]/g, '');
//         }

//         return {
//             x: x,
//             y: y
//         };
//     };
//     BScroll.prototype.goToPage = function(x, y, time) {
//         var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

//         var snap = this.options.snap;
//         if (x >= this.pages.length) {
//             x = this.pages.length - 1;
//         } else if (x < 0) {
//             x = 0;
//         }

//         if (y >= this.pages[x].length) {
//             y = this.pages[x].length - 1;
//         } else if (y < 0) {
//             y = 0;
//         }

//         var posX = this.pages[x][y].x;
//         var posY = this.pages[x][y].y;

//         time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

//         this.currentPage = {
//             x: posX,
//             y: posY,
//             pageX: x,
//             pageY: y
//         };
//         this.scrollTo(posX, posY, time, easing);
//     };

//     BScroll.prototype.next = function(time, easing) {
//         var x = this.currentPage.pageX;
//         var y = this.currentPage.pageY;

//         x++;
//         if (x >= this.pages.length && this.hasVerticalScroll) {
//             x = 0;
//             y++;
//         }

//         this.goToPage(x, y, time, easing);
//     };

//     BScroll.prototype.prev = function(time, easing) {
//         var x = this.currentPage.pageX;
//         var y = this.currentPage.pageY;

//         x--;
//         if (x < 0 && this.hasVerticalScroll) {
//             x = 0;
//             y--;
//         }

//         this.goToPage(x, y, time, easing);
//     };

//     BScroll.prototype.getCurrentPage = function() {
//         return this.options.snap && this.currentPage;
//     };
//     BScroll.prototype.resetPosition = function() {
//         var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
//         var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

//         var x = this.x;
//         if (!this.hasHorizontalScroll || x > 0) {
//             x = 0;
//         } else if (x < this.maxScrollX) {
//             x = this.maxScrollX;
//         }

//         var y = this.y;
//         if (!this.hasVerticalScroll || y > 0) {
//             y = 0;
//         } else if (y < this.maxScrollY) {
//             y = this.maxScrollY;
//         }

//         if (x === this.x && y === this.y) {
//             return false;
//         }

//         this.scrollTo(x, y, time, easeing);

//         return true;
//     };
//     BScroll.prototype.handleEvent = function(e) {
//         switch (e.type) {
//             case 'touchstart':
//             case 'mousedown':
//                 this._start(e)
//                 break
//                 // some code here...
//             case 'touchend':
//             case 'mouseup':
//             case 'touchcancel':
//             case 'mousecancel':
//                 this._end(e)
//                 break
//                 // some code here...
//             case 'transitionend':
//             case 'webkitTransitionEnd':
//             case 'oTransitionEnd':
//             case 'MSTransitionEnd':
//                 this._transitionEnd(e)
//                 break
//                 // some code here...
//         }
//     }
//     window.bs = new BScroll('.address_book');
// })();

(function(){
    function Human(name){
        if(this && this instanceof Human){
            this.name = name;
            this.callStack = [function(){
                console.log('你好，' + this.name);
            }];
        }else{
            return new Human(name);
        }
    }
    Human.prototype.sleep =function(second){
        var self = this;
        setTimeout(function(){
            console.log('等待' + second + '秒');
            self.callStack.shift().call(self);
        }, second*1000);
        return this;
    }
    Human.prototype.eat =function(food){
        this.callStack.push(function(){
           console.log(this.name + '吃了' + food);
       });
        return this;
    }
    Human.prototype.sleepFirst =function(second){
        console.log('休息' + second + '秒');
        this.callStack.shift().call(this);
        return this;
    }
    Human('小明').sleep(2).eat('早餐').sleep(3).eat('午餐').sleep(4).eat('晚餐').sleepFirst(1);
})();

(function(){
    var user = document.getElementsByName('username')[0];
    var methods = ['input', 'click', 'change', 'keypress', 'keyup', 'keydown']; //keypress,keydown获取的是上一次的值，input和keyup是实时的值，change也是实时的，但是要失去焦点才触发
    methods.map(function(item){
        user.addEventListener(item, function(e){
            console.log(item, e.target.value);
        })
    })

})();