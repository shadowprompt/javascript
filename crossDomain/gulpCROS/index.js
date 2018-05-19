$.ajax({

    type: 'GET',

    url: '/data',
    // url: '/Front/api/data.php',
    success: function(res) {
        console.log(res.result);
        console.log('success');
    },
    error: function(err) {
        console.log(err);
        console.log('失败了');
    }
});