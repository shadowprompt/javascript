//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    //确保本地已安装gulp-sourcemaps [cnpm install gulp-sourcemaps --save-dev]
    sourcemaps = require('gulp-sourcemaps'),
    //当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    htmlmin = require('gulp-htmlmin'),
    refresh = require('gulp-refresh'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    //noinspection JSAnnotator
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-minify-css'),
    changed = require('gulp-changed'),
    path = require('path'),
    tap = require('gulp-tap'),
    server = require('gulp-devserver'),
    rev = require('gulp-rev-append'); //给页面引用url添加版本号，以清除页面缓存

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function() {
    gulp.src('./src/less/index.less') //该任务针对的文件
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
        .pipe(sourcemaps.init())
        .pipe(less()) //该任务调用的模块
        .pipe(cssmin()) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css')) //将会在src/css下生成index.css
        // .pipe(refresh())
        .pipe(connect.reload())
});
gulp.task('testHtmlmin', function() {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html'))
        .pipe(connect.reload());
});
gulp.task('testImagemin', function() {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});
gulp.task('testCssmin', function() {
    gulp.src('src/css/*.css')
        .pipe(cssmin({
            advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
                //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('testConnect', function() {
    connect.server({
        root: 'dist',
        port: 8001,
        livereload: true
    });
});
gulp.task('testOpen', function() {
    gulp.src('dist/html/index.html')
        .pipe(open({ uri: 'http://localhost:8001/' }));
});
gulp.task('testWatch', function() {
    // refresh.listen();
    gulp.watch('./src/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
    gulp.watch('./src/html/*.html', ['testHtmlmin']);
});

gulp.task('do', ['testHtmlmin', 'testLess', 'testConnect', 'testOpen', 'testWatch', 'devserver']);

gulp.task('default', function() {
    return gulp.watch('src/html/*.html', function(event) {
        //可加入压缩等其他任务
        gulp.src('src/html/*.html')
            .pipe(changed('dist/html'))
            .pipe(gulp.dest('dist/html'));
    });
}); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
gulp.task('refreshChrome', function() {
    var server = livereload();
    //自动刷新浏览器
    gulp.watch('src/*/*.html', function(file) {
        server.changed(file.path);
    });
});
gulp.task('examples', function() {
    return gulp.src('./src/*/*.html')
        .pipe(tap(function(file, t) {
            console.log(path.basename(file.path));
            // Do something with the file name
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('devserver', function() {
    //代理方案一
    gulp.src('./')
        .pipe(server({
            livereload: {
                clientConsole: true
            },
            proxy: {
                enable: true,
                port: 3000,
                host: 'http://localhost:11117',
                urls: '/Front\/api\//'
            }
        }));
    //代理方案二
    // gulp.src('./')
    //     .pipe(gulpWebServer({
    //         livereload: true,
    //         open:true,
    //         port:3000,
    //         proxies:[
    //             {
    //                 source:'/data',
    //                 target:'http://localhost:11117/Front/api/data.php'
    //             }
    //         ]
    //     }));
});


gulp.task('testRev', function() {
    gulp.src('src/html/index.html')
        .pipe(rev())
        .pipe(gulp.dest('dist/html'));
});
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径

// // run server
// gulp.task( 'server:start', function() {
//     server.listen( { path: './app.js' } );
// });
//
// // restart server if app.js changed
// gulp.task( 'server:restart', function() {
//     gulp.watch( [ './app.js' ], server.restart );
// });