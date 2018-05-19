/*
 * @Author: Shadow
 * @Date:   2017-06-12 21:36:49
 * @Last Modified by:   Shadow
 * @Last Modified time: 2018-03-18 23:33:17
 */

// 'use strict';
//Q:4
console.log("www.qdjhu.com".substr(4, 5)); //长度为5,substr不推荐 //qdjhu
//Q7
(function() {
    var str = 'dfadfadfadfadfaqdjhudfadfd';
    var search = 'qdjhu';
    var start = str.indexOf(search);
    console.log(str.substring(start, start + search.length)); //qdjhu
})();
//Q:13 字符串反转
(function() {
    function revStr(str) {
        var tmpStr = '';
        for (var i = str.length - 1; i >= 0; i--) {
            tmpStr += str.charAt(i); //第i个字符
        }
        return tmpStr;
    }
    console.log(revStr('abcdefg')); //gfedcba
})();
//判断空对象
if (JSON.stringify({}) == "{}") {
    console.log('空对象');
}

//提示框
(function() {
    // var res = window.confirm('a');
    // if(res == true){
    //     console.log('点击了确定');
    // }else{
    //     console.log('点击了取消');
    // }
})();
//Q:32
(function() {
    var a = 1;

    function f() {
        console.log(a); //undefined
        var a = 2;
    }
    f();
})();
//Q:36 刷新当前页面
(function() {
    // location.reload(false);//默认值,从缓存里面取当前页
    // location.replace(location.href);//不能通过前进和后腿来方位替换的URL
})();
//Q:54
(function() {
    var iNum = 0;
    for (var i = 0; i < 10; i++) {
        if (i % 5 == 0) {
            continue;
        }
        iNum++;
    }
    console.log(iNum); //8
})();
//Q:55
(function() {
    var k = 0;
    for (var i = 0, j = 0; i < 10, j < 10; i++, j++) {
        k = i + j;
    }
    console.log(k); //18
})();
//Q:56
(function() {
    console.log(null instanceof Object); //false, null int, float等这些用关键字表示的类型都不属于Object
    console.log(null === undefined); //false
    console.log(null == undefined); //true
    console.log(NaN == NaN); // false
    console.log(null === null); //true
    console.log(null == null); //true
})();
//Q:60
(function() {
    console.log(parseInt('X8X8') + parseFloat('8')); // NaN
    console.log(parseInt(9.8) + parseFloat(8)); // 17
})();
//Q:61
(function() {
    var total = 0;
    for (var i = 1; i <= 100; i++) {
        if (i.toString().indexOf('1') != -1) {
            total++;
        }
    }
    console.log(total); //20
})();
//Q:67
(function() {
    String.prototype.repeat = function(num) {
        var tmpArr = [];
        for (var i = 0; i < num; i++) {
            tmpArr.push(this);
        }
        return tmpArr.join('');
    }
    console.log('abc'.repeat(5)); //abcabcabcabcabc
})();
//Q:69
//parseInt(string, radix)
(function() {
    console.log(parseInt('11', 2)); //3
    console.log(parseInt('02', 10)); //2
    console.log(parseInt('09/08/2009')); //9
})();
//Q:71 最大公约数
(function() {
    function f(num1, num2) {
        for (var i = Math.min(num1, num2); i > 0; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                return i;
            }
        }
    }
    console.log(f(15, 305)); //5
})();
//Q:72 生成不重复数组
(function() {
    var arr = [];
    var number = 50;
    for (var i = 1; i <= number; i++) {
        arr.push(i);
    };
    //以上代码可以下列代码替换
    // arr = new Array(50).fill();
    // arr.map(function(val, index, arr){
    //     arr[index] = index;
    // });
    //替换完成
    var result = [];
    for (var j = number - 1; j >= 0; j--) {
        var rand = Math.floor(Math.random() * j);
        result.push(arr.splice(rand, 1));
    };
    console.log(result); //50个值不同的数组
})();
//Q:89 Q:90 不重复数组
(function() {
    var sp = [1, 2, 3, 4, 5];
    var sl = [1, 2, 3, 4, 5];
    console.log(sp.splice(0, 2)); //[1, 2]
    console.log(sp); //[3,4,5]  元数组被修改
    console.log(sp.splice(0, 2, 8, 7)); //返回被删除的数组
    console.log(sp); //[8,7,5]  元数组被修改
    console.log(sl.slice(0, 2)); //[1,2]
    console.log(sl); //[1,2,3,4,5]原数组不受影响
})();
//Q:91 sort
(function() {
    console.log(['a', 'b', 'c', 'd', 'b'].sort()); //["a", "b", "b", "c", "d"]
    console.log(['10', '1', '2', '6', '3'].sort(function(v1, v2) { //["1", "2", "3", "6", "10"]
        return v1 - v2; //这是从小到大的排序
    }));
})();
//Q:91 数组去重
(function() {

    //方法一：
    Array.prototype.unique1 = function() {
        var res = [this[0]];
        for (var i = 1; i < this.length; i++) {
            var repeat = false;
            for (var j = 0; j < res.length; j++) {
                if (this[i] == res[j]) {
                    repeat = true;
                    break;
                }
            };
            if (!repeat) {
                res.push(this[i]);
            }
        };
        return res;
    };
    //方法二：
    Array.prototype.unique2 = function() {

    }

    console.log(['a', 'b', 'a', 'd', 'e', 'b'].unique1()); //["a", "b", "d", "e"]


})();

