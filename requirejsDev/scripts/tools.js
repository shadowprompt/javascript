var Tools = {
    obj: {
        node: null
    },
    _init: function(){
        var e = document.createElement('div');
        e.innerHTML='<div id="rotate_tip" style="display:none"><div class="rotate_tip_shake"></div>请竖屏</div>';
        document.body.appendChild(e);
    },
    init:  function(){
        var e = this;
        return e.obj.node = document.getElementById('rotate_tip'), e.obj.nede || (e._init(), e.obj.node = document.getElementById('rotate_tip')), e._bind(), e
    },
    _bind: function(){
        var e= this;
        return e.obj.node && (window.onorientationchange = function(){
            if(90 == window.orientation || -90 == window.orientation){
                e.obj.node.style.display = 'block';
                var t = e.obj.node.getElementsByName("rotate_tip_shake"),
                    n = t.length>0 ?t[0]: null;
                n && (n.style.animationPlayState = "running", n.style.webkitAnimationPlayState = "running")
            }else{
                e.obj.node.style.display = 'none';
                var t = e.obj.node.getElementsByName("rotate_tip_shake"),
                    n = t.length>0 ?t[0]: null;
                n && (n.style.animationPlayState = "paused", n.style.webkitAnimationPlayState = "paused")
            }
        }), e
    }
}
window.Tools =Tools;