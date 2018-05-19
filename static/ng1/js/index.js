angular.module("app",[])
.controller('MyCtrl',function($scope){
	$scope.msg="abcd";
	$scope.reverse=function(){
		return $scope.msg.split("").reverse().join("");
	}
})
.controller('MyCtrl2',function($scope){
	$scope.msg="";
	$scope.uname = "张三";
	$scope.reverse=function(){
		//$scope.msg="无语";
		return $scope.msg;
	}
})

//自定义service服务
.value('realname','zhaoliu')
.value('realname','wangwu')
.constant('http','http://www.baidu.com')
.constant('http','http://www.sohu.com')
.factory('Data',function(){
	return {
		msg:'你好啊',
		setMsg:function(){
			this.msg="我不好";
		}
	}
})
.service('User',function(){
	this.firstname="上官";
	this.lastname="飞鹰";
	this.getName=function(){
		return this.firstname+this.lastname;
	}
})
.controller('MyCtrl4',function($scope,realname,http,Data,User){
	$scope.msg="你好";
	$scope.realname=realname;
	$scope.http=http;
	$scope.data=Data;
	Data.setMsg();
	$scope.uname=User.getName();
})
.factory('Data2',function(){
	return {
		msg:'购物车第一个是什么',
		shopcart:['java','Vb','C']

	}
})
.controller('FCtrl',function($scope,Data2){
	$scope.data2=Data2;
})
.controller('Shopping',function($scope,Data2){ //购物车
	$scope.shopcart=Data2.shopcart;
	$scope.buy=function(){
		$scope.shopcart.push($scope.goods);
	}
})

.controller('UserCtrl',function($scope){
	$scope.user={
		icon:'images/logo.jpg',
		isShowImg:false,
		showicon:true,
		uname:'',
		pwd:'',
		zw:'1',
		sex:'1',
		aihao:[0,2],
		errormsg:''
	};
	$scope.isAihao=function(n){
		var isok =false;
		for(var i=0;i<$scope.user.aihao.length;i++){
			if(n==$scope.user.aihao[i]){
				isok=true;
				break;
			}
		}
		return isok;
	}
	$scope.register=function(user){
		if($scope.user.uname=="admin" && $scope.user.pwd=="admin"){
			alert("提交成功");
		}else{
			$scope.user.errormsg="密码或者帐号不正确";
		}
		console.log($scope.user);
	}
})

.controller('AddressCtrl',function($scope){
	$scope.list=[
		{id:1,address:'华山小区'},
		{id:2,address:'泰山小区'},
		{id:2,address:'嵩山小区'}
	]	
})

// .config(function($httpProvider){
// })
// .controller('SqlCtrl',function($scope,$http){
// 	$http.get('http://127.0.0.1:80/user/getUsers');
// 	.success(function(resp){
// 		console.log(resp);
// 	})

// 	// //jquery
// 	// $.get('',function(data){
		
// 	// })
// })