angular.module('app', ['ui.router'])
.config(
	function ($stateProvider, $urlRouterProvider){
		$urlRouterProvider.when("", "/reader");

		$stateProvider.state('reader', {
			url: '/reader',
			templateUrl: 'reader.html',
		});
		
		//定义一个父路由，它只用于提供URL
		// $stateProvider.state('reader', {
		// 	url: '/reader',
		// 	template: '<div ui-view>reader</div>',
		// 	abstract: true
		// });
		//定义一个子路由
		$stateProvider.state('reader.create',
		{
			url: '/create',
			templateUrl: 'controllers/reader/create.html',
			controller: 'ReaderCreateCtrl as vm'
		});
	}
)
.controller('ReaderCreateCtrl', function ReaderCreateCtrl($scope){
	var vm = this;
	vm.submit = function (form){
		console.log($scope);
	}
})
.directive('bfFieldError', function bfFieldError($compile){
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel){
			var subScope = scope.$new(true);;
			subScope.hasError = function(){
				return ngModel.$invalid && ngModel.$dirty;
			};

			subScope.errors = function(){
				return ngModel.$error;
			}

			var hint = $compile('<ul class="bf-field-error" ng-if="hasError()"><li ng-repeat="(name, wrong) in errors()" ng-if="wrong">{{name}}</li>/ul>')(subScope);
			element.after(hint);
		}
	};
})