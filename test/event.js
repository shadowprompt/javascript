window.addEventListener('load', function() {
    console.log("window load");
    var image = document.createElement('img');
    image.addEventListener('load', function(event) {
        console.log("img load event src ", event.target.src);
    });
    window.addEventListener('unload', function(event) {
        console.log("window unload event ", event);
        alert('卸载');
    });

    document.body.appendChild(image);
    window.setTimeout(function() {
        image.src = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png';
    }, 2000);

    var img = new Image();
    img.addEventListener('load', function(event) {
        console.log("new Image load");
    });
    img.src = 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2444201518,1046263570&fm=173&s=59D27D96402528B996B03DE303007011&w=218&h=146&img.JPG';
    document.body.appendChild(img);
});

window.addEventListener('scroll', function() {
    console.log('scroll...document.body.scrollTop', document.body.scrollTop);
});

document.addEventListener('readystatechange', function(event){
    if(document.readyState == 'interactive'){
        console.log('Content load');
    }
})