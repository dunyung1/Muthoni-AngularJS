var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/milestones', {
        templateUrl: 'views/milestones.html'
    })
    .when('/madebymuthoni',{
        templateUrl: 'views/madebymuthoni.html'
    })
    .when('/muthonispeaks',{
        templateUrl: 'views/muthonispeaks.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);