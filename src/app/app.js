(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'ngAnimate',
      'ngMaterial',
        'ui.bootstrap'
    ])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider', '$locationProvider'];
  // run.$inject = [];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function config($routeProvider, $locationProvider) {
    // routes
    $routeProvider
      .when('/MarcoPolo', {
        templateUrl: 'app/MarcoPolo/marcoPolo.html',
        controller: 'MarcoPoloController',
        controllerAs: 'vm'
      })
        .when('/UserStory', {
            templateUrl: 'app/userStory/userStory.html',
            controller: 'UserStoryController',
            controllerAs: 'vm'
        })
      .otherwise({
        redirectTo: '/MarcoPolo'
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  /**
   * Run once the App is ready
   */
  function run() {
    // console.log('App ready!');
  }
})();
