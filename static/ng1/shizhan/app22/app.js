var myApp = angular.module("myApp", ['ui.router']);
 
myApp.config(function ($stateProvider, $urlRouterProvider) {
 
     $urlRouterProvider.when("", "/PageTab");
 
     $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "controllers/reader/create.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "Page-2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page-3.html"
        });
});