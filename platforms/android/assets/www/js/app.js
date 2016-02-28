'use strict';

//typeCalculator App

// 'tyepCalculator' is the name of this angular module
// the 2nd parameter is an array of 'requires'
// 'typeCalculator.services' is found in services.js
// 'typeCalculator.controllers' is found in controllers.js
var typeCalculator = angular.module('typeCalculator',
        ['ionic', 'ngResource', 'typeCalculator.controllers', 'typeCalculator.services'])

//  if(ionic.Platform.isAndroid())
//    $ionicConfigProvider.scrolling.jsScrolling(false);

typeCalculator.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

typeCalculator.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // Each tab has its own nav history stack:

    .state('tab.gen6', {
      url: '/gen6',
      views: {
        'tab-gen6': {
          templateUrl: 'templates/tab-gen6.html',
          controller: 'TypeCtrl'
        }
      }
    })

    .state('tab.gen1', {
        url: '/gen1',
        views: {
          'tab-gen1': {
            templateUrl: 'templates/tab-gen1.html',
            controller: 'TypeCtrl'
          }
        }
      })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/gen6');

});