//去除字符串左侧，右侧，两侧，中间空格
(function() {
    //substring的方式
    //去掉左右空格
    function Trim(mystr) {
        while ((mystr.indexOf(" ") == 0) && (mystr.length > 1)) {
            mystr = mystr.substring(1, mystr.length);
        } //去除前面空格
        while ((mystr.lastIndexOf(" ") == mystr.length - 1) && (mystr.length > 1)) {
            mystr = mystr.substring(0, mystr.length - 1);
        } //去除后面空格
        if (mystr == " ") {
            mystr = "";
        }
        return mystr;
    }
    //去掉右边空格
    function RTrim(stringObj) {
        while (stringObj.charCodeAt(stringObj.length - 1) == 32) {
            stringObj = stringObj.substring(0, stringObj.length - 1);
        }
        return stringObj;
    }
    //去掉左边空格
    function LTrim(stringObj) {
        while (stringObj.charCodeAt(0) == 32) {
            stringObj = stringObj.substring(1, stringObj.length);
        }
        return stringObj;
    }
    //去字符串左右两边的空格(中间的空格不能去)
    function RLTrim(stringObj) {
        return (ltrim(rtrim(stringObj)));
    }

    //正则表达式
    String.prototype.myLeftTrim = function() {
        return this.replace(/^\s*/g, '');
    }
    String.prototype.myRightTrim = function() {
        return this.replace(/\s*$/g, '');
    }
    String.prototype.myTrim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, '');
    }
    String.prototype.myMiddleTrim = function() {
        return this.replace(/([^\^s*])|(s*$)/g, "");
    }

})();
//Q:96 执行结果
(function() {
    var myarr = [];
    for (var i = 0; i <= 5; i++) {
        myarr.push(i * (i + 1));
    };
    var val = 0;
    while (val != myarr.pop()) {
        console.log(val); //输出5次 0
    }
})();

//Q:220 f1继承f2全部成员
(function() {
    function f2() {
        this.a2 = 3;
        this.b2 = 4;
    }

    function f1() {
        this.a1 = 1;
        this.b1 = 2;
    }
    f1.prototype = new f2();

    console.log(new f1()); // {a1: 1, b1: 2} 它的原型是 {a2: 3, b2: 4}
})();

(function() {
    var url = 'http://www.baidu.com?id=1&id=2&userid=123&city=%e5%8c%97%e4%ba%ac&anable';

    function params2obj(params) {
        var str = params.split('?')[1];
        var obj = {};
        var tempArr = [];
        str = str.split('&');
        for (var len = str.length, i = len; i--;) {
            tempArr = str[i].split('=');
            if (+obj[tempArr[0]]) {
                obj[tempArr[0]] = +obj[tempArr[0]] + +tempArr[1];
            } else {
                obj[tempArr[0]] = tempArr[1] ? decodeURIComponent(tempArr[1]) : true;
            }
        }
        return obj;
    }
    console.log("params2obj", params2obj(url));

    function isIndexOf(str1, str2) {
        var len = str1.length;
        for (var i = 0; i < str2.length; i++) {
            // if(str2.substr(i,len) == str1){
            if (str2.substring(i, i + len) == str1) {
                return true;
            }
        }
        return false;
    }
    console.log("isIndexOf", isIndexOf('345', '1234567'));
})();

