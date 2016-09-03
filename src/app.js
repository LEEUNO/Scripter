
var app = angular.module('TypistApp', ['ionic', 'TypistApp.controllers', 'jett.ionic.scroll.sista', 'ngCordova'])
  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }


      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        $cordovaStatusbar.styleDefault();
      }
    });

  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.scrolling.jsScrolling(true);

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
      .state('app.recordDetail', {
        url: '/recordContents',
        views: {
          'menuContent': {
            templateUrl: 'templates/record-detail.html',
            controller: 'recordListController'
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
            templateUrl: 'templates/record-detail.html',
            controller: 'recordDetailController'
          }
        }
      })
      .state('app.scrap-contents', {
        url: '/scrap-contents',
        views: {
          'menuContent': {
            templateUrl: 'templates/scrap-detail.html',
            controller: 'scrapContents'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/browse');
  });

angular.module('TypistApp.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {


    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  });

