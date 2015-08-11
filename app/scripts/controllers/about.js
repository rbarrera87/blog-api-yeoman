'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('postApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
