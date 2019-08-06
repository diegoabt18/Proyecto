'use strict';

/**
 * @ngdoc overview
 * @name proyectoChatFApp
 * @description
 * # proyectoChatFApp
 *
 * Main module of the application.
 */
angular
  .module('proyectoChatFApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/viewChat', {
        templateUrl: 'views/viewchat.html',
        controller: 'ViewchatCtrl',
        controllerAs: 'viewChat'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