(function() {
    function bindFn(fn, obj) {
        return function() {
            return fn.apply(obj, arguments);
        }
    }

    var test = function() {
        console.log(this.a);
    }
    bindFn(test, {
        a: 'aaa'
    })()
})();

(function() {
    function foo() {
        console.log(this.a);
    }
    var a = 2;
    var o = {
        a: 3,
        foo: foo
    };
    var p = {
        a: 4
    };
    o.foo(); //3
    (p.foo = o.foo)(); //2
    console.log(p.foo = o.foo); // function foo(){console.log(this.a)}
})();

(function() {
    if (!Function.prototype.softBind) {
        Function.prototype.softBind = function(obj) {
            var fn = this;
            var curried = [].slice.call(arguments, 1);
            var bound = function() {
                return fn.apply(
                    (!this || this === (window || global)) ?
                    obj : this, curried.concat.apply(curried, arguments)
                )
            };
            bound.prototype = Object.create(fn.prototype);
            return bound;
        }
    }

    function foo() {
        console.log("name:", this.name);
    }

    var obj = { name: "obj" },
        obj2 = { name: "obj2" },
        obj3 = { name: "obj3" };

    var fooOBJ = foo.softBind(obj);

    fooOBJ(); // name:obj
    obj2.foo = foo.softBind(obj);
    obj2.foo(); // name:obj2

    fooOBJ.call(obj3); // name:obj3

    setTimeout(obj2.foo, 10);
    // name: obj 软绑定

})();

(function() {
    function dist(arr) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
                res = res.concat(dist(arr[i]));
            } else {
                res.push(arr[i]);
            }
        }
        return res;
    }

    function dist2(arr) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
                res = Array.prototype.concat.apply(res, arr[i]);
            } else {
                res.push(arr[i]);
            }
        }
        return res;
    }
    var re = dist([1, 2, [3, 4, [5, 6, [7, 8]]]]);
    console.log('re', re);
})();

(function() {
    var btns = document.getElementsByTagName('button');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            console.log('最开始 ' + i + '个按钮');
        });
        (function(i) {
            btns[i].addEventListener('click', function() {
                console.log('click ' + i + '个按钮');
            });
        })(i);

        btns[i].onclick = (function(i) {
            return function() {
                console.log('点击的是第' + i + '个按钮');
            };
        })(i);

        btns[i].addEventListener('click', function(){
            console.log('clicked ' + this + '个按钮');
        }.bind(i));

    }

    setTimeout(function(){
        console.log(200);
    },200);
    setTimeout(function(){
        console.log(0);
    },0);
})();


(function(){
    var map = {};
    function fibonacci(num){
        if (num==1) return 1;
        if (num==2) return 1;
        var res = map[num] || (map[num] = fibonacci(num-1) + fibonacci(num-2));
        return res;
    }
    console.log(fibonacci(3), map);
    console.log(fibonacci(2));
})();
(function() {
    function fibonacci(n) {
        var a = 1,
            b = 1,
            sum = 1;
        for (var i = 3; i <= n; i++) {
            sum = a + b;
            a = b;
            b = sum;
        }
        return sum;
    }

    function quickSort(array) {
        function sort(prev, numsize) {
            var i = prev;
            var j = numsize - 1;
            var flag = array[prev];
            if ((numsize - prev) > 1) {
                while (i < j) {
                    for (; i < j; j--) {
                        if (array[j] < flag) {
                            array[i++] = array[j];　 //a[i] = a[j]; i += 1;
                            break;
                        };
                    }
                    for (; i < j; i++) {
                        if (array[i] > flag) {
                            array[j--] = array[i];
                            break;
                        }
                    }
                }
                array[i] = flag;
                sort(0, i);
                sort(i + 1, numsize);
            }
        }
        sort(0, array.length);
        return array;
    }

    quickSort([6,2,7,3,8,9])
})();


(function(){
    var length = 10;

    function fn() {
        console.log(this.length)
    }
    var obj = {
        length: 5,
        method: function(fn) {
            fn(); //this为window
            arguments[0]();  //this为arguments!!!
        }
    };
    obj.method(fn, 1); //先输出10(在此闭包内输出为0) 再输出2
})();
