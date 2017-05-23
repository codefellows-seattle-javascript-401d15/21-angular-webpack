'use strict';

require('./scss/reset.scss')
require('./scss/main.scss')

const angular = require('angular')
const cowsay = require('cowsay-browser')

const cowsayApp = angular.module('cowsayApp', [])

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController])

let previous = []

function CowsayController($log, $scope) {
  $log.debug('#CowsayController')

  let cowsayCtrl = $scope.cowsayCtrl = {}

  cowsayCtrl.title = 'Welcome to COWVILLE HAHAHAHA LOLOLOL'

  cowsayCtrl.speak = function(input) {
    $log.debug('#cowsayCtrl.speak')
    return cowsay.say({text: input || 'MOOOOOOOOO', f: 'dragon'})
 }

 cowsayCtrl.logger = function(input) {
   $log.debug('#cowsayCtrl.logger')
   $log.log(input)

 }

 cowsayCtrl.changePre = function(input) {
   $log.debug('#change pre')
   previous.push(input)

 }

 cowsayCtrl.showPre = function() {
   return previous;
 }

}
