'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('#CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Welcome to Cowsay';

  cowsayCtrl.speak = function(input) {
    $log.debug('#cowsayCtrl.speak');
    return cowsay.say({text: input || 'moo', f: 'ghostbusters'});
  };

  cowsayCtrl.logger = function(input) {
    $log.debug('#cowsayCtrl.logger');
    $log.log(input);
  };
}
