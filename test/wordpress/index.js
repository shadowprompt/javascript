(function(){

    function render(data){

        $('.postLists').html( doT.template($('#postLists_Template2').html())({result: data}) );

        // $('.postLists').html( doT.template($('#postLists_Template').html())({result: data}) );
        $('.postList').each(function(index, item){
            console.log(item);
            $(item).data('item') && $(item).prop('item', $(item).data('item')).removeAttr("data-item");

            $(item).off().on('click', function(){
                window.location.href = $(this).prop('item').link;
            })
        })
        $('.postList').off().on('click', function(){
            var $item = $(this).prop('item');
            window.location.href = $item;
        })
    };

    function loadData(){
        fetchData();
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    // myHeaders.append("Content-Length", content.length.toString());
    // myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    function fetchData(cb){
        fetch('http://localhost:11117/Front/api/data.php')
        // fetch('http://www.daozhao.com/wp-json/wp/v2/posts', myInit)
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(data){
            console.log(data);
            render(data);
        })
        .catch(function(res, err) {
            console.log(res);
            console.log("error");
        });
    };

    function init(){
        loadData();
    }

    init();

})()


