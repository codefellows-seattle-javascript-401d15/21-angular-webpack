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

  cowsayCtrl.title = 'Welcome to the Farm';

  cowsayCtrl.speak = function(input, animal) {
    $log.debug('#cowsayCtrl.speak');
    return cowsay.say({text: input || 'Give me something to say.', f: animal});
  };

  cowsayCtrl.logger = function(input) {
    $log.debug('#cowsayCtrl.logger');
    $log.log(input);
  };

  cowsayCtrl.saved = {};

  cowsayCtrl.saved.title = 'Your saved Cow';


  cowsayCtrl.save = function(input, animal) {
    $log.debug('#cowsayCtrl.duplicate');
    cowsayCtrl.saved.text = input;
    cowsayCtrl.saved.animal = animal;
  };
}
