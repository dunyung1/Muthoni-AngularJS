var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

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
        
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
});

myApp.controller('milestoneScroll', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll();
    }
});