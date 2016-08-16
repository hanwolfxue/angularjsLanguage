'use strict';

// Declare app level module which depends on views, and components
var controllers = angular.module('controllers', [])
var filters = angular.module('filters', [])
var app = angular.module('myApp', [
    'ngAnimate',
    'ngRoute',
    'pascalprecht.translate',
    'controllers',
    'filters'
])

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/pageTab', {
            templateUrl: 'templates/pageTab.html',
            controller: 'pageTabController',
        })
        .otherwise({redirectTo: '/pageTab'});
}]);
app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('cn',{
        'content':'欢迎来到上海',
    })
        .translations('us',{
          'content':'welcome to Shanghai',
        })
    $translateProvider.preferredLanguage('cn');
    }])



