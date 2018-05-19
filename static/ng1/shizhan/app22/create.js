angular.module('app', ['ui.router'])
.controller('ReaderCreateCtrl', function ReaderCreateCtrl(){
	var vm = this;
	vm.submit = function (form){
		console.log(vm);
	}
});