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

  cowsayCtrl.title = 'Welcome to Cowsay';

  // cowsayCtrl.list = function() {
  //   $log.debug('#cowsayCtrl.cows');
  //   return cowsay.list((err, cows) => {
  //     if (err) return err;
  //     cowsayCtrl.cows = cows;
  //   });
  // };
  // console.log(cowsayCtrl);
  // cowsayCtrl.cow = function(input) {
  //   $log.debug('#cowsayCtrl.cow');
  //   // console.log('cowsayCtrl.cow', cowsayCtrl.cow('turtle'));
  //   return cowsay.get(input);
  // };

  cowsayCtrl.speak = function(input) {
    $log.debug('#cowsayCtrl.text');
    input = cowsayCtrl.text;
    return cowsay.say({text: input || 'moo', f: 'turkey'});
  };

  cowsayCtrl.logger = function(input) {
    $log.debug('#cowsayCtrl.logger');
    $log.log(input);
    return input;
  };
}
