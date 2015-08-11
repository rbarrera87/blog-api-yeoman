'use strict';

/**
 * @ngdoc function
 * @name postApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the postApp
 */
angular.module('postApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
