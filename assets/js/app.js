var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('milestones', {
            url: '/milestones',
            templateUrl: 'views/milestones.html'
        })
        .state('madebymuthoni', {
            url: '/madebymuthoni',
            templateUrl: 'views/madebymuthoni.html'
        })
        .state('muthonispeaks', {
            url: '/muthonispeaks',
            templateUrl: 'views/muthonispeaks.html'
        })
});