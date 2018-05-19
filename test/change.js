// var dd = {
//     'count':55,
//     'lists':[{'id':1}, {'id':2}, {'id':3}, {'id':4}, {'id':5},  {'id':6}, {'id':7}, {'id':8}, {'id':9}, {'id':10},{'id':11}, {'id':12}, {'id':13}, {'id':14}, {'id':15}, {'id':16}, {'id':17}, {'id':18}, {'id':19}, {'id':20},{'id':21}, {'id':22}, {'id':23}, {'id':24}, {'id':25},  {'id':26},{'id':27}, {'id':28}, {'id':29}, {'id':30},{'id':31}, {'id':32}, {'id':33}, {'id':34}, {'id':35},  {'id':36}, {'id':37}, {'id':38}, {'id':39}, {'id':40},{'id':41},{'id':42}, {'id':43}, {'id':44}, {'id':45},  {'id':46}, {'id':47}, {'id':48}, {'id':49},{'id':50},{'id':51}, {'id':52}, {'id':53}, {'id':54}, {'id':55}]
// };
var dd = {
    'count':5,
    'lists':[{'id':1}, {'id':2}, {'id':3}, {'id':4}, {'id':5}]
};
console.log(dd);
// sessionStorage.removeItem('test');
// localStorage.removeItem('test');
//localStorage模拟数据库
localStorage.setItem('test', JSON.stringify(dd));

//{'id':1}, {'id':2}, {'id':3}, {'id':4}, {'id':5}, {'id':6}, {'id':7}, {'id':8},{'id':9}, {'id':10}, {'id':11}, {'id':12}, {'id':13}
var content = "<p>作者雪狼已经给出了解决方案，地址<a href=\"https://github.com/ng-nice/book\" title=\"https://github.com/ng-nice/book\" target=\"_blank\"></a>估计学习这个的读者应该都能翻过去吧。<br />\n本人在此也写一下自己的安装经历吧。<br />\n我一开始买到书后就想安装front-jet，始终没有成功，之后再github上找源码无意间发现作者给出来解决方案。</p>\n<blockquote><p>\n一些读者反映安装FrontJet有困难，我做了一些改进，它支持在Node 5下运行。由于Node 5.x 版本的NPM工具有了显著提升，所以安装到一半儿被卡住等问题都解决了。请获取最新版FrontJet源码，并在它的目录下运行npm link。但是仍然需要翻墙，因为phantomjs的下载源被墙了。</p>\n<p>部分书友反映安装front-jet失败，这是因为fj依赖了很多第三方库，安装时容易出现问题，特别是网络不好的时候。所以我制作了Windows下的离线安装包，链接: http://pan.baidu.com/s/1mgZ3FMK，密码: q5v5。先确保本地的NodeJS是4.x版本（注意：离线安装包不支持其它版本的NodeJS），然后把它解压到一个目录，然后把这个目录加入环境变量PATH中即可 —— 注意，添加完PATH之后要重新开cmd窗口才会生效。</p>\n<p>如果安装后运行时出现The &#8216;libsass&#8217; binding was not found错误，请进入node_modules/gulp-sass目录，然后运行npm rebuild node-sass即可。\n</p></blockquote>\n<p>1、我就在家里的Win64位的笔记本上安装了nodejs4.4.7的64位版本，并且下载了百度云里面的front-jet离线包；<br />\n2、安装完成后进入front-jet所在目录，运行 fj create BookForum，再进入BookForum文件夹运行fj serve时提示错误，就是作者提到的“The &#8216;libsass&#8217; binding was not found错误”；<br />\n3、此时安装作者给的解决方案：“请进入node_modules/gulp-sass目录，然后运行npm rebuild node-sass即可”，搞定此问题。<br />\n4、运行fj serve还是出错，但是此时的错误就比较明显了，会有指引性提示，大致意思就是要你手动运行bower install。<br />\n5、我就下载了bower和git（书中已经提到要按照git）在BookForum文件夹内运行bower init，填写了相关信息，然后运行bower install（亲测得先运行bower init，才行）。<br />\n6、最后终于大功告成。</p>\n<p><a href=\"http://www.daozhao.com/wp-content/uploads/2016/07/2016-07-26_191444.png\"><img src=\"http://www.daozhao.com/wp-content/uploads/2016/07/2016-07-26_191444-300x127.png\" alt=\"2016-07-26_191444\" width=\"300\" height=\"127\" class=\"aligncenter size-medium wp-image-3992\" srcset=\"http://www.daozhao.com/wp-content/uploads/2016/07/2016-07-26_191444-300x127.png 300w, http://www.daozhao.com/wp-content/uploads/2016/07/2016-07-26_191444.png 781w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a><br />\n我回单位电脑Win10 64位安装同样办法安装front-jet失败，可能跟win10系统有关。<br />\n于是我再次尝试直接用npm install -g fj安装，我的nodejs还是尝试离线版时安装的4.4.7的64位版本，期间提示需要下载phantomjs，为了节省时间，我自己下载了phantomjs，并将其添加至PATH环境变量。<br />\n再次运行npm install -g fj，等待运行，期间&#8221;D:\\nodejs\\node_global\\node_modules\\fj&#8221;里面生成不少文件，可是等待命令运行完成后，发现安装期间有不少错误，最后将&#8221;D:\\nodejs\\node_global\\node_modules\\fj&#8221;里面的文件基本都删完了。<br />\n于是我在&#8221;> node-sass@3.8.0 install D:\\nodejs\\node_global\\node_modules\\fj\\node_modules\\gulp-sass\\node_modules\\node-sass<br />\n> node scripts/install.js&#8221;按CTRL+C停止了进程，这样之前生成的文件是保住了，还没有来得及被删。<br />\n<a href=\"http://www.daozhao.com/wp-content/uploads/2016/07/fj.png\"><img src=\"http://www.daozhao.com/wp-content/uploads/2016/07/fj-300x278.png\" alt=\"fj\" width=\"300\" height=\"278\" class=\"aligncenter size-medium wp-image-4003\" srcset=\"http://www.daozhao.com/wp-content/uploads/2016/07/fj-300x278.png 300w, http://www.daozhao.com/wp-content/uploads/2016/07/fj.png 640w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a><br />\n运行fj init，报出错误，提示用“This usually happens because your environment has changed since running `npm ins<br />\ntall`.<br />\nRun `npm rebuild node-sass` to build the binding for your current environment.”<br />\n于是运行npm rebuild node-sass，然后运行fj init就成功了<br />\n<a href=\"http://www.daozhao.com/wp-content/uploads/2016/07/fj2.png\"><img src=\"http://www.daozhao.com/wp-content/uploads/2016/07/fj2-300x186.png\" alt=\"fj2\" width=\"300\" height=\"186\" class=\"aligncenter size-medium wp-image-4004\" srcset=\"http://www.daozhao.com/wp-content/uploads/2016/07/fj2-300x186.png 300w, http://www.daozhao.com/wp-content/uploads/2016/07/fj2.png 636w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a></p>\n<p>然后按照上面的4、5、6完成了front-jet的在线安装。</p>\n";
document.getElementsByClassName('content')[0].innerHTML = content;

