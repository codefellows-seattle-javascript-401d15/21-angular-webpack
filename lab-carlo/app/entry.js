'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('#Cowsaycontroller');
  let lastMoo = [];
  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Welcome to Moo York';

  cowsayCtrl.speak = function(input) {
    $log.debug('#cowsayCtrl.speak');
    return cowsay.say({text: input || 'mooo', f: 'supermilker'});
  };

  cowsayCtrl.logger = function(input) {
    $log.debug('#cowsayCtrl.logger');
    $log.log(input);
    lastMoo.push(input);
    console.log(lastMoo);
  };

  cowsayCtrl.previous = function() {
    return lastMoo;
  };
}
