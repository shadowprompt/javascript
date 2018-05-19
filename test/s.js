(function(f){
    window.ff = f();
})(function(){
    console.log(arguments);
    return (function e(t, n, r){
        console.log(arguments);
        function s(o, u){
            console.log(arguments);
            if (!n[o]) {
                if (!t[o]){
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
        }
        return s;
    })({
        1: [function(_dereq_, module, exports){
            var ff = {
                "parama": "aaaa",
                "paramb": "bbbb"
            }
            module.exports = ff;
        }, {3: 3}],
        2: [],
        3: []
    },{'a': 'aa'}, [2, 3])(1,'hehe')
})