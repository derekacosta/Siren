angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('confirmation', {
    url: '/confirmation',
    templateUrl: 'templates/confirmation.html',
    controller: 'confirmationCtrl'
  })

  .state('beAware', {
    url: '/beAware',
    templateUrl: 'templates/beAware.html',
    controller: 'beAwareCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('enterIN', {
    url: '/enterIN',
    templateUrl: 'templates/enterIN.html',
    controller: 'enterINCtrl'
  })

$urlRouterProvider.otherwise('/signup')

  

});