// ----call模拟实现----
// 第一版
// Function.prototype.call2 = function(context){
//     // 首先要获取调用call的函数，用this可以获取
//     console.log(this);
//     context.fn = this;
//     context.fn();
//     delete context.fn;
// }

// // 测试一下
// var foo = {
//     value: 1
// };

// function bar(){
//     console.log(this.value);
// }
// bar.call2(foo);

//第二版
// Function.prototype.call2 = function(context){
//     context.fn = this;
//     var args = [];
//     var args2 = [];
//     for(var i = 1,len = arguments.length;i<len;i++){
//         // console.log(arguments[i]);
//         args.push('arguments[' + i + ']');
//         args2.push(arguments[i]);
//     }
//     // console.log('context.fn(' + args +')');
//     // console.log( args2.join(',') );
//     // context.fn(args2.join(','));
//     eval('context.fn(' + args +')');

//     delete context.fn;
// }

// // 测试一下
// var foo = {
//     value: 1
// };

// function bar(name,age){
//     console.log(name)
//     console.log(age)
//     console.log(this.value);
// }

// bar.call2(foo,'kevin',18);
//第三版
// Function.prototype.call2 = function(context){
//     var context = context || window;
//     context.fn = this;

//     var args = [];
//     for(var i = 1,len = arguments.length;i<len;i++){
//         args.push('arguments[' + i + ']');
//     }

//     var result = eval('context.fn(' + args +')');

//     delete context.fn
//     return result;
// }

// // 测试一下
// var value = 2;

// var obj = {
//     value: 1
// }

// function bar(name,age){
//     console.log(this.value);
//     return{
//         value: this.value,
//         name: name,
//         age: age
//     }
// }

// console.log(bar.call(null));// 2
// console.log(bar.call2(obj,'kevin',18));


// ----apply模拟实现----
Function.prototype.apply2 = function(context,arr){
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if(!arr){
        result = context.fn();
    }else{
        var args = [];
        var args2 = [];
        for(var i = 0,len = arr.length;i<len;i++){
            args.push('arr[' + i + ']');
            args2.push(arr[i]);
        }
        console.log(args2);
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}

var obj = {
    value: 1
}

function bar(name,age){
    console.log(this.value);
    return{
        value: this.value,
        name: name,
        age: age
    }
}
console.log(bar.apply(obj, ['kelly', 20]));
console.log(bar.apply2(obj, ['kelly']));
