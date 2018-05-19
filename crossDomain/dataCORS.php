<?php
    header('Access-Control-Allow-Origin: http://localhost:8090');
    /*后端获取请求数据，并生成返回内容*/
    
    // if( $_GET["data"] && $_GET["callback"]){
    //     $data = $_GET["data"];
    //     $callback = $_GET["callback"];
    //     echo $callback."('sucess', '".$data."')";
    // }
    
    $json = '{"report":{"date":"2012-04-10","content":"abcdefght"}}';
    echo $json;
?>