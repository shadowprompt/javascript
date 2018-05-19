var gulp = require('gulp'),
    gulpDevServer = require('gulp-devserver'),
    gulpWebServer = require('gulp-webserver');


gulp.task('devserver', function() {
    //代理方案一
    // gulp.src('./')
    //     .pipe(gulpDevServer({
    //         livereload: {
    //             //是否劫持console，开启之后将会把每一条console信息发送到server控制台。当在webview远程调试的时候，你可以开启此功能，它会把你的js错误信息发送到server控制台。如果你想在浏览器控制台使用原生的console功能，请使用__console。default: false
    //             clientConsole: true
    //         },
    //         proxy: {
    //             enable: true,
    //             port: 3000, //以本地IP:port方式打开
    //             host: 'http://localhost:11117',
    //             urls: '/Front/api/data.php' //本地接口直接请求'/Front/api/data.php'，则实际请求的是http://localhost:11117/Front/api/data.php
    //         }
    //     }));
    //代理方案二
    gulp.src('./')
        .pipe(gulpWebServer({
            livereload: true,
            open: true,
            port: 3000, //以localhost:port方式打开
            // proxies: [{
            //     source: '/data', //本地接口直接请求'/data'，则实际请求的是http://localhost:11117/Front/api/data.php
            //     target: 'http://localhost:11117/Front/api/data.php'
            // }]
        }));
});

gulp.task('default', ['devserver']);
