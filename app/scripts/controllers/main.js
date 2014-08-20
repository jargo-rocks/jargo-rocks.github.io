'use strict';

/**
 * @ngdoc function
 * @name jargoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jargoApp
 */
angular.module('jargoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
