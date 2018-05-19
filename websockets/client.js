var ws;
window.onload = function(){
	if(!window.WebSocket && !window.MozWebSocket){
		writemsg("您的浏览器不支持WebSocket");
		document.getElementById("connection").disabled=true;
		document.getElementById("disConnection").disabled=false;
		return;
	}else{
		writemsg("您的浏览器支持WebSocket，可以连接都服务器");
		document.getElementById("connection").disabled=false;
		document.getElementById("disConnection").disabled=true;
	}
};
function writemsg(msg){
	document.getElementById("content").innerHTML += msg +"&#13;&#10;";
}
function connect(){
	var url="ws://localhost:8091";
	// ws = new WebSocket(url);
	try{
		if(window.WebSocket){
			ws = new WebSocket(url);
		}else if(window.MozWebSocket){
			ws= new MozWebSocket(url);
		}
	}catch(ex){
		writemsg("连接错误："+ ex.data);
		return;
	}
	writemsg("正在连接服务器。。。");
	
	ws.onopen = function(){
		writemsg("欢迎加入游戏");
		document.getElementById("connection").disabled=true;
		document.getElementById("disConnection").disabled=false;
	};
	ws.onmessage=function(msg){
		writemsg(msg.data);
	};
	ws.onclose=function(){
		document.getElementById("connection").disabled=false;
		document.getElementById("disConnection").disabled=true;
	};
	ws.error=function(msg){
		document.getElementById("connection").disabled=false;
		document.getElementById("disConnection").disabled=true;
		writemsg("出错了：" + msg.data);
	}
}
function send(btn){
	console.log(btn);
	var msg = "您点击了：" +btn;
	ws.send(msg);
}
function disConnect(){
	ws.close();
	document.getElementById("connection").disabled=false;
	document.getElementById("disConnection").disabled=true;
}