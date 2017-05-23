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
  
  cowsayCtrl.title = 'I like turtles.';
  
  cowsayCtrl.speak = function(input) {
    $log.debug('#cowsayCtrl.speak');
    
    return cowsay.say({text: input || 'I like turtles.', f: 'turtle'});
  }
  
  cowsayCtrl.logger = function(input) {
    $log.debug('#cowsayCtrl.logger');
    $log.log(input);
  }
  
  cowsayCtrl.showSecond = function() {
    $log.debug('#cowsayCtrl.showSecond');
    // document.getElementById('second').style.visibility = visible;
    // document.getElementById('second').setAttribute('visibility', 'visible');
    document.getElementById('second').classList.remove('second');
    
  }
}