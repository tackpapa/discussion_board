var myAppModule = angular.module('myApp', ['ngRoute']);
myAppModule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html'
        })
        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html'
        })
        .when('/topics/:id', {
            templateUrl: 'partials/topic.html'
        })
        .when('/userpage/:id', {
            templateUrl: 'partials/user.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
