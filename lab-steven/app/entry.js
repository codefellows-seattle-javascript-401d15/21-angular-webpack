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

  cowsayCtrl.title = 'Take me to your leader!';
  cowsayCtrl.speak = function(input){
    $log.debug('#cowsayCtrl.speak');
    return cowsay.say({text: input || 'I am the great Cornholio!', f: 'beavis.zen'});
  };
  cowsayCtrl.logger = function(input){
    $log.debug('#cowsayCtrl.logger');
    $log.log(input);
  };

}
