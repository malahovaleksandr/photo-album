'use strict';

module.exports = angular.module('TestApp', [])
  .controller('TestAppController', function ($scope) {
    $scope.greeting = "Let's start";
  });