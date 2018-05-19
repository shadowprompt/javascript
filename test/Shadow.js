(function(f) {
 	if (typeof exports === "object" && typeof module !== "undefined") {
 		module.exports = f()
 	} else if (typeof define === "function" && define.amd) {
 		define([], f)
 	} else {
 		var g;
 		if (typeof window !== "undefined") {
 			g = window
 		} else if (typeof global !== "undefined") {
 			g = global
 		} else if (typeof self !== "undefined") {
 			g = self
 		} else {
 			g = this
 		}
 		g.Shadow = f();
 	}
})(function() {
 	var define, module, exports;
 	return (function e(t, n, r) {
 		console.log(t); //第一个参数，moduleId数组组成的对象
 		console.log(n); //第二个参数，包含三个对象：前面array里面的exports和array后面的那个对象{"aa":"b"}
 		console.log(r); //第三个参数，[2]，传递的那个[]，里面的数值必须是已经存在的module

 		function s(o, u) {
            console.log(o); //先被传入第三个参数，接着被传入n里面包含的array对应的moduleId
            console.log(u); //undefined， 因为45行只传了一个参数，未传此参数
 			if (!n[o]) { //判断第二个参数(提供值)里面是否有第三个参数（数组）(它提供键)对应的值，如果存在则自己执行下面的exports
 				if (!t[o]) {//判断moduleIde是否存在，看第二个参数里面找不到第三个参数对应的moduleId
 					var a = typeof require == "function" && require; // false
 					if (!u && a) return a(o, !0);
 					if (i) return i(o, !0);
 					var f = new Error("Cannot find module '" + o + "'");
 					throw f.code = "MODULE_NOT_FOUND", f
 				}
                console.log(n[o]);//undefined
 				var l = n[o] = {
 					exports: {}
 				};
                console.log(l); //对应的exports
 				t[o][0].call(l.exports, function(e) { //t[o][0]为对应module的(_dereq_, module, exports)函数
                    //这里的function(e){}，作为第一个参数(即_dereq_)传递给(_dereq_, module, exports)函数，
                    console.log(arguments); //3
                    console.log(e); //3，因为1里面_dereq_(3)
                    console.log(t[o][1]);//moduleId数组的第二个参数
 					var n = t[o][1][e]; //undefined，看看dereq的3在不在moduleId数组的第二个参数里面
                    console.log(s(n ? n : e));
 					return s(n ? n : e) //只传了一个参数，在的的话，把它对应的值传入s()，否则传s(3)
 				// }, l, l.exports)
                }, l, l.exports, e, t, n, r)
 			}
            //返回exports
 			return n[o].exports
 		}
 		var i = typeof require == "function" && require; //false
        //将第三个参数（依赖moduleId数组）循环执行函数s()
 		for (var o = 0; o < r.length; o++) {
            console.log("r.length= "+r.length);
            s(r[o]);
        }
        //s()函数先执行第三个参数里面的依赖，再执行
 		return s
 	})({
 		1: [ function(_dereq_, module, exports){
            console.log(this);
            console.log(_dereq_);
            console.log(module);
            console.log(exports);
            var dd = _dereq_(3); //即s(3)
            var ff = {
                "parama": "aaaa",
                "paramb": "bbbb"
            }
 			module.exports = ff;
 		}, {3: 3}],
 		2: [function(_dereq_, module, exports){
            console.log(this);
 			function cc(){
 				return 2212;
 			};
 			module.exports = cc;
 		}],
        3: [function(_dereq_, module, exports){
            // var dd = _dereq_(4);
            console.log(this);
            module.exports = "3null"
        }],
        4: [function(_dereq_, module, exports){
            module.exports = "4null"
        }]
 	}, {"aa":"b"},[2, 3])(1,"heh") //先遍历数组[2]，将里面的值分别传入s()执行，完毕后再将(1,"heh")传入s()，执行(1, "heh")
})