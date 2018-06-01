var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");

var app = express();

// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     database: 'test',
//     user: 'root',
//     password: ''
// })

//mysql的连接池
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'test',
    user: 'root',
    password: ''
})




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var perPage = 10; //默认每页条数

app.get('/api/page/:index', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var index = req.params.index;
    console.log('当前请求第' + index + '页数据');
    pool.getConnection(function(err, connection){
        if(err){
            console.log('连接mysql数据库失败');
        }else{
            var dataBack = {
                responseCode: '001',
                responseMsg: '',
                res:{
                    count: 0,
                    data: []
                }
            }
            //查询总数
            connection.query('SELECT COUNT(*) FROM posts', null, function(err, result){
                dataBack.res.count = result[0]['COUNT(*)'];
            });
            //查询分页数据
            connection.query('SELECT * FROM posts limit ' + perPage*(index-1) +' ,' + perPage, null, function(err, result){
                if(err){
                    console.log('查询数据失败');
                }else{
                    dataBack.res.data = result;
                    res.send(dataBack);
                    connection.release();
                }
            })
            // connection.query('INSERT INTO posts SET ?',{
            //     title: 'dafd文章'
            // }, function(err, result){
            //     if(err){
            //         console.log('插入数据失败');
            //     }else{
            //         console.log('插入数据成功.....');
            //     }
            // })
        }
    })

});


app.get('*', function(req, res) {
    res.send({
        responseCode: '002',
        responseMsg: '请访问/api/page/:id获取数据'
    });
});

app.listen(8911, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:8911');
});