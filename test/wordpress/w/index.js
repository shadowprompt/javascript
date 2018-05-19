$('#myNav').on('activate.bs.scrollspy', function(e){
    var cur = e.target;
    var pn = cur.parentNode;
    var sib = pn.children;
    console.log("。。。");
    var totalHeight = 0;
    for(var i=0;i<sib.length;i++){
        totalHeight += sib[i].offsetHeight;

        if(sib[i] == cur){
            console.log("切换active");
            pn.scrollTop = totalHeight - pn.offsetHeight;
            break;
        }
    }
})