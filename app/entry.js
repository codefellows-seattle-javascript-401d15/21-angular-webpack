'use strict'

require('./scss/main.scss')
require('./scss/reset.scss')

const angular = require('angular')
const cowsay = require('cowsay-browser')

const cowsayApp = angular.module('cowsayApp', [])

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController])

function CowsayController($log, $scope) {
  $log.debug('#CowsayController')

  let cowsayCtrl = $scope.cowsayCtrl = {}

  cowsayCtrl.hist = []

  cowsayCtrl.title = '...tis a silly place'

  cowsayCtrl.speak = function(input){
    $log.debug('#cowsayCtrl.speak')
    return cowsay.say({text: input || 'Go M\'s', f: 'tux'})
  }

  cowsayCtrl.logger = function(input){
    $log.debug('#cowsayCtrl.logger')

    cowsayCtrl.hist.push(input)
    $log.log(cowsayCtrl.speak(input))
    $log.log(cowsayCtrl.hist)
    return cowsayCtrl.speak(input)
  }

  cowsayCtrl.save = function(){
    $log.debug('#cowsayCtrl.save')

    let index = cowsayCtrl.hist.length - 1
    $log.log(cowsayCtrl.hist)

    $log.log(cowsayCtrl.speak(cowsayCtrl.hist[index]))
    return cowsay.say({text: cowsayCtrl.hist[index] || 'Go M\'s', f: 'tux'})

  }
}
