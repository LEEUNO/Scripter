// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var app = angular.module('TypistApp', ['ionic', 'TypistApp.controllers', 'jett.ionic.scroll.sista'])
  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      //StatusBar.hide();

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();

      }
    });

  })
  .config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html',
            controller: 'MainController'
          }
        }
      })
      .state('app.record-page', {
        url: '/record-page',
        views: {
          'menuContent': {
            templateUrl: 'templates/directives/record-page.html',
            controller: 'recordPageController'
          }
        }
      })
      .state('app.record-detail', {
        url: '/record-detail',
        views: {
          'menuContent': {
            templateUrl: 'templates/directives/record-detail.html',
            controller: 'recordDetailController'
          }
        }
      })
      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/browse');
  });
