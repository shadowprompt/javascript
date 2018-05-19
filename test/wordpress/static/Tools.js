(function(){
	// 构建大对象存储相关工具方法
	var Tools = {};

	/**加法函数，用来得到精确的加法结果
	 * 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
	 * @return arg1和调用函数的数字的和
	 */
	Number.prototype.add = function(arg1) {
		var r1, r2, m, arg2 = this.valueOf();
		try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
		try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
		m = Math.pow(10, Math.max(r1, r2))
		return Number((arg1 * m + arg2 * m) / m);
	}
	Number.prototype.sub = function(arg2) {
		var arg1 = this.valueOf();
		try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
		try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
		m = Math.pow(10, Math.max(r1, r2));
		n = (r1 >= r2) ? r1 : r2;
		return (new Number( ((arg1 * m - arg2 * m) / m).toFixed(n) )).valueOf();
	}
	Number.prototype.mul = function(arg1) {
		var m=0,s1=arg1.toString(),s2=this.valueOf().toString();
	    try{m+=s1.split(".")[1].length}catch(e){}
	    try{m+=s2.split(".")[1].length}catch(e){}
	    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
	}
	Number.prototype.div = function(arg2) {
		var t1=0,t2=0,r1,r2,arg1 = this.valueOf();
	    try{t1=arg1.toString().split(".")[1].length}catch(e){}
	    try{t2=arg2.toString().split(".")[1].length}catch(e){}
	    with(Math){
	        r1=Number(arg1.toString().replace(".",""))
	        r2=Number(arg2.toString().replace(".",""))
	        return (r1/r2)*pow(10,t2-t1);
	    }
	}
	//格式化日期
	Date.prototype.Format = function (fmt) {
		var o = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S": this.getMilliseconds()
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	// 获取浏览器中的参数
	Tools.getParams = Tools.pms = function(name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = location.search.substr(1).match(reg);
		if (r) {
			return decodeURI(r[2]);
		}
		return null;
	};
	/**
	* 获取search中的参数信息，返回参数对象
	* @param {String} search 可选参数，空则表示获取当前地址栏中的参数，否则获取指定search中的参数信息
	* @return {Object} obj
	*/
	Tools.param2obj = Tools.search = function(search) {
		var obj = {};
		search = search.charAt(0) == "?" ? search.substring(1) : search;
		if(search == ''){return obj};
		var a_search = search.split('&');
		if(a_search){
			for(var i = 0, len = a_search.length; i < len; i++){
				var el = a_search[i];
				if(el){
					var els = el.split('=');
					obj[els[0]] = decodeURIComponent(els[1]);
				}
			}
		}
		return obj;
	};
	// Cookie
	Tools.Cookie = function(key, value, options) {
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
			options = options || {};

			if (value === null || value === undefined) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires,
				t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}
			value = String(value);

			return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value: encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path: '', options.domain ? '; domain=' + options.domain: '', options.secure ? '; secure': ''].join(''));
		}
		options = value || {};
		var decode = options.raw ?
		function(s) {
			return s;
		}: decodeURIComponent;
		var pairs = document.cookie.split('; ');
		for (var i = 0,
		pair; pair = pairs[i] && pairs[i].split('='); i++) {
			if (decode(pair[0]) === key) return decode(pair[1] || '');
		}
		return null;
	};
	/**
	 * 页面跳转
	 * @param urlHref 要跳转的页面
	 * @param isReplace	是否替换当前页面,默认为false[不替换]
	 * @param isReload	是否重新加载当前页面,默认为true[重新加载]
	 */
	Tools.go = function(urlHref, isReplace, isReload) {
		isReplace = isReplace || false;
		isReload = isReload && true;
		//跳转页面
		if (history.replaceState && isReplace) {
			history.replaceState("", "", urlHref);
			if (isReload) {
				location.reload(true);
			}
		} else {
			location.href = urlHref;
		}
	}
	// Dialog
	Tools.Dialog = Tools.Weui_Dialog = {
		obj : {
			node : null,
			title : null,
			content : null,
			cancel : null,
			ok : null
		},
		_init : function(){
			var div = document.createElement('div');
			div.innerHTML = '<div class="weui_dialog_alert" id="weui_dialog" style="display: none;">'+
				'<div class="weui_mask"></div>'+
				'<div class="weui_dialog">'+
					'<div class="weui_dialog_hd"><strong id="weui_dialog_title" class="weui_dialog_title">温馨提示</strong></div>'+
					'<div class="weui_dialog_bd" id="weui_dialog_content"></div>'+
					'<div class="weui_dialog_ft">'+
						'<a id="weui_dialog_cancel" href="javascript:;" class="weui_btn_dialog default" style="display: none;">取消</a>'+
						'<a id="weui_dialog_ok" href="javascript:;" class="weui_btn_dialog primary">确定</a>'+
					'</div>'+
				'</div>'+
			'</div>';
			document.body.appendChild(div);
		},
		show : function(title, msg, okFunc, useCancel, cancelFunc, btnTextObj){
			var self = this;
			self.obj.node = document.getElementById("weui_dialog");
            if (!self.obj.node) {
				self._init();
				self.obj.node = document.getElementById("weui_dialog");
			}
			self.obj.title = document.getElementById("weui_dialog_title");
			self.obj.content = document.getElementById("weui_dialog_content");
			self.obj.title.innerHTML = title || '温馨提示';
			self.obj.content.innerHTML = msg;

			if(useCancel){
				self.obj.cancel = document.getElementById("weui_dialog_cancel");
				if(btnTextObj && btnTextObj.cancel){
					self.obj.cancel.innerHTML = btnTextObj.cancel;
				}
				self.obj.cancel.style.display = "block";
				self.obj.cancel.onclick = function(){
					if(cancelFunc && typeof cancelFunc === 'function'){
						cancelFunc(self.obj.node);
					}else{
						self.hide();
					}
				}
			}else{
				self.obj.cancel && (self.obj.cancel.style.display = "none");
			}
			self.obj.ok = document.getElementById("weui_dialog_ok");
			if(btnTextObj && btnTextObj.ok){
				self.obj.ok.innerHTML = btnTextObj.ok;
			}
			self.obj.ok.onclick = function(){
				if(okFunc && typeof okFunc === 'function'){
					okFunc(self.obj.node);
				}else{
					self.hide();
				}
			}
			self.obj.node.style.display = "block";
			return self;
		},
		hide : function(){
			var self = this;
			if(self.obj.node){
				self.obj.node.style.display = "none";
				self.obj.title.innerHTML = '';
				self.obj.content.innerHTML = '';
				self.obj.cancel && (self.obj.cancel.onclick = null);
				self.obj.ok && (self.obj.ok.onclick = null);
			}
			return self;
		},
		done : function(f){
			f && typeof f === 'function' && f(this.obj.node);
		}
	};
	// Loading
	Tools.Loading = Tools.Weui_Loading = {
		obj : {
			node : null
		},
		_init : function(){
			var div = document.createElement('div');
			div.innerHTML = '<div id="weui_loading_toast" class="weui_loading_toast" style="display:none;">'+
				'<div class="weui_mask_transparent"></div>'+
				'<div class="weui_toast">'+
					'<div class="weui_loading">'+
						'<div class="weui_loading_leaf weui_loading_leaf_0"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_1"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_2"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_3"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_4"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_5"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_6"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_7"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_8"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_9"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_10"></div>'+
						'<div class="weui_loading_leaf weui_loading_leaf_11"></div>'+
					'</div>'+
					'<p class="weui_toast_content">loading...</p>'+
				'</div>'+
			'</div>';
			document.body.appendChild(div);
		},
		show : function(autoHide, seconds){
			var self = this;
			self.obj.node = document.getElementById("weui_loading_toast");
            if (!self.obj.node) {
				self._init();
				self.obj.node = document.getElementById("weui_loading_toast");
			}
			self.obj.node.style.display = "block";
			if(autoHide){
				setTimeout(function(){
					self.hide();
				}, seconds * 1000 || 5000);
			}
			return self;
		},
		hide : function(){
			var self = this;
			if(self.obj.node){
				self.obj.node.style.display = "none";
			}
			return self;
		},
		done : function(f){
			f && typeof f === 'function' && f(this.obj.node);
		}
	};
	// Message
	Tools.Message = Tools.Weui_Message = {
		obj : {
			node : null
		},
		_init : function(){
			var div = document.createElement('div');
			div.innerHTML = '<div id="msg_tip_error" class="weui_toptips weui_warn js_tooltips msg_tip_error"></div>';
			document.body.appendChild(div);
		},
		show : function(msg, autoHide, seconds){
			var self = this;
			self.obj.node = document.getElementById("msg_tip_error");
            if (!self.obj.node) {
				self._init();
				self.obj.node = document.getElementById("msg_tip_error");
			}
			self.obj.node.innerHTML = msg;
			self.obj.node.style.display = "block";
			if(autoHide){
				setTimeout(function(){
					self.hide();
				}, seconds * 1000 || 1000);
			}
			return self;
		},
		hide : function(){
			var self = this;
			if(self.obj.node){
				self.obj.node.style.display = "none";
				self.obj.node.innerHTML = "";
			}
			return self;
		},
		done : function(f){
			f && typeof f === 'function' && f(this.obj.node);
		}
	};
	Tools.Toast = {
	        obj: {
	            node: null,
	            msg: null
	        },
	        _init: function() {
	            var e = document.createElement("div");
	            e.innerHTML = '<div class="toast_msg_tip" id="toast_msg_tip"><div class="toast_mask_bg"></div><div class="toast_msg"><div class="toast_hd"><strong id="toast_title" class="toast_title">温馨提示</strong></div><div class="toast_bd" id="toast_content"></div></div></div>', document.body.appendChild(e)
	        },
	        show: function(e, t, n, o) {
	            var i = this;
	            return t && ("undefined" == typeof n && (n = !0), i.obj.node = document.getElementById("toast_msg_tip"), i.obj.node || (i._init(), i.obj.node = document.getElementById("toast_msg_tip")), i.obj.node.style.height = document.body.clientHeight + "px", i.obj.msg = document.getElementById("toast_title"), i.obj.msg.innerHTML = e || "温馨提示", i.obj.msg = document.getElementById("toast_content"), i.obj.msg.innerHTML = t, i.obj.node.style.display = "block", n && setTimeout(function() {
	                i.hide()
	            }, 1e3 * o || 3e3)), i
	        },
	        hide: function() {
	            var e = this;
	            return e.obj.node && (e.obj.node.style.display = "none", e.obj.msg.innerHTML = ""), e
	        },
	        done: function(e) {
	            e && "function" == typeof e && e(this.obj.node)
	        }
    };
	Tools.AppAjax = {
		/**
		 * Get请求
		 * @param url	请求路径
		 * @param successFunc	请求成功后执行函数
		 * @param errorFunc	请求异常后执行函数
		 */
		get: function(url, successFunc, errorFunc) {
			$.ajax({
				url: url,
				type: "GET",
				asysc: true,
				cache: false,
				dataType: 'json',
				success: function(response) {
					successFunc && successFunc(response);
				},
				error: function(response) {
					errorFunc && errorFunc(response);
				}
			});
		},
		/**
		 * Post请求
		 * @param url	请求路径
		 * @param data	请求参数
		 * @param successFunc	请求成功后执行函数
		 * @param errorFunc	请求异常后执行函数
		 */
		post: function(url, data, successFunc, errorFunc) {
			$.ajax({
				url: url,
				type: "POST",
				asysc: true,
				cache: false,
				dataType: 'json',
				data: data,
				success: function(response) {
					successFunc && successFunc(response);
				},
				error: function(response) {
					errorFunc && errorFunc(response);
				}
			});
		},
		/**
		 * JSONP请求
		 * @param url	请求路径
		 * @param data	请求参数
		 * @param successFunc	请求成功后执行函数
		 * @param errorFunc	请求异常后执行函数
		 */
		jsonp: function(url, data, successFunc, errorFunc) {
			$.ajax({
				url: url,
				type: "POST",
				asysc: true,
				cache: false,
				data: data,
				dataType: 'jsonp',
				jsonp: "callbackFunc",
				jsonpCallback: "callbackFunc",
				success: function(response) {
					successFunc && successFunc(response);
				},
				error: function(response) {
					errorFunc && errorFunc(response);
				}
			});
		}
	};
	// 日期对象工具类
	Tools.DateUtil = {
		isDate : function(d){
			return Object.prototype.toString.call(d) == "[object Date]";
		},
		FORMAT : {
			ymd : "yyyy-MM-dd",
			ymdhm : "yyyy-MM-dd hh:mm",
			ymdhms : "yyyy-MM-dd hh:mm:ss",
			ymdhmsS : "yyyy-MM-dd hh:mm:ss.SSS",
			hm : "hh:mm",
			hms : "hh:mm:ss"
		},
		format : function(d, fs){
			var self = this;
			if(!self.isDate(d)){
				d = new Date(d);
			}
			fs = fs || self.FORMAT.ymdhmsS;
			if(/yyyy/.test(fs)){
				fs = fs.replace('yyyy', d.getFullYear());
			}
			if(/MM/.test(fs)){
				var m = d.getMonth() + 1;
				fs = fs.replace('MM', (m < 10 ? ('0' + m) : m));
			}
			if(/dd/.test(fs)){
				fs = fs.replace('dd', (d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate()));
			}
			if(/hh/.test(fs)){
				fs = fs.replace('hh', (d.getHours() < 10 ? ('0' + d.getHours()) : d.getHours()));
			}
			if(/mm/.test(fs)){
				fs = fs.replace('mm', (d.getMinutes() < 10 ? ('0' + d.getMinutes()) : d.getMinutes()));
			}
			if(/ss/.test(fs)){
				fs = fs.replace('ss', (d.getSeconds() < 10 ? ('0' + d.getSeconds()) : d.getSeconds()));
			}
			if(/SSS/.test(fs)){
				fs = fs.replace('SSS', d.getMilliseconds());
			}
			return fs;
		}
	};
	Tools.helpHandler = {
		/**
		 *  根据证件号码获取生日信息及其性别
		 */
		getInfoByIdCard : function(idCard){
			if(idCard == null){
				// 传入的值为空
				return {};
			}else{
				if(idCard.length === 0 ){
					// 传入的值为空
					return {};
				}else{
					var info = {};
					info.id = idCard;
					// 不为空
					switch(idCard.length){
						case 15:
							info.year = info.id.substring(6, 8); // 第7、8位为出生年份(两位数)
							info.year = info.year > 10 ? '19' + info.year : '20' + info.year;
							info.month = info.id.substring(8, 10); // 第9、10位为出生月份
							info.day = info.id.substring(10, 12); // 第11、12位代表出生日期
							// 第15位代表性别，奇数为男，偶数为女
							info.sex = info.id.substring(14, 15) % 2 == 1 ? 'M' : 'F';
							info.date = info.year + '-' + info.month + '-' +  info.day;
							break;
						case 18:
							info.year = info.id.substring(6, 10); // 第7、8、9、10位为出生年份(四位数)
							info.month = info.id.substring(10, 12); // 第11、第12位为出生月份
							info.day = info.id.substring(12, 14); // 第13、14位代表出生日期
							// 第17位代表性别，奇数为男，偶数为女
							info.sex = info.id.substring(16, 17) % 2 == 1 ? 'M' : 'F';
							info.date = info.year + '-' + info.month + '-' + info.day;
							break;
						default:
							info.error = true;
						break;
					}
					return info;
				}
			}
		},
		/**
		* 自动删除字符串中符合匹配内容的字符
		* @param {String} str
		* @param {Array} chars
		*/
		delChars : function(str, chars) {
			var result = '', s = '', c = '', n = true;
			if(!Object.prototype.toString.call(chars) == "[object Array]"){
				chars = [chars];
			}
			for (var i = 0, len = str.length; i < len; i++) {
				s = str[i];
				n = true;

				for (var j = 0, clen = chars.length; j < clen; j++) {
					c = chars[j];
					if(Object.prototype.toString.call(c) == "[object RegExp]"){
						if (c.test(s)) {
							n = false;
							break;
						}
					} else if (s == c) {
						n = false;
						break;
					}
				}
				if (n) {
					result += s;
				}
			}
			return result;
		},
		getImage : function(path, cb){
			// 设置请求地址无缓存操作
			path = path + (path.indexOf("?") != -1 ? "&" : "?") + (+new Date() * Math.random());
			var img = new Image();
			img.src = path;
			if(img.complete){
				typeof cb == "function" && cb.call(this, img, !0);
				return;
			}
			img.onload = function(){
				typeof cb == "function" && cb.call(this, img, !0);
			}
			img.onerror = function(){
				typeof cb == "function" && cb.call(this, img, !!0);
			}
		},
		/**
		 * 转义html代码，防止xss
		 * @param {string} html 需要转义的html代码
		 */
		escapeHtml : function(html){
			return html
				.replace(/&/g, "&amp;")/*转义&*/
				.replace(/</g, "&lt;")/*转义<*/
				.replace(/>/g, "&gt;")/*转义>*/
				.replace(/'/g, "&#39;")/*转义'>*/
				.replace(/"/g, "&quot;")/*转义">*/
				.replace(/[\b\f\n\r\t\v]/g, "")/*转义\>*/
		},
		unescapeHtml : function(html){
			return html
				.replace(/(&amp;)/g, "&")/*转义&*/
				.replace(/(&lt;)/g, "<")/*转义<*/
				.replace(/(&gt;)/g, ">")/*转义>*/
				.replace(/(&#39;)/g, "\'")/*转义'>*/
				.replace(/(&quot;)/g, "\"")/*转义">*/
		},
		/**
		 * 转义js代码，防止xss
		 * @param {string} html 需要转义的js代码
		 */
		escapeJSCode : function(code){
			return code
				.replace(/</g, "&lt;")/*转义<*/
				.replace(/>/g, "&gt;")/*转义>*/
				.replace("/", "\/")/*转义/>*/
				.replace(/'/g, "\'")/*转义'>*/
				.replace(/"/g, "\"")/*转义">*/
				.replace(/[\b\f\n\r\t\v]/g, "")/*转义\>*/
		},
		unescapeJSCode : function(code){
			return code
				.replace(/(&lt;)/g, "<")/*转义<*/
				.replace(/(&gt;)/g, ">")/*转义>*/
		}
	};
	// 格式转换
	Tools.formatTransform = {
		price: function(d){
			d = d - 0;
			if(!isNaN(d)){
				if(d < 10000){
					return d.toFixed(0) + "元";
				}else if(d >= 10000 && d < 100000000){
					return (d / 10000).toFixed(2) + "万元";
				}else{
					return (d / 100000000).toFixed(2) + "亿元";
				}
			}
		}
	};
	window.Tools = Tools; // 转嫁到window对象上，方便调用
})();