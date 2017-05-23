'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('#CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Welcome to the Cowsay';
  cowsayCtrl.cows = [];
  cowsayCtrl.current;

  cowsayCtrl.speak = function(input) {
    $log.debug('#cowsayCtrl.speak');
    return cowsay.say({text: input || 'moo', f: cowsayCtrl.current || 'dragon'});
  };

  cowsayCtrl.list = function() {
    $log.debug('#cowsayCtrl.cows');
    return cowsay.list((err, cows) => {
      if (err) return err;
      cowsayCtrl.cows = cows;
    });
  };

  cowsayCtrl.logger = function(input) {
    $log.debug('#cowsayCtrl.logger');
    $log.log(input);
  };
  cowsayCtrl.list();
}
